import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hello, how are you?'},
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'Hello'},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            users: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Zhenya'},
                {id: 3, name: 'Caroll'},
                {id: 4, name: 'Kate'},
                {id: 5, name: 'Chandler'},
                {id: 6, name: 'Monica'},
            ],
            messages: [
                {id: 1, message: 'Yo!'},
                {id: 2, message: 'Yo! Hello!'},
                {id: 3, message: 'Yo! Meow!'},
                {id: 4, message: 'Yo! Yao!'},
                {id: 5, message: 'How are you?'},
                {id: 6, message: 'Mint chill!'},
            ],
            newMessageText: 'it-kamasutra'
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)

    },
    addMessage(){
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newText){
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber()
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
            }
}

window.store = store;
export default store