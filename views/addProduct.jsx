const React = require('react')

class addProduct extends React.Component {
  render() {
  	const supplierListElements = this.props.supplierList.map( function ( supplier ) {

	  	return(
			<option value={supplier.supplier_id}>{supplier.supplier_name}</option>
	  	)
	})
    return(
      	<div>
		    <h1>Hello World</h1>
		    <form action="/products" method="POST">
		  		SKU: <br />
		  		<input type="text" name="SKU" /> <br />
		  		Brand: <br />
		  		<input type="text" name="brand" /> <br />
		  		Model: <br />
		  		<input type="text" name="model" /> <br />
		  		Supplier: <select name="supplier">
		  					{ supplierListElements }
		  				  </select> <br />
		  		Description: <br />
		  		<input type="text" name="description" /> <br />
		  		Color: <br />
		  		<input type="text" name="color" /> <br />
		  		Variation: <br />
		  		<input type="text" name="variation" /> <br />
		  		<input type="submit" value="Submit" />
		  	</form>
		</div>
    )
  }
}

module.exports = addProduct;