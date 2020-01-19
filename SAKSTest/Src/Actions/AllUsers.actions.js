
//import actionTypes
import {FETCH_ALL_USERS, FETCH_ALL_USERS_SUCCESS, FETCH_ALL_USERS_ERROR, SHOWMODAL, CLOSEMODAL} from './ActionTypes';

//import API Request
import {fetchCall} from '../Helpers/ConnectionAPI';

import {getAllUsersEndPoint} from '../Helpers/APIEndPoints';


export const getAllUsers = (param) => {
    console.log('all users action', param);
    return dispatch => {
        dispatch({type:FETCH_ALL_USERS });
        fetchCall(param)
        .then(response => {
            console.log("response///////////////////////",response);
            dispatch({
                type: FETCH_ALL_USERS_SUCCESS,
                payload: response
              });
              
        })
          .catch(err => {
            dispatch({
                type: FETCH_ALL_USERS_ERROR,
                payload: err
              });
              alert("Getting Users in giving Errors");
          })
    }
}; 

export const showModal = (item) => {
    return dispatch => {
        dispatch({
            type:SHOWMODAL,
            payload: item
         });
    }
  };

  export const closeModal = () => {
    return dispatch => {
        dispatch({
            type:CLOSEMODAL,
         });
    }
  };

