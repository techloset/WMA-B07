const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const productRouter = require('./routes/productRoutes');



// app creation
const app = express()
const port = process.env.PORT || 8000;


// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// config
dotenv.config();
connectDB();


app.get('/', (req, res) => {
    res.send('Server is running!')
})

// Routes
app.use("/auth",authRoutes);
app.use("/todos",todoRoutes);
app.use("/products",productRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})