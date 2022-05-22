const router = require('express').Router();
const pool = require("../db");
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator')
const validInfo = require('../middleware/validinfo')
const authorization = require('../middleware/authorization')

//signup 
router.post('/signup', validInfo, async(req, res) => {
  try{
    const {name, email, password, comfirmpassword} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
      email
    ]);
    console.log(user.rows) 
   

    if(user.rows.length !== 0) {
      return res.status(401).send("User already exists)");
    }
   

    const saltRound = 10;
    const genSalt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, genSalt);

    const bcryptComfirmpassword = await bcrypt.hash(comfirmpassword, genSalt);


  
    const  newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password, user_comfirmpassword) VALUES ($1, $2, $3, $4) RETURNING *", [ 
      name,
      email,
      bcryptPassword,
      bcryptComfirmpassword
    ]);
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({token})
    res.send(newUser.rows[0]);

    

  }catch(err){
   console.error(err.message);
   res.status(500).send("Server Error");
  }
});

//login route//
router.post('/login', validInfo, async(req, res) => {
  try{
const {email, password} = req.body;

const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
  email
]);

if(user.rows.length === 0) {
  return res.status(401).send("User does not exist");
}

const isMatch = await bcrypt.compare(password, user.rows[0].user_password);

if(!isMatch) {
  return res.status(401).send("Incorrect password");
}

const token = jwtGenerator(user.rows[0].user_id);
res.json({token});


  }catch (err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
  router.get("/isLoggedIn", authorization, async(req, res) => { 
    try{
      res.json(true);
    }catch (err){
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
})
 
module.exports = router;