import React from 'react'
import './navbar.css'



function Navbar() {
    return(
        <div className="navbar_items">
            <div className="logo">
                            <img src='./images/todo.png'  id="logo"></img>

                            <div className="navbar_symbols">
                                
                                    <i class="bi bi-dash-lg"></i>
                                    <i class="bi bi-app"></i>
                                    <i class="bi bi-x-lg"></i>
                                
                            </div>
             </div>
        </div>
        )
    }



export default Navbar