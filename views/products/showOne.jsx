const React = require('react')

class showProduct extends React.Component {
	

	render() {
		
		let link = '/products/' + this.props.product.sku + '/edit';

		return (
			<div>
				<h4>{this.props.product.model}</h4>
				<ul>
					<li>{this.props.product.sku}</li>
					<li>{this.props.product.brand}</li>
					<li>{this.props.product.supplier_name}</li>
					<a href = {link} >Edit details</a>
				</ul>
			</div>
		)
	}
}

module.exports = showProduct;