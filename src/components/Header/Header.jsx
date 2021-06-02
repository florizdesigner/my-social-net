import React from 'react';
import styles from './Header.module.css'
import logo from './../../assets/img/logo.png'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <div className={styles.header}>
        <img src={logo} alt='logo' className={styles.logo}/>

        <div className={styles.loginBlock}>
            {props.isAuth ? props.login : <NavLink to='/login/'>Login</NavLink>}
        </div>
    </div>
}

export default Header