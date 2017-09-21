app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/school');

    $stateProvider

    .state('school',{
        url: '/school',
        template: `<school-component data="main.data"></school-component>`
    }) 
    .state('school.general', {
        url: '',
        template: `<img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">`
    })  
    .state('school.students', {
        url: '/students',
        template: `<addstudent-component data="main.data"></addstudent-component>`
    })
    .state('school.student',{
        url: '/:studentId',
        controller: 'studentView',
        controllerAs: 'student',
        template: `<h1>hello {{student.studentName}}</h1>`
    })
    .state('school.courses', {
        url: '/courses',
        template: `<addscourse-component></addscourse-component>`
    })
    
    .state('admin', {
        url: '/admin',
        template: `<administrators-component data="main.data"></administrators-component>`     
    });
});

app.controller('studentView', function($stateParams, DataService){
    
     DataService.getSpecificData($stateParams.studentId)
    .then(function (data) {
		this.data = data;
        console.log(data);
	}.bind(this));
})