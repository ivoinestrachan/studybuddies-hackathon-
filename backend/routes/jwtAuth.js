const router = require('express').Router();
const pool = require("../db");
const bcrypt = require('bcrypt');

//signup 
router.post('/signup', async(req, res) => {
  try{
    const {name, username, password} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_username = $1", [
      username
    ]);

    res.json(user.rows);

    if(user.rows.length !== 0) {
      return res.status(401).send("User already exists)");
    }

    const saltRound = 10;
    const genSalt = await bcrypt.genSalt(saltRound);
    const bcrypt = await bcrypt.hash(password, genSalt);

    const  newUser = await pool.query("INSERT INTO users (first_name, user_name, user_password) VALUES ($1, $2, $3) RETURNING *", [ 
      name,
      username,
      bcryptPassword
    ]);

    res.send(newUser.rows[0]);

  }catch(err){
   console.error(err.message);
   res.status(500).send("Server Error");
  }
});


module.exports = router;