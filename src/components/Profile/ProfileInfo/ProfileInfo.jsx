import React from 'react';
import styles from '../Profile.module.css';
import Preloader from '../../../assets/common/preloader/Preloader';
import ProfileContainer from '../ProfileContainer';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
        return <div>
            <img className={styles.headerImage}
                 src='https://c.wallhere.com/photos/f9/bc/4000x2250_px_And_bridges_cities_city_New_rivers_roads-1717805.jpg!d'
                 alt='header-image'/>
            <img src={props.profile.photos.small} alt='avatar'/>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>

            <div>FullName: {props.profile.fullName}</div>
            <div>Я {props.profile.lookingForAJob ? 'ищу' : 'не ищу'} работу</div>
            <div>{props.profile.lookingForAJobDescription !== null
                ? `Хочу работать в компании '${props.profile.lookingForAJobDescription}'!` : null}</div>
            <div>Обо мне: {props.profile.aboutMe}</div>
        </div>

}

export default ProfileInfo