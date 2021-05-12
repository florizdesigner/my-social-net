import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import ContextStore from '../../../ContextStore';

const MyPostsContainer = (props) => {


    return <ContextStore.Consumer>
        {
            (store) => {

                let sendPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }

                return <MyPosts addPost={sendPost} updateNewPostText={onPostChange}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
        }
    </ContextStore.Consumer>
}

export default MyPostsContainer