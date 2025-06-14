import { useState } from 'react';
import Page from "../images/Pages.jpg";
function CustomerForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        bookname: "",
        email: "",
        city: "Chennai",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.bookname)
          return alert("Name and Bookname are required");
        onAdd({ ...form, id: Date.now() });
        setForm({
            name: "",
            phone: "",
            bookname: "",
            email: "",
            city: "Chennai",
        });
    }

    return (//Contains properties of box
      <form
        onSubmit={handleSubmit}
      >
        <div
            className="absolute top-10 left-60 scale-75 min-h-screen w-220 h-110 bg-cover"
            style={{ backgroundImage: `url(${Page})` }}>
        
        <h2 className="absolute top-15 left-84 text-red-800 text-xl font-semibold mb-4"> Add Order </h2>
        <input
          className="absolute top-35 left-20 text-blue-700 font-bold w-75 p-2 border mb-8"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="absolute top-65 left-20 text-blue-700 font-bold w-75 p-2 border mb-3"
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className="absolute top-95 left-20 text-blue-700 font-bold w-75 p-2 border mb-3"
          type="text"
          name="bookname"
          placeholder="Book Name"
          value={form.bookname}
          onChange={handleChange}
          required
        />
        <input
          className="absolute top-125 left-20 text-blue-700 font-bold w-75 p-2 border mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit" className="absolute top-135 left-170 bg-blue-500 text-white py-2 px-4 rounded">
            Add Customer
        </button>
        </div>
      </form>
    );
}
export default CustomerForm;