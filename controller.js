const db = require('./db');

module.exports = {

	getListProducts : (req, res) => {
		const queryString = "SELECT * FROM products INNER JOIN suppliers ON products.supplier = suppliers.supplier_id";

		db.pool.query(queryString, (err, result) => {
	    	if (err) {
	    	console.error('List product Query error:', err.stack);
	   		}
	   		console.log(result.rows);
	    	res.render('products/listAll', {product : result.rows});
		});
	},

	getAddProduct : (req, res) => {
		const queryString = "SELECT * FROM suppliers";
		//To retrieve supplier l
		
		db.pool.query(queryString, (err, result) => {
		    if (err) {
		      console.error('Query suppliers error:', err.stack);
		    }
		    res.render('products/add', {supplierList : result.rows});
		});
	},

	getBySKU : (req, res) => {
		const queryString = "SELECT * FROM products INNER JOIN suppliers ON products.supplier = suppliers.supplier_id WHERE SKU = '" + req.params.sku + "'";
			
		db.pool.query(queryString, (err, result) => {
		    if (err) {
		      console.error('Query showProduct error:', err.stack);
		    }
		    console.log(result.rows[0]);
		    res.render('products/showOne', {product : result.rows[0]});
		});
	},

	getEditProduct : (req, res) => {
		const supplierQuery = "SELECT * FROM suppliers";
		db.pool.query(supplierQuery, (error, supplier) => {
			if (error) {
				console.log(error);
			}

			//Second Nested Query
			const queryString = "SELECT * FROM products INNER JOIN suppliers ON products.supplier = suppliers.supplier_id WHERE SKU = '" + req.params.sku + "'";
			db.pool.query(queryString, (err, result) => {
		    	if (err) {
		      		console.error('getEditProduct Query error:', err.stack);
		    	}

		    	let context = {
		    		product : result.rows[0],
		    		suppliers : supplier.rows
		    	}
		    	res.render('products/edit', context);
			});
		})
	},

	postAddProduct : (req, res) => {
		const queryString = "INSERT INTO products (SKU, brand, model, supplier, description, color, variation) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
		const values = [req.body.SKU, req.body.brand, req.body.model, req.body.supplier, req.body.description, req.body.color, req.body.variation];
		
		db.pool.query(queryString, values, (err, result) => {
		    if (err) {
		      console.error('Post product Query error:', err.stack);
		    }
		    res.send('Added : ' + result.rows[0].model);
		});
	},

	getListSuppliers : (req, res) => {
		const queryString = "SELECT * FROM suppliers";

		db.pool.query(queryString, (err, result) => {
			if (err) {
				console.log(err.stack);
			}
			res.render('suppliers/listAll', {suppliers : result.rows})
		});
	},

	getAddSupplier : (req, res) => {
		res.render('suppliers/add');
	},

	getSupplierByAlias : (req, res) => {
		const queryString = "SELECT * FROM products WHERE supplier_name = " + req.params.alias.toLowerCase();
		
		db.pool.query(queryString, (err, result) => {
		    if (err) {
		      console.error('getSupplierByAlias Query error:', err.stack);
		    }
		    res.render('supplier/showOne', {supplier : result.rows[0]});
		});	
	},

	getEditSupplier : (req, res) => {
		const queryString = "SELECT * FROM products WHERE supplier_name = " + req.params.sku.toLowerCase();
		
		db.pool.query(queryString, (err, result) => {
		    if (err) {
		      console.error('getEditSupplier Query error:', err.stack);
		    }
		    res.render('supplier/edit', {supplier : result.rows[0]});
		});	
	},

	postAddSupplier : (req, res) => {
		const queryString = "INSERT INTO suppliers (supplier_name, business_name, supplier_address) VALUES ($1, $2, $3) RETURNING *";
		const values = [req.body.supplier_name, req.body.business_name, req.body.supplier_address];
		
		db.pool.query(queryString, values, (err, result) => {
		    if (err) {
		      console.error('Post supplier Query error:', err.stack);
		    }
		    res.send('Added : ' + result.rows[0].supplier_name);
		});
	}
}