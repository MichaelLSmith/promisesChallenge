angular.module('userApp').service('api', ApiService);

// STEP #0: get endpoints
var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
var LOGIN_URL = BASE_URL + 'login';
var LOGOUT_URL = BASE_URL + 'logout';
var PROFILE_URL = BASE_URL + 'user';
var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';

function ApiService($http) {

// STEP #1(c): inject $http to use API
  this.$http = $http;
}

// STEP #2(a): request the API to create a user session

ApiService.prototype.login = function(username, password) {
  return this.$http.post(LOGIN_URL, {username: username, password: password})
  .then(function(response) {
    localStorage.authToken = response.data.authToken;
    console.log(response);
    console.log(localStorage.authToken);
  });
};

// STEP #5(a): 

  ApiService.prototype.logout = function(){
    return this.$http.post(LOGOUT_URL);
  }

  // add a logout() function that sends a POST to
  // https://mock-login-server.herokuapp.com/api/logout
  // and returns a logout action
  
  // go to STEP #5(b) in profileCtrl.js to call this function

// STEP #3(a): 
  
  // add a getProfile() function that sends a GET to
  // https://mock-login-server.herokuapp.com/api/user
  
  // this function should a return a profile with profile properties
  
  // Go to profile.html for STEP #4

ApiService.prototype.getProfile = function(){
  return this.$http ({
    method: 'GET',
    url: PROFILE_URL,
    
  })
    .then(function(response){
      console.log(response);
    })

}

// STEP #1(a):
  
  // add a createAccount() function that sends POST to
  // https://mock-login-server.herokuapp.com/api/createAccount

ApiService.prototype.createAccount = function(username,password){
  console.log(username);
  console.log(password);
  return this.$http ({
    method: 'POST',
    url: CREATE_ACCOUNT_URL,
    data: {
      username: username,
      password: password
    }
   });
}