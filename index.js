const express = require('express');
const db = require('./db');

const app = express();

// Set React jsx to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
	res.render('home');
});

app.get('/products', (req, res) => {
	const queryString = "SELECT * FROM products INNER JOIN suppliers ON products.supplier = suppliers.supplier_id";
	
	db.pool.query(queryString, (err, result) => {
	    if (err) {
	      console.error('List product Query error:', err.stack);
	    }
	    res.render('listProducts', {productList : result.rows});
	});
});

app.get('/products/new', (req, res) => {
	const queryString = "SELECT * FROM suppliers";
	
	db.pool.query(queryString, (err, result) => {
	    if (err) {
	      console.error('Query suppliers error:', err.stack);
	    }
	    res.render('addProduct', {supplierList : result.rows});
	});
})

app.get('/products/:sku', (req, res) => {
	const queryString = "SELECT * FROM products WHERE SKU = '" + req.params.sku + "'";
	
	db.pool.query(queryString, (err, result) => {
	    if (err) {
	      console.error('Query product error:', err.stack);
	    }
	    console.log(result.rows);
	    res.render('listProducts', {productList : result.rows});
	});
})

app.post('/products', (req, res) => {
	const queryString = "INSERT INTO products (SKU, brand, model, supplier, description, color, variation) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
	const values = [req.body.SKU, req.body.brand, req.body.model, req.body.supplier, req.body.description, req.body.color, req.body.variation];
	
	db.pool.query(queryString, values, (err, result) => {
	    if (err) {
	      console.error('Post product Query error:', err.stack);
	    }
	    res.send('Added : ' + result.rows[0].model);
	});
});

app.get('*', (req, res) => {
	res.sendStatus(404);
})

app.listen(3000, ()=> {console.log('Listen port: 3000')})