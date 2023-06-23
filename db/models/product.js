var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name'
    },
    type: {
        type: String,
        default: 'No Type'
    },
    brand: {
        type: String,
        default: 'No Brand'
    },
    color: {
        type: String,
        default: 'No Color'
    },
    size: {
        type: String,
        default: 'No Size'
    },
    price: {
        type: String,
        default: 'No Price'
    }
});

module.exports = mongoose.model('product', productSchema, 'product');
