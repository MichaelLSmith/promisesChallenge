angular.module('userApp').controller('LoginCtrl', LoginCtrl);

function LoginCtrl(api) {
    this.api = api;
    // this.password = '';
}

LoginCtrl.prototype.createNewAccount = function(){
    this.api.createAccount(this.username, this.password);

}

LoginCtrl.prototype.controllerLogin = function(){
    console.log('CtrlLogin');
    this.api.login(this.username, this.password);
}
