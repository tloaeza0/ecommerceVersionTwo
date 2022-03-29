import React from 'react'

const Footer = () => {
    return (
        <div>
             <footer>
            <div className="logo">
                <h4>Earths Haven</h4>
            </div>
            <div className="email">
                <p>help@earthshaven.com</p>
            </div>
            <div className="icons">
                <ul>
                    <li><a href="https://www.instagram.com/teresa.loaeza/" target="_blank" rel="noopener noreferrer"><ion-icon  name="logo-instagram"></ion-icon></a> </li>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><ion-icon  name="logo-facebook"></ion-icon></a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><ion-icon  name="logo-twitter"></ion-icon></a></li>
                    <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><ion-icon  name="logo-pinterest"></ion-icon></a></li>
                </ul>
                
            </div>
            
        </footer>
        </div>
    )
}

export default Footer
