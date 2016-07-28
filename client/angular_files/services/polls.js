(function() {
  angular
    .module('myApp')
    .factory('pollFactory', pollFactory)
  function pollFactory($http) {
    var factory = {};



    factory.createPoll = function(pollInfo, callback) {
      $http.post('/create', pollInfo)
      .then(function(returnData) {
        console.log(returnDate)
        callback(returnData)
      })
    }


    return factory
  }
})
