import CustomerCard from '../components/CustomerCard';
import { useState, useEffect } from 'react';
function Home() {
    const [customer, setCustomers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:2000/api/customers")
        .then((res) => res.json())
        .then((data) => setCustomers(data))
        .catch((error) => {
            console.error("Error fetching customers:", error);
            alert("Failed to fetch customers. Please try again.");
        });
    }, []);

    const handleDelete= async (id)=>{
        await fetch(`http://localhost:2000/api/customers/${id}`, {
            method: 'DELETE',
        });
        setCustomers((prev) => prev.filter((s) => s._id !== id));
        alert("Customer deleted successfully");
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            { customer.length === 0 ? (
                <p>No book ordered.</p>
            ) : (
                customer.map((s) => (
                    <CustomerCard key={s.id} customer={s} onDelete={handleDelete}/>
                ))
                
            )}
        </div>
    )
} 

export default Home;