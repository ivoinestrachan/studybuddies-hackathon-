const router = require ('express').Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get('/home', authorization, async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM user_name WHERE user_id = $1"[req.user]);
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;