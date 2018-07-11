// IMPORTS
const express = require('express');
const controller = require('./controller');
const db = require('./db');
const app = express();
// IMPORTS


// Set React jsx to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.urlencoded({ extended: true }));
// Set React jsx to be the default view engine

// ROUTES
app.get('/products', controller.getListProducts);
app.get('/products/new', controller.getAddProduct);
app.get('/products/:sku', controller.getBySKU);
app.post('/products', controller.postAddProduct);

app.get('/suppliers', controller.getListSuppliers);
app.get('/suppliers/new', controller.getAddSupplier); //
//app.get('/supplier/:alias', controller.getSupplierByAlias);
app.post('/suppliers', controller.postAddSupplier);


app.get('/', (req, res) => { res.render('home') });
app.get('*', (req, res) => { res.sendStatus(404) });

// LISTEN
app.listen(3000, () => {console.log('Listen port: 3000')} );