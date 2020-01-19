import { combineReducers } from "redux"

//import All Reducers
import Login from './Login';
import Home from './Home';
import AllUsers from './AllUsers';
import WelcomeBack from './WelcomeBack';

export default combineReducers({
    Login,
    Home,
    AllUsers,
    WelcomeBack
});