// 1. IMPORTACIONES
import express from "express";
import cors from "cors";

// 2. INICIALIZADORES
const app = express();

app.use(cors());
app.use(express.json());

let data = [
  {
    id: 0,
    cliente: "Abel Zabala",
    telefono: "99999997",
    description: "Opción 2, sin frejoles.",
    date: "2023-10-21T12:36"
  },
  {
    id: 1,
    cliente: "Damaris Guerra",
    telefono: "99999992",
    description: "Opción 1, con bastante queso.",
    date: "2023-10-23T13:00"
  }
];

// 3. RUTAS
// GET - OBTENCIÓN DE DATOS (RESERVACIONES)
// localhost:3005/
app.get("/", (req, res) => {
  res.json({
    msg: "Este es un mensaje",
    data: data
  });
});

// POST - CREAR UNA RESERVACIÓN
app.post("/", (req, res) => {
  console.log("req", req.body);

  const { cliente, telefono, description, date } = req.body;

  data.push({
    cliente,
    telefono,
    description,
    date
  });

  res.json({
    msg: "Reservación agregada",
    data: data,
  });
});

// 4. LISTENERS
app.listen(3005, () => console.log("servidor encendido"));