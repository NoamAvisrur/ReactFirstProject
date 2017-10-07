var app = angular.module('list', ['ui.router']);

app.controller('mainController', function(DataService){});

app.service('DataService', function($http) {
      
	this.getServerData = function(){
		return $http({
			url: "http://localhost:3000/api/school"
		})
		.then(function (response) {
            if(response.data == 'not logged-in'){
                window.location = "http://localhost:3000/login";
            }else{
			    return response.data;
            }    
		});
    };
    
    this.getSpecificData = function(id, type){
		return $http({
			url: `http://localhost:3000/api/${type}/${id}`
		})
		.then(function (response) {
            if(response.data == 'not logged-in'){
                window.location = "http://localhost:3000/login";
            }else{            
                return response.data;
            }
		});
    };
    
    this.addNewData = function(type, data){
		return $http.post(`http://localhost:3000/${type}`, data)
		.then(function (response) {
            return response.status;
		});
    };
    
    this.deleteData = function(id, type){
		return $http.delete(`http://localhost:3000/${type}/${id}`)
		.then(function (response) {
            return response.status;
		});
    };
    
    this.logOut = function(){
		return $http.post('http://localhost:3000/logout')
		.then(function (response) {       
             return response.status;
		});
    };
    
});






