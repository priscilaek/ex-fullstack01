import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    title: "",
    description: "",
  });

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  // HOOK
  // Manejar efectos laterales (procesos asíncronso)
  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(serverUrl);
      const allReservations = await response.json();

      setReservations(allReservations.data);

      return;
    };

    fetchReservations();
  }, []);

  const handleSubmit = (e, data) => {
    e.preventDefault();

    console.log("data", data);

    const sendData = async () => {
      const response = await fetch(serverUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      const successData = await response.json();
      console.log("successData", successData);

      setReservations(successData.data);
    };

    sendData();
  };

  const handleChange = (e) => {
    setNewReservation({
      ...newReservation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <form
          style={{ display: "flex" }}
          onSubmit={(e) => handleSubmit(e, newReservation)}
        >
          <div>
            <label>Título Reservación</label>
            <input
              name="title"
              onChange={(e) => handleChange(e)}
              value={newReservation.title}
            />
          </div>
          <div>
            <label>Descripción Reservación</label>
            <textarea
              name="description"
              onChange={(e) => handleChange(e)}
              value={newReservation.description}
            />
          </div>

          <button>Crear reservación</button>
        </form>
      </div>

      {reservations.length === 0 ? (
        <p>No hay reservaciones...</p>
      ) : (
        reservations.map((e) => {
          return (
            <div key={e.id}>
              <h1>{e.title}</h1>
              <p>Descripción: {e.description}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;