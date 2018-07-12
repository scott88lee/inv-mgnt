const React = require('react')

class home extends React.Component {
  render() {
    return(
      	<div>
		    <h1>SAM - Inv Mgmt Acc</h1>
		    <a href = "/products">List Products </a><br />
		    <a href = "/products/CR20">Show one product</a><br />
		    <a href = "/products/CR20/edit">Edit product</a><br />
		    <a href = "/products/new">Add products </a><br />

		    <br />
		    <a href = "/suppliers">Suppliers </a><br />
		    <a href = "/suppliers/">Show one product</a><br />
		    <a href = "/suppliers/new">Add Suppliers </a>
		</div>
    )
  }
}

module.exports = home;