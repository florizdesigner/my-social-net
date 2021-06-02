const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            // let newMessage = {
            //     id: 7,
            //     message: state.newMessageText
            // }
            let stateCopy = {...state,
            messages: [...state.messages, {id:7, message: state.newMessageText}],
                newMessageText: ''
            }
            // stateCopy.messages = [...state.messages]
            // stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {
                ...state,
                newMessageText: action.newText
            }
            return stateCopy
        }
        default:
            return state
    }
    return state
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer