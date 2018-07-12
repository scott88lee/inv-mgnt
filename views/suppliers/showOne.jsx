const React = require('react')

class showSupplier extends React.Component {
	
	render() {
		return (
			<div>
				<h4>{this.props.supplier.supplier_name}</h4>
				<ul>
					<li>{this.props.supplier.business_name}</li>
					<li>{this.props.supplier.supplier_address}</li>
				</ul>
			</div>
		)
	}
}

module.exports = showSupplier;