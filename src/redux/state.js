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
    rerenderEntireTree() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText
        this.rerenderEntireTree(this._state)

    },
    addMessage(){
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this.rerenderEntireTree(this._state)
    },
    updateNewMessageText(newText){
        this._state.dialogsPage.newMessageText = newText
        this.rerenderEntireTree()
    },
    subscribe(observer){
        this.rerenderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this.rerenderEntireTree(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this.rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this.rerenderEntireTree()
        }
            }
}

window.store = store;
export default store