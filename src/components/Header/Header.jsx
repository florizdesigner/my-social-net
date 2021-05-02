import React from 'react';
import styles from './Header.module.css'
import logo from './../../assets/img/logo.png'

const Header = () => {
    return <div className={styles.header}>
        <img src={logo} alt='logo' className={styles.logo}/>
    </div>
}

export default Header