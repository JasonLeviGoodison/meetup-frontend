const axios = require('axios');

const BASE_URL = 'http://localhost:3000'

export function logIn(accountInfo) {
  
    return axios.post(BASE_URL + '/users/login', accountInfo)
      .then(function (response) {
        const {status, action} = response.data;
        if (status === 'ACCEPT') {
            return action;
        } else {
          return 'ERROR';
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}

// request = {courses, accessToken, userID, sessionId}
export function updateCourses(request) {
  return axios.put(BASE_URL + '/users/updateCourses', request)
    .then(function (response) {
      const {status, action} = response.data;
      if (status === 'ACCEPT') {
          return action;
      } else {
        return 'ERROR';
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
