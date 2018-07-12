const React = require('react')

class listSuppliers extends React.Component {
	
	render() {
		const supplierListElements = this.props.suppliers.map( function (supplier) {
			
			let link = supplier.supplier_name.toLowerCase() + "/edit";

			return (
				<div>
					<h4>{supplier.supplier_name}</h4>
					<ul>
						<li>{supplier.business_name}</li>
						<li>{supplier.supplier_address}</li>
						<a href={link}>Edit details</a>
					</ul>
				</div>
			)
		}) 

		return(
			<div>
				{ supplierListElements }
			</div>
		)
	}
}

module.exports = listSuppliers;