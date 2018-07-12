const React = require('react')

class editProduct extends React.Component {
  render() {
  	let match = this.props.product.supplier_id;
  	let action = 
  	const supplierElements = this.props.suppliers.map( function (supplier) {
  		
			//Make the current supplierId the default selection
			if (supplier.supplier_id == match) {
				return (
					<option selected="selected" value={supplier.supplier_id}>{supplier.supplier_name}</option>
				)
			} else {
				return (
					<option value={supplier.supplier_id}>{supplier.supplier_name}</option>
				)
			}
		}) 

    return(
      	<div>
		    <h1>Edit Product</h1>
		    <form action="/products" method="POST">
		  		SKU: <br />
		  		<input type="text" name="SKU" value={this.props.product.sku}/> <br />
		  		Brand: <br />
		  		<input type="text" name="brand" value={this.props.product.brand}/> <br />
		  		Model: <br />
		  		<input type="text" name="model" value={this.props.product.model}/> <br />
		  		Supplier: <select name="supplier">
		  					{ supplierElements }
		  				  </select> <br />
		  		Description: <br />
		  		<input type="text" name="description" value={this.props.product.description}/> <br />
		  		Color: <br />
		  		<input type="text" name="color" value={this.props.product.color}/> <br />
		  		Variation: <br />
		  		<input type="text" name="variation" value={this.props.product.variation}/> <br />
		  		<input type="submit" value="Submit" />
		  	</form>
		</div>
    )
  }
}

module.exports = editProduct;