const React = require('react')

class listProducts extends React.Component {
	
	render() {
		const productListElements = this.props.productList.map( function (product) {
			console.log(product);
			return (
				<ul>
					<li>{product.sku}</li>
					<li>{product.model}</li>
				</ul>
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