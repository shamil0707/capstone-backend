
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    slug: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
  });


  const Category = mongoose.model('Category', categorySchema);

  module.exports = Category
