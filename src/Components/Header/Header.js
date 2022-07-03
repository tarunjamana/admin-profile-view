import React from 'react';
import './header.scss';

function Header({value,handleChange}) {
  return (
  <nav className="header">
    <h2>Name</h2>
    <div className="col-xs-6" >
   <div className="right-inner-addon">
   <i className="fa fa-search"></i>
     <input value={value} type="search" className="form-control" placeholder="Search" onChange={handleChange} />
   </div>
 </div>
  </nav>   
  )
}

export default Header