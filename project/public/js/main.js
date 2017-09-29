var app = angular.module('list', ['ui.router']);

app.controller('mainController', function(DataService){

    this.user = 'bob';
    
    DataService.getServerData()
    .then(function (data) {
		this.data = data;
	}.bind(this));

});


app.service('DataService', function($http) {
      
	this.getServerData = function(){
		return $http({
			url: "http://localhost:3000/school"
		})
		.then(function (response) {
			return response.data;
		});
    };
    
    this.getSpecificData = function(id, type){
		return $http({
			url: `http://localhost:3000/${type}/${id}`
		})
		.then(function (response) {
            return response.data;
		});
    };
    
    this.addNewData = function(type, data){
		return $http.post(`http://localhost:3000/${type}`, data 
        )
		.then(function (response) {
            console.log(response);
            return response.status;
		});
    };
    
});






