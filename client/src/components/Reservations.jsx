import { useEffect, useState } from "react"

function Reservations() {
    const [reservations, setReservations] = useState([]);
    const [newReservation, setNewReservation] = useState({
      cliente: "",
      telefono: "",
      description: "",
      date: "",
    });
  
    const serverUrl = import.meta.env.VITE_SERVER_URL;
  
    // HOOK
    // Manejar efectos laterales (procesos asíncronso)
    useEffect(() => {
      const fetchReservations = async () => {
        const response = await fetch(serverUrl);

        if (response.headers.get("content-type").includes("application/json")) {
            const allReservations = await response.json();
            setReservations(allReservations.data);
          } else {
            console.error("No se recibió un JSON válido");
          }
  
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
    <div className="bg-blue-400 py-4">
      <h2 className="text-center text-3xl text-gray-900 sm:text-4xl">
          Haga aquí su reservación:
      </h2>
    </div>
    <div className="flex flex-col items-center justify-center py-2 text-center sm:px-4">
      <form
        className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => handleSubmit(e, newReservation)}
      >
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Registre su nombre y apellidos</label>
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="cliente"
        onChange={(e) => handleChange(e)}
        value={newReservation.cliente}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Registre su número de teléfono</label>
        <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="telefono"
        onChange={(e) => handleChange(e)}
        value={newReservation.telefono}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Describa del menú elegido</label>
        <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="description"
        onChange={(e) => handleChange(e)}
        value={newReservation.description}
        />
    </div>
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Fecha de Reserva</label>
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="datetime-local"
        name="date"
        onChange={(e) => handleChange(e)}
        value={newReservation.date}
    />
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Crear reservación</button>
    </form>
    </div>

    <div className="flex flex-col items-center justify-center">
        {reservations.length === 0 ? (
          <p className="text-gray-500">No hay reservaciones...</p>
        ) : (
          reservations.map((e) => {
            return (
              <div key={e.id} className="mb-4">
                <h1 className="text-xl font-bold">Nuestros clientes nos prefieren:</h1>
                <br />
                <h1 className="text-xl font-bold">Cliente: {e.cliente}</h1>
                <h1 className="text-xl font-bold">Telefono: * {e.telefono.substring(e.telefono.length - 4)}</h1>
                <p>Descripción: {e.description}</p>
                <p>Fecha: {e.date}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Reservations;