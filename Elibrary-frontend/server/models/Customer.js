const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({
    name: String,
    phone: String,
    bookname: String,
    email: String,
}, {
    timestamps: true,
});
module.exports = mongoose.model("Customer", customerSchema);