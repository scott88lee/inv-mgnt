const express = require('express');
const pg = require('pg');

const app = express();

// Set React jsx to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.urlencoded({ extended: true }));

const config = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'samima', //soundalchemymusic inventory management accounting
  port: 5432
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/products/new', (req, res) => {
    res.render('addProduct');
})

app.post('/products', (req, res) => {
	const queryString = "INSERT INTO products (SKU, brand, model, supplier, description, color, variation) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
	const values = [req.body.SKU, req.body.brand, req.body.model, req.body.supplier, req.body.description, req.body.color, req.body.variation];
	
	pool.query(queryString, values, (err, result) => {
	    if (err) {
	      console.error('Post product Query error:', err.stack);
	    }
	    res.send('Added :' + {entry : result.rows[0]});
	});
});

app.get('*', (req, res) => {
	res.sendStatus(404);
})

app.listen(3000, ()=> {console.log('Listen port: 3000')})