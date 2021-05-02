import React from 'react';
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo firstName='Ivan' lastName='Abramov'/>
            <MyPosts renderPosts={props.renderPosts}/>
        </div>
    )

}

export default Profile