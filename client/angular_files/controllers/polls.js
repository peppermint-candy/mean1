(function() {
  angular
    .module('myApp')
    .controller('pollsController', pollsController)
  function pollsController(pollFactory, $location) {
    var _this = this
    _this.errors = []

    _this.showPoll = function() {
      _this.errors = []
      pollFactory.showPoll(
        function(factoryData) {
          if(factoryData.data.status) {
            console.log(factoryData.data)
          }else{
            console.log(factoryData.data.errors)
          }
        }
      )
    }

    _this.createPoll = function() {
      _this.errors = []
      pollFactory.createPoll(_this.newPoll,
      function(factoryData) {
        if(factoryData.data.status){
          console.log("here's returning factory data" , factoryData.data)
          $location.url('/dashboard')
        }else{
          console.log("oh no something went wrong")
          $location.url('/create')
        }
      })
    }
  }
})();
