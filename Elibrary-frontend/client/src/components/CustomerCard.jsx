import { useNavigate } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { PencilIcon } from '@heroicons/react/24/solid';

function CustomerCard({ customer,onDelete }) {
    const navigate=useNavigate();
    return (
        <div className="mt-10 bg-yellow-300 shadow-md rounded-xl p-4 text-gray-800">
            <p>
                <strong>Name:</strong> {customer.name}
            </p>
            <p>
                <strong>Phone Number:</strong> {customer.phone}
            </p>
            <p>
                <strong>Book Name:</strong> {customer.bookname}
            </p>
            <p>
                <strong>Email:</strong> {customer.email}
            </p>
            <div className="mt=4 flex gap-3 ">
                <PencilIcon className="w-5 h-5" size={60}/>
                <button onClick={() => navigate(`edit/${customer._id}`)} 
                    className="bg-gradient-to-r from-blue-400 to-purple-800 text-red-900 px-4 py-2 rounded shadow-md hover:opacity-90">
                        <span className="text-white">Edit</span>
                </button>
                <FaTrash size={40}/>
                <button  onClick={() => onDelete(customer._id)}
                    className="bg-gradient-to-r from-red-500 to-red-900 text-red-900 px-4 py-2 rounded shadow-md hover:opacity-90">
                        <span className="text-white">Delete</span>
                </button>
            </div>
        </div>
        
    )
}

export default CustomerCard;