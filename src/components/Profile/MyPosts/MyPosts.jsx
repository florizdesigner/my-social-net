import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    let renderPosts = props.posts.map(dialog => <Post id={dialog.id} message={dialog.message} name={dialog.name}/>)


        let newPostElement = React.createRef()

    let onSendPost = () => {
        // props.dispatch(addPostActionCreator())
        props.addPost()
        // newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostTextActionCreator(text))
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