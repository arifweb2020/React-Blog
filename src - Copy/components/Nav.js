import React from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 
        <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 
  <Link className="navbar-brand" to="/">Arif Blog</Link>

  
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/create-post">Create Post</Link>
    </li>

    
  </ul>
</nav>

        </>
     );
}
 
export default Nav;