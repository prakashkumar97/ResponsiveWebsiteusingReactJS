import React, { Component } from 'react';
import './respwebsite.css';
function Header(props) 
{
// var divStyle = {
//     color: 'red'
//   };

     return <h1 className="h1color">-- {props.headertext} --</h1>
}
export default Header;