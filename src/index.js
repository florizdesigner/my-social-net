import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import MessageItem from './components/Dialogs/MessageItem/MessageItem';
import Post from './components/Profile/MyPosts/Post/Post';

let dialogUser = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Zhenya'},
    {id: 3, name: 'Caroll'},
    {id: 4, name: 'Kate'},
    {id: 5, name: 'Chandler'},
    {id: 6, name: 'Monica'},
]
let dialogMessages = [
    {id: 1, message: 'Yo!'},
    {id: 2, message: 'Yo! Hello!'},
    {id: 3, message: 'Yo! Meow!'},
    {id: 4, message: 'Yo! Yao!'},
    {id: 5, message: 'How are you?'},
    {id: 6, message: 'Mint chill!'},
]
let postsData = [
    {id: 0, message: 'Hello, how are you?', name: 'Anton'},
    {id: 1, message: 'How are you?', name: 'Alex'},
    {id: 2, message: 'Hello', name: 'Arkadiy'},
]

let renderUser = dialogUser.map( user => <DialogItem name={user.name} id={user.id}/> )
let renderMessages = dialogMessages.map ( message => <MessageItem message={message.message} id={message.id}/>)
let renderPosts = postsData.map(dialog => <Post id={dialog.id} message={dialog.message} name={dialog.name}/>)


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>

    <App renderUser={renderUser} renderMessages={renderMessages} renderPosts={renderPosts}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
