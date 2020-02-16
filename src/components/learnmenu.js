import React from 'react'
import { Link } from 'gatsby';
import "./learnmenu.css"








export default (props) => {

    
   
    

    return(


        <div className="learn-menu-container">
            <ul className={props.classes} onMouseLeave={props.mouseLeave} onMouseOver={props.mouseEnter}>
            
                <li><Link to="/category/mixing">Mixing</Link></li>
                <li><Link to="/category/mastering">Mastering</Link></li>
                <li><Link to="/category/sound-design">Sound Design</Link></li>
                <li><Link to="/category/music-theory">Music Theory</Link></li>
            </ul>
        </div>

        
    )
}