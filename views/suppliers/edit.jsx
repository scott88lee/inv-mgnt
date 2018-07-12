const React = require('react')

class editSupplier extends React.Component {
	render () {
	    return(
	      	<div>
			    <h1>Edit Supplier info</h1>
			    <form action="/suppliers" method="POST" id="supplierForm">
			  		Supplier Name: <br />
			  		<input type="text" name="supplier_name" value={this.props.supplier.supplier_name}/> <br />
			  		Business Name: <br />
			  		<input type="textarea" name="business_name" value={this.props.supplier.business_name}/> <br />
			  		Address: <br />
			  		<textarea rows="4" cols="50" name="supplier_address" form="supplierForm">
						{this.props.supplier.supplier_address}
					</textarea>
			  		<input type="submit" value="Submit" />
			  	</form>
			</div>
		)
    }
}

module.exports = editSupplier;