import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.postWrapper}>
            <img src='https://cdn4.iconfinder.com/data/icons/men-avatars-set-1-dot-version/380/7-512.png' alt=''/>
            <div>Post: {props.message}</div>
        </div>
    )
}

export default Post