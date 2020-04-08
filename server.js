const express = require("express");
const app = express();
let hour = new Date().getHours();
console.log(hour);
app.use(express.static(__dirname + "/pages"));
app.get("/", (req, res) => {
  if (hour < 17 && hour >= 8) {
    res.sendFile(__dirname + "/pages/home.html");
    console.log("Notre bureau est ouvert maintenant ");
  } else {
    res.sendFile(__dirname + "/pages/ourservices.html");
    console.log("Notre bureau n'est pas ouvert maintenant");
  }
});

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
