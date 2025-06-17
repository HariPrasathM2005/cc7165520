const express=require('express');//webserver
const path=require('path');
const fs=require('fs');//for data transfer from local storage
const cors=require('cors');//to prevent error

const app=express();
const PORT=2000;
const DATA_PATH=path.join(__dirname,"data","customers.json");
app.use(cors());
app.use(express.json());
const readCustomer=() => JSON.parse(fs.readFileSync(DATA_PATH));
const writeCustomer=(data)=>{
    fs.writeFileSync(DATA_PATH,JSON.stringify(data,null,2));
}
app.get('/',(req,res)=>{
    res.send('API is working!');
});

app.get('/api/customers',(req,res)=>{
    try{
        const customers=readCustomer();
        res.json(customers);
    }
    catch(error){
        res.status(500).json({message: 'Error reading customer data'});
    }
});
app.get('/api/customers/:id',(req,res) => {//for data fetching
    const customers = readCustomer();
    const customer=customers.find(s => s.id === parseInt(req.params.id));
    if(customer)
    {
        res.json(customer);
    }
    else
    {
        res.status(404).json({message: "Customer Not Found"});
    }
});

app.post('/api/customers',(req,res) => {//for inserting data
    const customers=readCustomer();
    const newCustomer={...req.body, id: Date.now()};
    customers.push(newCustomer);
    writeCustomer(customers);
    res.status(201).json(newCustomer);
});
app.put('/api/customers/:id', (req,res) => {//for updating data
    let customers=readCustomer();
    const id=parseInt(req.params.id);
    customers=customers.map((s) => (s.id === id ? {...s, ...req.body}:s));
    writeCustomer(customers);
    res.json({message:"Customer updated successfully"});
});
app.delete('/api/customers/:id', (req,res) => {//for deleting data
    let customers=readCustomer();
    customers=customers.filter(s => s.id!==parseInt(req.params.id));
    writeCustomer(customers);
    res.json({message:"Customer deleted successfully"});
});
app.use((req,res) => {
    res.status(404).json({message: "Route not found"});
})
app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});
