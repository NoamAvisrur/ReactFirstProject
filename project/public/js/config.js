app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/school/general');

    $stateProvider
    .state('school',{
        url: '/school',
        //template: `<school-component data="main.data"></school-component>`
        component: 'schoolComponent',
        resolve: {
            data: function(DataService) {
                  return DataService.getServerData();
            }
        }
    }) 
        .state('school.general', {
            url: '/general',
            template: `<img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">`
        })  
        .state('school.addstudent', {
            url: '/addstudent',
            //template: `<addstudent-component data="school.data"></addstudent-component>`
            component: 'addstudentComponent',
            resolve: {
                data: function(DataService) {
                      return DataService.getServerData();
                }
            }
        })
        .state('school.student',{
            url: '/students/:studentId',
            component: 'viewstudentComponent',
            resolve: {
                data: function($stateParams, DataService) {
                    return DataService.getSpecificData($stateParams.studentId)
                    .then(function (data) {
		                 return data;
                    })
                }
            }
        })
        .state('school.addcourse', {
            url: '/addcourse',
            //template: `<addscourse-component></addscourse-component>`
            component: 'addscourseComponent'
        })
    
    .state('admin', {
        url: '/admin',
        //template: `<administrators-component data="main.data"></administrators-component>`
        component: 'administratorsComponent',
        resolve: {
            data: function(DataService) {
                  return DataService.getServerData();
            }
        }        
    })
        .state('admin.general', {
            url: '/general',
            template: `<img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">`
        })  
        .state('admin.addadmin', {
            url: '/addadmin',
            //template: `<addadmin-component></addadmin-component>`
            component: 'addadminComponent'
        })
});

app.controller('studentView', function($stateParams, DataService){
    
     DataService.getSpecificData($stateParams.studentId)
    .then(function (data) {
		this.data = data;
        console.log(data);
	}.bind(this));
})