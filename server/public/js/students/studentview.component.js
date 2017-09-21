app.component('stidentviewComponent', {
            template: `<div>
                           <h1>hello student</h1>
                       </div>`,
  bindings: {
       admins: "="
  },
  controller: function($element, DataService) {
    
    
    
    DataService.getMeData('students', )
    .then(function (data) {
		this.data = data;
        console.log(data)
	}.bind(this));
    
  },
  controllerAs: 'stidentview'
});