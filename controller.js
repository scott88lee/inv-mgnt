const db = require('./db');

module.exports = {
	blah : function saySomething() {
				console.log('Hey there!');
			},

	listProducts : (req, res) => {
		const queryString = "SELECT * FROM products INNER JOIN suppliers ON products.supplier = suppliers.supplier_id";

		db.pool.query(queryString, (err, result) => {
	    	if (err) {
	    	console.error('List product Query error:', err.stack);
	   		}
	    	res.render('listProducts', {productList : result.rows});
		});
	}
}