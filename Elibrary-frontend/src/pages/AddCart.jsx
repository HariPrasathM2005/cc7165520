import { useNavigate } from "react-router-dom";
import CustomerForm from "../components/CustomerForm";

function AddCart() {
    const navigate = useNavigate();
    const handleAdd = (customer) => {
        const existing = JSON.parse(localStorage.getItem("customer")) || [];

        const updated = [...existing, customer];
        localStorage.setItem("customer", JSON.stringify(updated));
        navigate("/");
    }
    return (
        <div>
            <CustomerForm onAdd={handleAdd} />
        </div>
    )
}
export default AddCart;