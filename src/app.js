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
//app.use(express.static("public"))

//prefijo virtual: para mantener la carpeta public conm mas privacidad
app.use("/static", express.static("public"));

//MULTER: para cargar archivos al servidor
//instalar con npm i multer
//importamos el modulo
const multer = require("multer");
//configurar con upload
//const upload = multer({dest: "public/img"});/////////////////////////////////////////////////////////

//si queremos que los archivos se guarden en la carpeta correcta y con el formato correcto
//tenemos que configurar un STORAGE
//con destinatios y filename

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img"); //carpeta donde se guardan las imagenes
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);//mantengo el nombre del archivo original
  }
})
const upload = multer({storage: storage })

//ahora hacemos una ruta de post
// app.post("/upload", upload.single("imagen"), (req, res) => {
//   res.send("img cargada")
// })
 //

//para subir varios archivos:
app.post("/upload", upload.array("imagen"), (req, res) => {
  res.send("imagenes cargadas")
})