import React from 'react';
import { Link } from 'react-router-dom';

const Home =()=>{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center sm:px-4">
            <h2 className="text-2xl font-bold mb-2">Bienvenid@ a mi Restaurante: "Los Agradecidos"</h2>
            <p className="text-lg">Disfruta la mejor comida</p>
            <img src ="/img/menudia.png" alt="Menu" className="mt-4"/>
            <p className="text-lg font-bold">Reserva con esta Descripción:</p>
            <p className="text-lg">Opcion 1: Spagueti a la Bolognesa </p>
            <p className="text-lg">Opcion 2: Seco de Cordero </p>
            <p className="text-lg">Opcion 3: Tortillas de Espinaca </p>
            < br />
            <Link to="/reservations"className="text-red-500">
                <button>Ir a Reservas</button>
            </Link>
            <section className="mt-8 bg-gray-500 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Contacto e Información</h3>
                <p className="text-lg">Teléfono y Whatsapp: +51-234567890</p>
                <p className="text-lg">Dirección: Calle Uno #379 - Lima - Peru</p>
                <p className="text-lg">Correo electrónico: info@losagradecidos.com</p>
            </section>
        </div>
    )
}

export default Home