import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CustomerForm from '../components/CustomerForm';

function EditCustomer() {
    const { id } = useParams();
    const [customer, setCustomers] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:2000/api/customers/${id}`).then((res) => {
            if(!res.ok) throw new Error("Failed to fetch customer data");
            return res.json();
        }).then((data) => {
            setCustomers(data);
        }).catch((error) => {
            console.error("Error fetching customer data:", error);
            alert("Failed to fetch customer data. Please try again.");
        })
    }, [id]);
    return (
        <div>
            {customer && <CustomerForm initialData={customer} />}
        </div>
    )
}

export default EditCustomer;