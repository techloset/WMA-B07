const Product = require("../models/productModel")

const getProducts = async (req, res) => {
 try {

    // const products = await Product.find({name:"iphon 16", price: { $gt: 1000 }}).limit(5).sort({price: -1}).select({name:1, price:1});
    let search = req.query.search;
    let searchQuery = new RegExp(search, 'i')
    
    console.log(searchQuery)

    // const products = await Product.find({name:{ $regex: searchQuery}}).limit(5).sort({price: -1});

    const options = {
        page: req.query.page || 1,
        limit:  req.query.limit || 10,
      };
   const products = await  Product.paginate({}, options)
     return res.json({
         data: products,
         status: "success"
     })

 } catch (error) {
  return res.json({
        data: [],
        status:"error",
        error: error
    })
 }
}


const createProduct = async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image
        })

        const product = await newProduct.save();
       
        return res.json({
            data: product,
            status: "success"
        })

    } catch (error) {
        return res.json({
            data: [],
            status:"error",
            error: error
        })
    }
}

module.exports = {
    getProducts,
    createProduct
}