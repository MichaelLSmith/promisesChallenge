angular.module('userApp').controller('LoginCtrl', LoginCtrl);

function LoginCtrl(api) {
    this.api = api;
}

LoginCtrl.prototype.createNewAccount = function(){
    this.api.createAccount(this.username, this.password);
}

LoginCtrl.prototype.controllerLogin = function(){
    // console.log('CtrlLogin');
    var self = this;
    this.api.login(this.username,this.password)
}
