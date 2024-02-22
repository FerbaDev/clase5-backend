const express = require("express");
//invocamos el método router de express
const router = express.Router();
//traemos las rutas

//array de mascotas

const pets = [];

//rutas mascotas
//reemplazamos app por router

router.get("/api/pets", (req, res) => {
  res.json(pets);
});

router.post("/api/pets", (req, res) => {
  const nuevaMascota = req.body;
  users.push(nuevaMascota);
  res.send({ status: "success", message: "Mascota creada correctamente!" });
});

//exportamos el router
module.exports = router;
