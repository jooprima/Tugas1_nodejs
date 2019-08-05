//file name : index.js

//import express
let express = require("express");

//import routes
let apiRoutes = require("./data-siswa");

//initialize app
let app = express();

//setuo server PORT
var port = process.env.PORT || 8080;

//send message for default URL
app.get("/", (req, res) =>
  res.send("Selamat datang di Data Center Siswa NIOMIC")
);

//app apiRoutes
app.use("/DataSiswa", apiRoutes);

//launnch app to listen specify PORT
app.listen(port, function() {
  console.log("Running RESThub on port " + port);
});
