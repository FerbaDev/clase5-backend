//ejercicio de mascotas y usuarios

const express = require("express");
const app = express();
const PUERTO = 8080;
const userRouter = require("./routes/users.router.js");
const petsRouter = require("./routes/pets.router.js");

//recibir datos en formato json
app.use(express.json());

//rutas

//listen

app.listen(PUERTO, () => {
  console.log(`conectado en http://localhost:${PUERTO}`);
});
