const getDiscountedProducts = (req, res) =>{
    const products = [
        {name: 'Laptop', price: 1000},
        {name: 'Car', price: 3000000}
    ]

    //discounted products
    const discounted = products.map(product => ({
        ...product,
        originalPrice: product.price,
        discountedPrice: product.price*0.8
    }));

     res.json({
        message: 'Products retrieved successfully',
        products: discounted
    })

       
};

const createProduct = (req, res) => {
        const {name, price} = req.body;

        //check if data is valid
        if(!name || !price){
            res.status(400).json({
                error: 'Name and price required'
            });
        }

        //check if price is valid
        if(price <= 0){
            res.status(400).json({
                error: 'Enter a valid price'
            })
        }

        res.json({
            message: 'Products created',
            products: {name, price}
        });
    };

//Logic to search products by name
const searchProducts = (req, res) =>{
    const {query} = req.query; //get search term

    const allProducts = [
        {id: 1, name: 'Laptop'},
        {id: 2, name: 'Phone'},
        {id: 3, name: 'Tablet'},
    ]

    //Logic to filter products
const results = allProducts.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
res.json({results});
}

module.exports = {getDiscountedProducts, createProduct, searchProducts}