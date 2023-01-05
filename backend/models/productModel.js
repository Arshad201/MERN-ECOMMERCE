const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Enter Product Description"],
        trim:true
    },
    price:{
        type:Number,
        required:[true, "Please Enter Product Price"],
        maxLength:[8, "Price cannot exceed 8 figures"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            publicId:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    category:{
        type:String,
        required:[true, "Please Enter Product Category"],
    },
    stock:{
        type:Number,
        required:[true, "Please Enter Product Stock"],
        maxLength:[true, "Product Stock can't exceed more than 4 Figures"],
        default:1
    },
    numOfReveiws:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            },
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Product', productSchema);