

//import actionTypes
import {LOG_USERS, LOG_USERS_SUCCESS, LOG_USERS_ERROR} from './ActionTypes';

//import API Request
import {fetchLoginCall} from '../Helpers/ConnectionAPI';

import {getAllUsersEndPoint} from '../Helpers/APIEndPoints';

export const Login = (param,navigation) => {
    console.log('all users action', param);
    return dispatch => {
        dispatch({type:LOG_USERS });
        fetchLoginCall(param)
        .then(response => {
            console.log("response///////////////////////",response);
            dispatch({
                type: LOG_USERS_SUCCESS,
                payload: response
              });
              navigation.navigate('Home',{
                name:param.Email
              });
        })
          .catch(err => {
            dispatch({
                type: LOG_USERS_ERROR,
                payload: err
              });
              alert("Login Failed");
          })
    }
};