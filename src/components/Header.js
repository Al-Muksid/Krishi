import React from 'react'
import './Header.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"


function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src={logo}></img>
            </Link>
            
            <div className="header_search">
                <input type="text" className="header_searchInput"></input>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>

            <div className="header_nav">
                {/*1st link*/}
                <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_optionOne">Hello there</span>
                    <span className="header_optionTwo">Sign In</span>

                </div>
                </Link>

                {/*2nd link*/}

                <Link className="header_link">
                <div className="header_option">
                    <span className="header_optionOne">Returns</span>
                    <span className="header_optionTwo">& Orders</span>
                </div>
                </Link>
                
                {/*3rd link*/}

            
            </div>
          
        </nav>

        
    )
}

export default Header
