function CustomerCard({ customer }) {
    return (
        <div className="bg-yellow-300 shadow-md rounded-xl p-4 text-gray-800">
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
        </div>
    )
}

export default CustomerCard;