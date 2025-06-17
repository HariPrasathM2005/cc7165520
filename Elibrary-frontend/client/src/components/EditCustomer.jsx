import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CustomerForm from '../components/CustomerForm';

function EditCustomer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomers] = useState(null);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('customers')) || [];
        const found = stored.find(s => s.id === parseInt(id));
        if(!found) return navigate('/');
        setCustomers(found);
    }, [id, navigate]);

    const handleUpdate = (updatedCustomer) => {
        const stored = JSON.parse(localStorage.getItem('customers')) || [];
        const updatedList = stored.map(s => s.id === parseInt(id) ? updatedCustomer : s);
        localStorage.setItem("customers", JSON.stringify(updatedList));
        navigate('/');
    }
    return (
        <div>
            {customer && <CustomerForm onAdd={handleUpdate} initialData={customer} />}
        </div>
    )
}

export default EditCustomer;