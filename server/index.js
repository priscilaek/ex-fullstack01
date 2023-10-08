//ESModules
import express from "express";

//console.log("importación de express exitosa")
//2. INICIALIZADORES
const app = express()

const data =[{
    id: 0,
    title:"reservacion",
    descripcion: "Quiero una reservacion a Cancun, Mexico"
},
{
    id: 1,
    title: "reservacion 2",
    descripcion: "Quiero una reservacion a Veracruz, Mexico"
}]
//3. RUTAS
// LOCALHOST
app.get("/", (req, res) => {
    res.json({
        msg: "Este es un mensaje",
        data: data
    })
})
//4. LISTENERS
app.listen(3005, () => console.log("servidor encendido"))