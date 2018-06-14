import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';
function Content(props)
{
        return ( 
        <div> 
            <div className="col-lg-3 col-md-4">
                <div class="img-container">
                    <img src={props.skillImg} alt={props.skillName}/>
                </div>
                <div className="aligncenter">
                   {props.skillName}
                </div>
                <div className="aligncenter">
                 {props.skillDescription}
                </div>
            </div>   
        </div>
    )
}

export default Content;