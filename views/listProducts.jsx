const React = require('react')

class listProducts extends React.Component {
	
	render() {
		const productListElements = this.props.productList.map( function (product) {
			
			return (
				<div>
					<h4>{product.model}</h4>
					<ul>
						<li>{product.sku}</li>
						<li>{product.brand}</li>
						<li>{product.supplier_name}</li>
					</ul>
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