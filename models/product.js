const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    variants:[{
        color:{
            type:String,
            required:true
            
        },
        colorName:{
            type:String,
            required:true
        },
        size:{
            type:String,
            enum:['XS','S','M','L','XL','XXL']
        },
        images:[
        {
            url:{
                type:String, 
                required:true
            }
        }
    ],
    price:{
        type:Number,
        required:true
    }
        
        
    }],
    category:{
        type:mongoose.ObjectId,
        ref:'Category'
    }
    
  });
  const Product = mongoose.model('Product', productSchema);
  module.exports = Product