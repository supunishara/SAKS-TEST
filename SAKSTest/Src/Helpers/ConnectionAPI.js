import {AsyncStorage } from 'react-native';

//import baseURL
import {baseURL} from './APIEndPoints';
const axios = require("axios");

//create axios instance
const instance = axios.create({
    baseURL: baseURL,
  });


export const RequestType = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
  };

// export const fetchCall = (param) => {
//     return new Promise(function (success, err) {
//       instance({
//         method: RequestType.GET,
//         url: URL,
//         data: { }
//       })
//         .then(function (response){
//           success(response);
//         })
//         .catch(function (error) {
//             err(error)
//         });
//     });
//   };


//create Asynchronous API call to fetch ALL Users
export const fetchCall = async(param) => {
    try {
        const rawResponse = await fetch(param.URL, {
            method: param.method,
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const content = await rawResponse.json();
          console.log("response------------123----------------",content);
          return content;
          
    }catch(error){
        console.log(error);
        return error;
    }
}


export const fetchPOSTCall = async(param, body) => {
  try {
      const rawResponse = await fetch(param.URL, {
          method: param.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: body
        });
        const content = await rawResponse.json();
        console.log("response------------123----------------",content);
        return content;
        
  }catch(error){
      console.log(error);
      return error;
  }
}


export const fetchLoginCall = async(param) => {

  try {
      const rawResponse = await fetch(param.URL, {
          method: param.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Email: param.Email,
            Password: param.Password,
        })
        });
        const content = await rawResponse.json();
        console.log("response------------123----------------",content);
        return content;
        
  }catch(error){
      console.log(error);
      return error;
  }

  
}

