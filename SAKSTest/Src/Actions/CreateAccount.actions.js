import {
  Alert
} from 'react-native';
//import actionTypes
import {CREATE_ACCOUNT, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_ERROR} from './ActionTypes';

//import API Request
import {fetchPOSTCall} from '../Helpers/ConnectionAPI';

import {getAllUsersEndPoint} from '../Helpers/APIEndPoints';

export const CreateAccounts = (param,body,navigation) => {
    console.log('all users action', param);
    return dispatch => {
        dispatch({type:CREATE_ACCOUNT });
        fetchPOSTCall(param, body)
        .then(response => {
            console.log("response///////////////////////",response);
            dispatch({
                type: CREATE_ACCOUNT_SUCCESS,
                payload: response
              });  

              Alert.alert(
                'Create Account Success',
                'Please press ok to continue to Login Screen',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => navigation.navigate('Login')},
                ],
                {cancelable: false},
              );
        })
          .catch(err => {
            dispatch({
                type: CREATE_ACCOUNT_ERROR,
                payload: err
              });
              alert("Create Account Error..Please Try Again");
          })
    }
};