const ProductModel = require('../models/productModel')


//Get products - {{base_url}}/api/v1/products
exports.getProducts = async(req,res,next)=>{
    const products = await Product.find()
    res.status(200).json({
        success : true,
        count : products.length,
        products
    })
}
// create product - {{base_url}}/api/v1/product/new
exports.newProdut = async (req,res,next) =>{
    const product = await ProductModel.create(req.body);
    res.status(201).json({
        success: true,
        product
})
}

//Get single product
exports.getSingleProduct = async(req,res,next) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        res.status(404).json({
            success : false,
            message : "Product not found"
        });
    }
    res.status(201).json({
        success : true,
        product
    })
}


