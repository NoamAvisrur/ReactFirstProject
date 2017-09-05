var app = angular.module('list', ['ui.router']);

app.controller('mainController', function(DataService){

    this.name = "bobi fisher";

    this.mylist = {};

    this.data = DataService.data;

    this.submitItem = function(){
        DataService.data.unshift({
            item: this.mylist.item
        })    
    }

})


app.service('DataService', function() {
    
    this.data = [];

});






