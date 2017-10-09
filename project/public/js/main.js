var app = angular.module('list', ['ui.router']);

app.service('DataService', function($http) {
      
	this.getServerData = function(){
		return $http({url: "http://localhost:3000/api/school"})
		.then(function (response) {
            if(response.data == 'not logged-in'){
                window.location = "http://localhost:3000/login";
            }else{
			    return response.data;
            }    
		});
    };
    
    this.getUserData = function(){
		return $http({url: "http://localhost:3000/user"})
		.then(function (response) {
            return response.data;  
		});
    };        
    
    this.getSpecificData = function(id, type){
		return $http({url: `http://localhost:3000/api/${type}/${id}`})
		.then(function (response) {
            if(response.data == 'not logged-in'){
                window.location = "http://localhost:3000/login";
            }else{            
                return response.data;
            }
		});
    };
    
    this.addNewData = function(type, data){
		var fd = new FormData();
        for(var key in data){
            fd.append(key, data[key]);
        }
        console.log(fd);
        return $http({
            method: 'POST',
            url: `http://localhost:3000/api/${type}`,
            data: fd,
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
		.then(function (response) {
            if(response.data == 'not logged-in'){
                window.location = "http://localhost:3000/login";
            }else{              
                return response.status;
            }    
		});
    };
    
    this.deleteData = function(id, type){
		return $http.delete(`http://localhost:3000/api/${type}/${id}`)
		.then(function (response) {
            if(response.data == 'not logged-in'){
                window.location = "http://localhost:3000/login";
            }else{              
                return response.status;
            }
		});
    };
    
    this.updateData = function(id, type, data){
		var fd = new FormData();
        for(var key in data){
            fd.append(key, data[key]);
        }
        console.log(fd);
        return $http({
            method: 'PUT',
            url: `http://localhost:3000/api/${type}/${id}`,
            data: fd,
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
		.then(function (response) {
            if(response.data == 'not logged-in'){
                window.location = "http://localhost:3000/login";
            }else{              
                return response.status;
            }    
		}); 
    };     
            
    this.logOut = function(){
		return $http.post('http://localhost:3000/logout')
		.then(function (response) {       
             return response.status;
		});
    };
    
});






