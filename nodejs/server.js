const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// function for mongodb connection using mongoose

const connectDB = async () => {
    try {
        await mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected…')
    } catch (err) {
        console.error("error happens:",err);
    }
}

connectDB();

const TodosSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    createdAt:{
        type: Date, default: Date.now
    }
  });
const Todos = mongoose.model('Todos', TodosSchema);

app.get('/', (req, res) => {
    res.send('Server is running!')
})

app.get('/todos', async (req, res) => {
    try {
         
        let todos = await Todos.find();
      
        res.json({
            data:todos,
            status: "success"
        })
        
    } catch (error) {
        res.status(501).json({
            data:[],
            status: "error",
            error: error
        })
        
    }
   
})
app.get('/todos/:id', async(req, res) => {
    try {
        const id = req.params?.id;
        // let todo = await Todos.find({id:id});
        let todo = await Todos.findOne({id:id});
        // let todo = await Todos.findById(id);
        res.json({
            data:todo,
            status: "success"
        })
        
    } catch (error) {
        res.status(501).json({
            data:[],
            status: "error",
            error: error
        })
        
    }
})
app.post('/todos/create', async (req, res) => {
      try {

       let newTodo = new Todos({
            id: req.body?.id,
            title: req.body?.title,
            description: req.body?.description
        })
       let output = await newTodo.save();
        res.json({
            data:output,
            status: "success"
        })
        
      } catch (error) {
        res.status(501).json({
            data:[],
            status: "error",
            error: error
        })
      }
   


})
app.put('/todos/update/:id', (req, res) => {
    try {
        let id = req.params?.id;
        res.json({
            data:[],
            status: "success"
        })
        
    } catch (error) {
        res.status(501).json({
            data:[],
            status: "error",
            error: error
        })
    }
})
app.delete('/todos/delete/:id', async (req, res) => {
    try {
        let id = req.params?.id;
        let todo = await Todos.findOneAndDelete({id:id});
        res.json({
            data:todo,
            status: "success"
        })
        
    } catch (error) {
        res.json({
            data:[],
            status: "error",
            error: error
        })
    }
})




app.get('/products', (req, res) => {
    // id:1,
    //             title:'...',
    //             price:'...',
    //             category:'...',
    //             description:'...',
    //             image:'...'
    let products = [
        { id: 1, title: 'Product 1 by naveed', price: 100, category: 'Category 1', description: 'Description 1', image: 'Image 1' },
        { id: 2, title: 'Product 2', price: 200, category: 'Category 2', description: 'Description 2', image: 'Image 2' },
        { id: 3, title: 'Product 3', price: 300, category: 'Category 3', description: 'Description 3', image: 'Image 3' },
        { id: 4, title: 'Product 4', price: 400, category: 'Category 4', description: 'Description 4', image: 'Image 4' },
    ]
    res.json(products)
});

// add - post method
// update - put method
// delete - delete method
// get - get method

app.get('/xyz', (req, res) => {
    let users = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 22 },
        { name: 'Jim', age: 32 }
    ]
    res.json(users)
});




app.get('/v1/users/:id/:doc',(req, res)=>{
    try {
     
        console.log('req.headers recieved', req.headers);
        
    
        let data = [{
            id: req.query?.id,
            name:req.query?.userName,
            age:25
    }]
        res.status(200).json({
            data:data,
            status: "success"
        })
    } catch (error) {
        res.status(501).json({
            data:[],
            status: "error",
            error: error
        })
    }
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})