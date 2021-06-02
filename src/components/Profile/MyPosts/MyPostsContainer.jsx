import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//     let state = props.store.getState()
//
//     let sendPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }
//
//     return (<MyPosts addPost={sendPost} updateNewPostText={onPostChange}
//                      posts={state.profilePage.posts}
//                      newPostText={state.profilePage.newPostText}/>)
//
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        sendPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer