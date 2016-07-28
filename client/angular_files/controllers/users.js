(function() {
  angular
    .module('myApp')
    .controller('usersController', usersController)
  function usersController(userFactory, $location) {
    var _this = this
    _this.errors = []

    function getSession () {
      userFactory.getSession(function(factoryData) {
        _this.user = factoryData.data.userInfo
        if (!_this.user) {
          $location.url('/')
        }
      })
    }
    getSession();

    // _this.login = function() {
    //   _this.errors = []
    //   userFactory.login( _this.logInfo,
    //   function(factoryData) {
    //     console.log("here is factory data", factoryData.data)
    //     if(factoryData.data.status) {
    //       _this.user = factoryData.data.userInfo
    //       $location.url('/success')
    //     }else{
    //       _this.errors = factoryData.data.errors
    //     }
    //   })
    // }

    _this.register = function() {
      _this.errors = []
      userFactory.register(_this.regInfo,
        function(factoryData) {
        if(factoryData.data.status) {
          console.log("Here is factory data", factoryData.data)
          _this.user = factoryData.data.userInfo
          $location.url('/dashboard')
        }else{
          login = function() {
          userFactory.login( _this.regInfo,
          function(factoryData) {
            console.log("here is factory data", factoryData.data)
            if(factoryData.data.status) {
              _this.user = factoryData.data.userInfo
            }else{
              _this.errors = factoryData.data.errors
            }
          })
        }
          login();
          $location.url('/dashboard')
          // _this.errors = factoryData.data.errors
        }
      })
    }

    _this.logout = function() {
      userFactory.logout(function(factoryData) {
        if (factoryData.data.status) {
          $location.url('/')
        }else{
          _this.errors = factoryData.data.errors
        }
      })
    }
  }
})();
