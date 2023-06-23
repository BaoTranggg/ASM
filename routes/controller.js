var express = require('express');
var router = express.Router();
var product = require('./../db/models/product');

router.get('/', (req, res) => {
    res.render('home');
});
/**
 * List page: loading all product
 */
router.get('/list', (req, res) => {
    console.log("Hello");
    product.find({})
        .then(product => {
            console.log(product)
            return res.render('list', { product: product,title: "Hello Footwear!!!" })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

/**
 * Go to Add product page
 */
router.get('/add-product', (req, res) => {
    res.render('add-product');
});

/**
 * Add new product
 */
router.post('/list', (req, res) => {
    let newproduct = new product({
        name: req.body.productName,
        type: req.body.productType,
        brand: req.body.productBrand,
        color: req.body.productColor,
        size: req.body.productSize,
        price: req.body.productPrice
    });

    newproduct.save()
        .then(doc => {
            res.redirect('/list')
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

/**
 * Go to Update product page
 */
router.get('/update-product/:productId', (req, res) => {
    product.findById(req.params.productId, (err, product) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('update-product', { product: product });
    })
});
/**
 * Update product
 */
router.post('/:productId', (req, res) => {
    let productId = req.params.productId;
    product.findByIdAndUpdate(
        { _id: productId },
        { $set: { name: req.body.productName, type: req.body.productType, brand: req.body.productBrand, color: req.body.productColor, size: req.body.productSize, price: req.body.productPrice } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/list')
        })
});

/**
 * Delete product
 */
router.delete('/:productId', (req, res) => {
    let productId = req.params.productId;
    product.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc)
    })
});



module.exports = router;
