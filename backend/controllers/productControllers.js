const Product = require("../models/productModel");
const errorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//Admin Controller
exports.createProduct = catchAsyncError( async (req,res,next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })

})

//For All
exports.getAllProducts = catchAsyncError( async (req,res,next) => {
    const products = await Product.find();

    res.status(201).json({
        success:true,
        products
    })

})

//Update Product
exports.getProductDetails = catchAsyncError( async (req,res,next) => {

    const product = await Product.findById(req.params.id);
    
    if(!product){
       return next(new errorHandler(`Product doesn't Exist wih id :${req.params.id}`, 500));
    }

    res.status(201).json({
        success:true,
        product
    })

})

//Update Product
exports.updateProduct = catchAsyncError( async (req,res,next) => {

    let product = await Product.findById(req.params.id);

    if(!product){
       return next(new errorHandler(`Product doesn't Exist wih id :${req.params.id}`, 500));
    }
    
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, useFindAndmodify:false});

    res.status(201).json({
        success:true,
        product
    })

})


//Delete Product
exports.deleteProduct = catchAsyncError( async (req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new errorHandler(`Product doesn't Exist wih id :${req.params.id}`, 500));
     }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product is deleted Successfully!"
    })

})
