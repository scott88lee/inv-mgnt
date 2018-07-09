const React = require('react')

class showProduct extends React.Component {
	
	render() {
		return (
			<div>
				<h4>{this.props.product.model}</h4>
				<ul>
					<li>{this.props.product.sku}</li>
					<li>{this.props.product.brand}</li>
					<li>{this.props.product.supplier_name}</li>
				</ul>
			</div>
		)
	}
}

module.exports = showProduct;