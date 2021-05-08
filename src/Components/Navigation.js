import React from 'react'
import {Link,NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <ul style={{display:'flex'}}>
                <NavLink activeClassName="current" exact to="/">
                <li style={{marginLeft:10,listStyle:'none'}}>
                    Accueil
                </li></NavLink>
                
                <NavLink activeClassName="current" to="/Projets"><li  style={{marginLeft:10,listStyle:'none'}} >
                    Produits
                </li></NavLink>

            </ul>
             
        </div>
    )
}
export default Navigation;
