//ejercicio de mascotas y usuarios

const express = require("express");
const app = express();
const PUERTO = 8080;

//array de usuarios

const users = [];

//array de mascotas

const pets = [];

//recibir datos en formato json
app.use(express.json());

//rutas
//rutas usuarios
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const nuevoUsuario = req.body;
  users.push(nuevoUsuario);
  res.send({ status: "success", message: "Usuario creado correctamente!" });
});
//ruta mascotas

app.get("/api/pets", (req, res) => {
  res.json(pets);
});

app.post("/api/pets", (req, res) => {
  const nuevaMascota = req.body;
  users.push(nuevaMascota);
  res.send({ status: "success", message: "Mascota creada correctamente!" });
});
//listen

app.listen(PUERTO, () => {
  console.log(`conectado en http://localhost:${PUERTO}`);
});
