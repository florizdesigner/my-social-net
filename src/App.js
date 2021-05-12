import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom'
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <div className='item-header'><Header/></div>
            <div className='item-sidebar'><Sidebar/></div>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/newsfeed' render={() => <News/>}/>
                <Route path='/users' render={() => <Users/>}/>
            </div>
        </div>
    );
}

export default App;
