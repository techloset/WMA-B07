const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000

app.use(cors())

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})