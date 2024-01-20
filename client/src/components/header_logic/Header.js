import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            <div>
                <Link to="/lessons"> Уроки </Link>
            </div>
            <div>
                <Link to="/stocks"> Акции </Link>
            </div>
            <div>
                <Link to="/forum"> Форум </Link>
            </div>
            <div>
                <Link to="/profile"> Профиль </Link>
            </div>
        </header>
    )
}

export default Header