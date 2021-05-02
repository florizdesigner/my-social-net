import React from 'react';
import styles from '../Profile.module.css';

const ProfileInfo = (props) => {
    return <div>
        <img className={styles.headerImage}
             src='https://c.wallhere.com/photos/f9/bc/4000x2250_px_And_bridges_cities_city_New_rivers_roads-1717805.jpg!d'
             alt='header-image'/>
        <img src='' alt='avatar'/>
        <div>Fullname: {props.firstName} {props.lastName}</div>
        <div>Information:</div>
    </div>
}

export default ProfileInfo