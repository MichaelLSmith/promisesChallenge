function ApiService($http) {
  this.$http = $http;
}

angular.module('userApp').service('api', ApiService);

var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
var LOGIN_URL = BASE_URL + 'login';
var LOGOUT_URL = BASE_URL + 'logout';
var PROFILE_URL = BASE_URL + 'user';
var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';

ApiService.prototype.login = function(username, password) {
  return this.$http.post(LOGIN_URL, {username: username, password: password})
  .then(function(response) {
    localStorage.authToken = response.data.authToken;
    console.log(response);
    console.log(localStorage.authToken);
  });
};

/*TODO #5: 
  add a logout() function that sends a POST to
  https://mock-login-server.herokuapp.com/api/logout
*/

/*TODO #3: 
  add a getProfile() function that sends a GET to
  https://mock-login-server.herokuapp.com/api/user
  
  This function should a return a promise that 
  resolves the user data
*/
ApiService.prototype.getProfile = function(){
  this.$http ({
    method: 'GET',
    url: PROFILE_URL,
    headers: {authentication: localStorage}
  });

}

/*TODO #1:
  add a createAccount() function that sends POST to
  https://mock-login-server.herokuapp.com/api/createAccount
*/

ApiService.prototype.createAccount = function(username,password){
  console.log(username);
  console.log(password)
   this.$http ({
    method: 'POST',
    url: CREATE_ACCOUNT_URL,
    data: {
      username: username,
      password: password
    }
   });


}
