import React from 'react'
import Home from './components/Home'
import Reservations from './components/Reservations'
import Comentarios from './components/Comentarios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const navItems = [
  { id: nanoid(), name: 'Home', path: '/' },
  { id: nanoid(), name: 'Reservas', path: '/reservations' },
  { id: nanoid(), name: 'Comentarios', path: '/comentarios' },
]

function App() { 
  return (    
    <BrowserRouter>
      <header className="bg-yellow-500 text-white p-4 text-right">
        <h2 className="text-xl text-left italic">App Restaurante "Los Agradecidos"</h2>
        <h1 className="text-xl text-left italic">Autor: Priscila Elías</h1>
        <nav className="mt-2">
          {navItems.map(item => (
            <Link key={item.id} to={item.path} className="mr-4 text-red-500">{item.name}</Link>
          ))}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>

      <footer className="bg-yellow-500 text-white p-4 mt-4">
      <p>© 2023 Restaurante Los Agradecidos. Todos los derechos reservados.</p>
      <div className="flex mt-4">
        <Link to="https://www.instagram.com/">
          <FaInstagram className="text-white mr-4" size={24} />
        </Link>
        <Link to="https://www.facebook.com/">
          <FaFacebook className="text-white" size={24} />
        </Link>
      </div>
    </footer>
    </BrowserRouter>
  );
}

export default App;