const router = require('express').Router();
const pool = require("../db");
const bcrypt = require('bcrypt')

//signup 
router.post('/signup', async(req, res) => {
  try{
    const {name, email, password, comfirmpassword} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
      email
    ]);
    res.json(user.rows);
   

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

    res.send(newUser.rows[0]);

  }catch(err){
   console.error(err.message);
   res.status(500).send("Server Error");
  }
});


module.exports = router;