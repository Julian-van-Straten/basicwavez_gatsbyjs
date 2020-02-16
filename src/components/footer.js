import React from 'react'
import "./footer.css"
import logo from "../images/Basic-Wavez-LOGO-300x96.png"
import { Link } from 'gatsby'

export default () => (
    <>
    <footer>
        <Link to="/"><img className="footer-logo" src={logo} alt="Basic Wavez logo"></img></Link>
        <ul className="footer-menu">
            <li><Link to="/shipping-policy">Shipping & Returns</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
        </ul>
    </footer>
    <div className="copyright-bar">
             <p>© Copyright 2020. Basic Wavez.</p>
    </div>
    </>
)