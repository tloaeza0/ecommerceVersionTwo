import React from 'react'

import {
    BrowserRouter as Router,
    Outlet,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
    <header>
        <nav>
            <ul>
                <li><a href= '/'>Home</a></li>
                <li><a href= '/Products'>Plants</a></li>
                <li><a href='/Rare'>Rare Plants</a></li>
                <li><a href='/Contact'>Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <Outlet></Outlet>
        </div>
    )
}

export default Navbar
