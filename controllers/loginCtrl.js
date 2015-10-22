angular.module('userApp').controller('LoginCtrl', LoginCtrl);

// STEP #1(c): inject the api and #location

function LoginCtrl(api, $location) {
    this.api = api;
    this.location = $location;
}

// STEP #1(b): create a prototype method called createAccount to create an account via the API

LoginCtrl.prototype.createNewAccount = function(){

// so that you can access "this" inside the .then() promise method
var self = this;

// this.username and this.password will come from the input fields
// bound by the matching ng-model directives
    this.api.createAccount(this.username, this.password)
    .then(function(){
         // once account is created, then tell user that account is created
        self.alert = "Account Created!";
        self.$location.path('proflie');
    });
}


// STEP #2(b): create a prototype method called login to create a user session via the API
LoginCtrl.prototype.controllerLogin = function(){
    // console.log('CtrlLogin');
    // so that you can access "this" inside the .then() promise method
    var self = this;
    console.log(this.location);
    this.api.login(this.username,this.password)
        .then(function(){
            self.location.path('/profile');
        // once we confirm the login, route to the profile page

        });
    // console.log(localStorage.authToken);
}
