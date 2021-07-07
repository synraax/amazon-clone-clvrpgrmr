/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider.js";
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
    <nav className="header">

            {/*logo*/}
            <Link to="/">
                <img 
                    className="header_logo" 
                    src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
                    alt=""
                />
            </Link>

            {/*searchbox*/}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/*links*/}
            <div className="header_nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_option_line1">Hello {user?.email}</span>
                        <span className="header_option_line2">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line1">Returns</span>
                        <span className="header_option_line2">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line1">Your</span>
                        <span className="header_option_line2">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_option_basket">
                        {/* shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* number of items in basket */}
                        <span className="header_option_line2 header_basket_count">{basket?.length}</span>
                    </div>
                </Link>

            </div>

            {/*basket icon w number*/}

        </nav>
    )
}

export default Header
