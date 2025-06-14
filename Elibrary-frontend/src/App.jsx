import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import AddCustomer from "./pages/AddCart";
import Book from "./images/Books.jpg";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Book})` }}>
        <h1 className="absolute top-6 left-130 text-5xl font-bold text-blue-200 mt-0">
          E-library
        </h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-red-200 font-medium"
          >
          <a
            href="#"
            className="absolute top-15 left-185 bg-purple-800 text-red-800 px-2 py-1 rounded">
            Home
          </a>
          </Link>

          <Link
            to="/add"
            className="text-white hover:text-white font-bold transition-colors"
          >
          <a
            href="#"
            className="absolute top-15 left-205 bg-purple-800 text-red-800 px-2 py-1 rounded">
            Add Cart
          </a>
          </Link>
        </div>
        <main className="flex-1 flex ustify-center items-start">
          <div className="w-full max-w-5xl bg-blue rounded-lg shadow p-8 mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddCustomer />} />
            </Routes>
          </div>
        </main>
      </div>
      <div className="absolute top-130 left-270 bg-yellow-300 shadow-md rounded-xl p-4 text-gray-800">
          <p>
              <strong>By Hari Prasath M</strong>
          </p>
          <p>
              <strong>III ECE-A</strong>
          </p>
      </div>
    </Router>
  );
}

export default App;