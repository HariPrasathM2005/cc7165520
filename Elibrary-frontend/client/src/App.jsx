import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import AddCustomer from "./pages/AddCart";
import Book from "./images/Books.jpg";
import EditCustomer from "./components/EditCustomer";
import { HomeIcon } from '@heroicons/react/24/solid'
import { FaHome } from 'react-icons/fa';
function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Book})` }}>
        <h1 className="absolute top-6 left-130 text-5xl font-bold text-blue-200 mt-0">
          E-library
        </h1>
        <FaHome size={24} className="text-gray-700" />
        <div className="space-x-6">
          <Link
            to="/"
            className="text-red-200 font-medium"
          >

          <a
            href="#"
            className="absolute top-10 left-185 bg-gradient-to-r from-blue-500 to-green-500 text-red-900 px-4 py-2 rounded shadow-md hover:opacity-90">
            <span className='text-white'>Home</span>
          </a>
          </Link>

          <Link
            to="/add"
            className="text-white hover:text-white font-bold transition-colors"
          >
          <a
            href="#"
            className="absolute top-10 left-215 bg-gradient-to-r from-blue-500 to-green-500 text-red-900 px-4 py-2 rounded shadow-md hover:opacity-90">
            <span className='text-white'>Borrow</span>
          </a>
          </Link>
        </div>
        <main className="flex-1 flex ustify-center items-start">
          <div className="w-full max-w-5xl bg-blue rounded-lg shadow p-8 mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddCustomer />} />
              <Route path="/edit/:id" element={<EditCustomer />}/>
            </Routes>
          </div>
        </main>
      </div>
      <div className="absolute top-130 left-270 bg-gradient-to-r from-blue-500 to-green-500 shadow-md rounded-xl p-4 text-gray-800">
          <p>
              <strong className='text-white'>By Hari Prasath M</strong>
          </p>
          <p>
              <strong className='text-white'>III ECE-A</strong>
          </p>
      </div>
    </Router>
  );
}

export default App;