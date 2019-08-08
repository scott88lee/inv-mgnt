// IMPORTS
const express = require('express');
const handlebars = require('express-handlebars');
const controller = require('./controller');
const app = express();

// Set Handlebars to be the default view engine
const handlebarsConfig = {
   extname: '.handlebars',
   layoutsDir: 'views',
   defaultLayout: 'layout'
};

app.engine('handlebars', handlebars.create(handlebarsConfig).engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Public Folder and Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/products', controller.getListProducts);
app.get('/products/new', controller.getAddProduct);
app.get('/products/:sku', controller.getBySKU);
// app.get('/products/:sku/edit', controller.getEditProduct);

// app.post('/products', controller.postAddProduct);

// app.get('/suppliers', controller.getListSuppliers);
// app.get('/suppliers/new', controller.getAddSupplier); //
// app.get('/supplier/:alias', controller.getSupplierByAlias);

app.get('/purchases/add', controller.getAddPurchase);

// APIs
app.get('/api/products/search/:value', controller.apiProductSearch);

app.get('/', (req, res) => { res.render('dashboard') });

//404 Precessing
app.get('*', (req, res) => { 
    res.statusCode = 404;
    let dude = {msg:'fuckoff'}
    res.send(dude);
});

app.get('/', (req, res) => { res.render('dashboard') });
//app.get('/mock', (req, res) => { res.render('mock') });
app.get('*', (req, res) => { res.sendStatus(404) });

// LISTEN
app.listen(3000, () => {console.log('Listen port: 3000')} );