import React from 'react';
import styles from './MyPosts.module.css'

const MyPosts = (props) => {
    return (
        <div className={styles.myPostsWrapper}>
            <br/>
            <div>MyPosts</div>
            {props.renderPosts}
            <textarea></textarea>
            <button>Send post</button>
        </div>
    )

}

export default MyPosts