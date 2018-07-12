const React = require('react')

class listProducts extends React.Component {
	
	render() {
		const productListElements = this.props.productList.map( function (product) {
			
			let link = '/products/' + product.sku + '/edit';
			return (
				<div>
					<h4>{product.model}</h4>
					<ul>
						<li>{product.sku}</li>
						<li>{product.brand}</li>
						<li>{product.supplier_name}</li>
					</ul>
					<a href={link}>Edit details</a>
				</div>
			)
		}) 

		return(
			<div>
				{ productListElements }
			</div>
		)
	}
}

module.exports = listProducts;