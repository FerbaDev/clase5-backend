//ejercicio de mascotas y usuarios

const express = require("express");
const app = express();
const PUERTO = 8080;
const usersRouter = require("./routes/users.router.js");
const petsRouter = require("./routes/pets.router.js");

//recibir datos en formato json
app.use(express.json());

//rutas
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter)
//listen

app.listen(PUERTO, () => {
  console.log(`conectado en http://localhost:${PUERTO}`);
});
//configuramos express para mostrar carpeta static public
app.use(express.static("public"))