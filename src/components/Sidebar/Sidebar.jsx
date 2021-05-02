import React from 'react';
import styles from './Sidebar.module.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (<div className={styles.nav}>
        <div className={styles.item}><NavLink to='/profile' activeClassName={styles.activeLink}>My profile</NavLink></div>
        <div className={styles.item}><NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink></div>
        <div className={styles.item}><NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink></div>
        <div className={styles.item}><NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink></div>
        <div className={styles.item}><NavLink to='/newsfeed' activeClassName={styles.activeLink}>News</NavLink></div>
    </div>)
}

export default Sidebar