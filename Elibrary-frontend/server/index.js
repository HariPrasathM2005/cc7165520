require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Customer = require("./models/Customer");

const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  });

app.get("/", (req, res) => {
  res.send("API is running!");
});

// get all customers
app.get("/api/customers", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// get customer by id
app.get("/api/customers/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if(customer) res.json(customer);
  else res.status(404).json({ message: "Customer not found" });
});

// add a new customer
app.post("/api/customers", async (req, res) => {
  const newCustomer = new Customer(req.body);
  await newCustomer.save();
  res.status(201).json({ message: "Customer added successfully", customer: newCustomer });
});

// update an existing customer
app.put("/api/customers/:id", async (req, res) => {
  await Customer.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Customer updated successfully" });
});

// delete a customer
app.delete("/api/customers/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted successfully" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});