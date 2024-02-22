const express = require("express");
//invocamos el método router de express
const router = express.Router();
//traemos las rutas

//array de usuarios

const users = [];

//rutas usuarios
router.get("/api/users", (req, res) => {
  res.json(users);
});

router.post("/api/users", (req, res) => {
  const nuevoUsuario = req.body;
  users.push(nuevoUsuario);
  res.send({ status: "success", message: "Usuario creado correctamente!" });
});

//exportamos el router
module.exports = router;
