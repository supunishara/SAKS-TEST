

//import actionTypes
import {ADD_USERS, ADD_USERS_SUCCESS, ADD_USERS_ERROR} from './ActionTypes';

//import API Request
import {fetchPOSTCall} from '../Helpers/ConnectionAPI';

import {getAllUsersEndPoint} from '../Helpers/APIEndPoints';

export const AddUser = (param,body,navigation) => {
    console.log('all users action', param);
    return dispatch => {
        dispatch({type:ADD_USERS });
        fetchPOSTCall(param, body)
        .then(response => {
            console.log("response///////////////////////",response);
            dispatch({
                type: ADD_USERS_SUCCESS,
                payload: response
              });  
              alert("Add User Success");
        })
          .catch(err => {
            dispatch({
                type: ADD_USERS_ERROR,
                payload: err
              });
              alert("Add User Error..Please Try Again");
          })
    }
};