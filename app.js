var app = angular.module('userApp', ['ngRoute']);

  // STEP #1: Go into login.html

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .when('/profile', {
      templateUrl: 'profile.html',
      controller: 'ProfileCtrl as ctrl',
        resolve: {
          user:function(api){
            return api.getProfile();
          }
        }
     
      /*TODO #3: Add a "resolve" that loads the user
      profile before the profile page loads. If there
      is an error loading the profile then redirect
      the user to the login page.*/
    })
    .otherwise({
      redirectTo: '/login'
    });


  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});