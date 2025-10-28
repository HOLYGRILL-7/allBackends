const express = require('express')
const {getAllUsers} = require('./controllers/userController')
const {getDiscountedProducts,createProduct, searchProducts} = require('./controllers/productController')

const app = express();

//middleware to parse json requests
app.use(express.json());

//connect the fuction to a route
app.get('/users', getAllUsers);
app.get('/products', getDiscountedProducts);
app.get('/products/search', searchProducts);
app.post('/products', createProduct);

//listen on port
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});