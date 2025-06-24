import React from "react";
import CodeCollabLogo from "/codeLogo.png"
import './Navbar.css'
function Navbar() {
    return (
        
            <nav className="navbar">
                <div className="navbar_container"> 
                    {/* unsure if we should use the logo or use the text for the top right of the navigation bar
                    <img src={CodeCollabLogo} alt ="codeCollabLogo" className="navbar_logo"/> */}
                    <a href="./" className="navbar_logo">CodeCollab</a>
                </div>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <a href="./about" className="navbar_links" id="about-page">About</a>
                    </li>
                    <li className="navbar_item">
                        <a href="./project" className="navbar_links" id="project-page">Projects</a>
                    </li>
                    <li className="navbar_item">
                        <a href="./contact" className="navbar_links" id="contact-page">Contacts</a>
                    </li>
                </ul>

            </nav>
        
        
    )
}
export default Navbar;