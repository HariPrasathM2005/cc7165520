import CustomerCard from '../components/CustomerCard';
import { useState, useEffect } from 'react';

function Home() {
    const [customer, setCustomers] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('customer')) || [];
        setCustomers(stored);
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            { customer.length === 0 ? (
                <p>No book ordered.</p>
            ) : (
                customer.map((s) => (
                    <CustomerCard key={s.id} customer={s} />
                ))
            )}
        </div>
    )
} 

export default Home;