import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom'
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <div className='item-header'><Header/></div>
            <div className='item-sidebar'><Sidebar/></div>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs
                    users={props.state.dialogsPage.users}
                    messages={props.state.dialogsPage.messages}
                    newMessageText={props.state.dialogsPage.newMessageText}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/newsfeed' render={() => <News/>}/>
                <Route path='/users' render={() => <Users/>}/>
            </div>
        </div>
    );
}

export default App;
