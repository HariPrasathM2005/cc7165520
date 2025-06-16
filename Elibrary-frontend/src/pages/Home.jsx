import CustomerCard from '../components/CustomerCard';
import { useState, useEffect } from 'react';
import bin from "../images/Dustbin.jpg";
function Home() {
    const [customer, setCustomers] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('customers')) || [];
        setCustomers(stored);
    }, []);

    const handleDelete=(id)=>{
        const updated=customer.filter((s)=>s.id!==id);//when id is not matched it is filtered out
        localStorage.setItem('customers',JSON.stringify(updated));
        setCustomers(updated);
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