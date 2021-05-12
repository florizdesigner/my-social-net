import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let renderPosts = props.posts.map(dialog => <Post id={dialog.id} message={dialog.message} name={dialog.name}/>)


        let newPostElement = React.createRef()

    let onSendPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.myPostsWrapper}>
            <br/>
            <div>MyPosts</div>
            {renderPosts}
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            <button onClick={onSendPost}>Send post</button>
        </div>
    )

}

export default MyPosts