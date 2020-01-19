import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import Screens
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import AllUsers from '../Screens/AllUsers';
import Welcomeback from '../Screens/Welcomeback';
import AddUser from '../Screens/AddUser';
import CreateAccount from '../Screens/CreateAccount';

//importing Login Screen

//creating main Stack Navigator
const Route = createStackNavigator({
    Login:{
        screen: Login
    },
    Welcomeback:{
        screen: Welcomeback
    },
    Home:{
        screen: Home
    },
    AllUsers:{
        screen: AllUsers
    },
    AddUser:{
        screen:AddUser
    },
    CreateAccount:{
        screen: CreateAccount
    },
});

export default createAppContainer(Route);