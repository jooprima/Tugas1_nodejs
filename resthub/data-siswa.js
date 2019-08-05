//initialize express Router
let router = require("express").Router();

//set default API response
router.get("/", function(req, res) {
  res.json({
    nama: "Richard Muhammad",
    tanggal_lahir: "14 Januari 1994",
    jenis_kelamin: "laki-laki",
    hobi: "Membaca buku"
  });
});

//exports api
module.exports = router;
