const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/jwtAuth"));

app.use("/api", require("./routes/home"));


app.listen(3001, () => {
    console.log('Server is running on port 3002');
});