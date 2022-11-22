const express = require ('express');
const mongoose = require ('mongoose');
require("dotenv").config();
const frutaRoutes = require("./routes/fruta");

const app = express();
const port = process.env.PORT || 9000;

app.set('json spaces', 2);

//middleware
app.use(express.json());
app.use('/api', frutaRoutes)


//RUTAS
app.get('/', (req,res) => {
    res.send('Bienvenido a la API');
});


//CONEXION A MONGODB
mongoose
.connect(process.env.MONGODB_URI).then (() => console.log("Conexion Completada"))
.catch ((error) => console.error (error));
app.listen(port, () => console.log ('server listo en puerto', port)); 