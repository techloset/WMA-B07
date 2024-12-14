const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const secretKey = 'lkasdfjlkasjdf#sadfs$@%JSDFsdf';

const authVerify = (req, res, next) => {
    try {
        console.log('req.headers recieved', req.headers);
        if (!req.headers.authorization) {
            res.json({
                data: [],
                status: "error",
                error: "Login required"
            })
        }
        var decoded = jwt.verify(req.headers.authorization, secretKey);
        console.log('decoded', decoded);
        if (!decoded) {
            res.json({
                data: [],
                status: "error",
                error: "Login required"
            })
        }
        req.body.user = decoded;
        next();
    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
}



// function for mongodb connection using mongoose

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://smtp:xUBDY06s4aTaGaOA@cluster0.umlgkew.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected…')
    } catch (err) {
        console.error("error happens:", err);
    }
}

connectDB();

const TodosSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
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
            data: todos,
            status: "success"
        })

    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })

    }

})
app.get('/todos/:id', authVerify,async (req, res) => {
    try {
        const id = req.params?.id;
        // let todo = await Todos.find({id:id});
        let todo = await Todos.findOne({ id: id });
        // let todo = await Todos.findById(id);
        res.json({
            data: todo,
            status: "success"
        })

    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })

    }
})
app.post('/todos/create', authVerify,async (req, res) => {
    try {

        let newTodo = new Todos({
            id: req.body?.id,
            title: req.body?.title,
            description: req.body?.description
        })
        let output = await newTodo.save();
        res.json({
            data: output,
            status: "success"
        })

    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })
    }



})
app.put('/todos/update/:id', authVerify,(req, res) => {
    try {
        let id = req.params?.id;
        res.json({
            data: [],
            status: "success"
        })

    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })
    }
})
app.delete('/todos/delete/:id',authVerify, async (req, res) => {
    try {
        let id = req.params?.id;
        let todo = await Todos.findOneAndDelete({ id: id });
        res.json({
            data: todo,
            status: "success"
        })

    } catch (error) {
        res.json({
            data: [],
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

app.post('/xyz', async (req, res) => {
    
    try {
        console.log('req.body recieved', req.body.token);
        var decoded = jwt.verify(req.body.token, secretKey);
        console.log('decoded', decoded);
        if (!decoded) {
            res.json({
                data: [],
                status: "error",
                error: "Login required"
            })
        }
        res.json({
            data: decoded,
            status: "success"
        })
    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
});




app.get('/v1/users/:id/:doc', (req, res) => {
    try {

        console.log('req.headers recieved', req.headers);


        let data = [{
            id: req.query?.id,
            name: req.query?.userName,
            age: 25
        }]
        res.status(200).json({
            data: data,
            status: "success"
        })
    } catch (error) {
        res.status(501).json({
            data: [],
            status: "error",
            error: error
        })
    }

})




const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: String,
});

const User = mongoose.model('User', userSchema);

app.post('/auth/login', async (req, res) => {
    try {
        if (!req.body?.email) {
            res.json({
                data: [],
                status: "error",
                error: "email is required"
            })
            
        }
        if (!req.body?.password) {
            res.json({
                data: [],
                status: "error",
                error: "password is required"
            })
        }

        const userFound = await User.findOne({ email: req.body.email });

        if (!userFound) {
            res.json({
                data: [],
                status: "error",
                error: "user not found"
            })
        }

        console.log("userFound", userFound);
        
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            userFound.password
        );

        if (!passwordIsValid) {
            res.json({
                data: [],
                status: "error",
                error: "password is invalid"
            })
        }

        var token = jwt.sign({_id:userFound._id, email:  userFound.email, name:userFound.name }, secretKey);
        console.log('token', token);

        res.json({
            data: {
                token:token,
                email: userFound.email,
                name: userFound.name,
                address: userFound.address
            },
            status: "success"
        })

    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
})

app.post('/auth/signup', async (req, res) => {
    try {
        console.log('req.body recieved', req.body);
        if (!req.body?.password) {
            res.json({
                data: [],
                status: "error",
                error: "password is required"
            })
        }
        var hash = bcrypt.hashSync(req.body.password, 8);
        console.log('hash', hash);
        let newUser = new User({
            name: req.body?.name,
            email: req.body?.email,
            password: hash,
            address: req.body?.address
        })

        let output = await newUser.save();
        res.json({
            data:output,
            status: "success"
        })

    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// auth - login/signup
// file upload
//  frontend > storage -> url -> api -> db
// frontend > api -> storage -> url -> db

// folder structure
// frontend
// Nextjs




// l;kasdfkljaslkdfjlasjdfkasjdfklajsdfklafd
// secret key