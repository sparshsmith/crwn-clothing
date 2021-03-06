import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.util';

import { ReactComponent as Logo } from './../../assets/crown.svg';

import './Header.scss';
const handleSignOut = () => {
    auth.signOut();
}
const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ? (
                    <div className='option' onClick={handleSignOut}>SIGN OUT</div>)
                    :
                    (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
        </div>
    </div>
)

export default Header;