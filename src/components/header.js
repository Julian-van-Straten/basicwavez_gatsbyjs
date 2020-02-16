import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/Basic-Wavez-LOGO-300x96.png"
import "./header.css"
import LearnMenu from "./learnmenu"

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      drawerOpen: false
    }
  }
    openDrawerHandler = () => {
    this.setState(prevState => {
      return {
        drawerOpen: !prevState.sideDrawerOpen,
      }
    })
  }

  closeDrawerHandler = () => {
    this.setState({
      drawerOpen: false
    })
  }
  
  render(){
  let drawerClasses = 'learn-menu'
  let arrowClasses = 'side arrow'
  if (this.state.drawerOpen){
    drawerClasses = 'learn-menu open'
    arrowClasses = 'down arrow'
  } else {
    drawerClasses = 'learn-menu'
    arrowClasses = 'side arrow'
  }


   

  

  

  return(
  <header className="header">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        
      }}
    >
      
      <Link className="logo-box" to="/">
        <img className="logo" src={logo} alt="Basic Wavez Company Logo"></img>
      </Link>

      <ul className="menu">
        <li ><Link to="/blog" onMouseOver={this.openDrawerHandler} onMouseLeave={this.closeDrawerHandler} >Learn <i className={arrowClasses} ></i></Link><LearnMenu mouseLeave={this.closeDrawerHandler} mouseEnter={this.openDrawerHandler} classes={drawerClasses} /></li>
        <li><Link to="/category/free-stuff">Free Stuff</Link></li>
        <li><Link to="/recommended-tools">Recommended Tools</Link></li>
        <li><Link to="/category/reviews">Reviews</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>

      
    
    </div>
  </header>
    )
  }
}


export default Header
