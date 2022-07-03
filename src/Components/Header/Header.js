import React from 'react';
import './header.scss';

function Header() {
  return (
  <nav className="header">
    <h2>Name</h2>
    <div className="col-xs-6" >
   <div className="right-inner-addon">
   <i className="fa fa-search"></i>
     <input type="search" className="form-control" placeholder="Search" />
   </div>
 </div>
  </nav>   
  )
}

export default Header