import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom'
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <div className='item-header'><HeaderContainer/></div>
            <div className='item-sidebar'><Sidebar/></div>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/newsfeed' render={() => <News/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginPage />}/>
            </div>
        </div>
    );
}

export default App;
