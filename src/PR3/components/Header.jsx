import React from 'react'
import { Nav, Navbar, Container, Button,} from 'react-bootstrap';
import '../components/style.css';




// console.log(logo)
const Header = () => {
    return (
  
<>
     <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="index.html">Feliciano</a>
	      <button class="navbar-toggler" type="button" >
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	        	<li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
	        	<li class="nav-item"><a href="" class="nav-link">About</a></li>
	        	<li class="nav-item"><a href="" class="nav-link">Menu</a></li>
	        	<li class="nav-item"><a href="" class="nav-link">Stories</a></li>
	          <li class="nav-item"><a href="" class="nav-link">Contact</a></li>
	          <li class="nav-item cta"><a href="" class="nav-link">Book a table</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>

      </>
      

    )
}
export default Header;