const React = require('react')

class addProduct extends React.Component {
  render() {
    return(
      	<div>
		    <h1>Hello World</h1>
		    <form action="/products" method="POST">
		  		SKU: <br/>
		  		<input type="text" name="SKU" /> <br />
		  		Brand: <br/>
		  		<input type="text" name="brand" /> <br />
		  		Model: <br/>
		  		<input type="text" name="model" /> <br />
		  		Supplier: 1<br/>
		  		<input type="hidden" value="1" name="supplier" /> <br />
		  		Description: <br/>
		  		<input type="text" name="description" /> <br />
		  		Color: <br/>
		  		<input type="text" name="color" /> <br />
		  		Variation: <br/>
		  		<input type="text" name="variation" /> <br />
		  		<input type="submit" value="Submit" />
		  	</form>
		</div>
    )
  }
}

module.exports = addProduct;