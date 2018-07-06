const React = require('react')

class home extends React.Component {
  render() {
    return(
      	<div>
		    <h1>SAM - Inv Mgmt Acc</h1>
		    <a href = "/products">Products </a>
		    <a href = "/products/new">Add products </a>
		    <a href = "/suppliers">Suppliers </a>
		    <a href = "/suppliers/new">Add Suppliers </a>
		</div>
    )
  }
}

module.exports = home;