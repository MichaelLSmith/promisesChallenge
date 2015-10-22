angular.module('userApp').controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl(api,$location) {
  this.api = api;
  this.location = $location;
}

// STEP #5(b): calls the function in apiService.js write logout() function.

ProfileCtrl.prototype.logout = function(){
    var self = this;
    this.api.logout()
        .then(function(){
            self.location.path('/')
        });
}


  // ASIDE: make a promise to call the API to logout 
  // *then* return back to login page




  /* 
now go to profile.html in STEP #5(c) and call this function 
from an ng-click in the profile page logout button
*/