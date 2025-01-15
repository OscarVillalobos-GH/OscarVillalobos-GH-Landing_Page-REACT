import React from "react";

const Navbar = () => {

    return (
 <nav className= "navbar bg-dark border-bottom border-body" data-bs-theme="dark" >
<ul class="nav justify-content-end ms-auto" >
  
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Contact</a>
  </li>
</ul>
</nav>

    );
  }



export default Navbar;