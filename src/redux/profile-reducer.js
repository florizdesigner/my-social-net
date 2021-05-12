const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 0, message: 'Hello, how are you?'},
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'Hello'},
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break
        default:
            return state
    }

    return state
}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer