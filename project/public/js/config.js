app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/school/general');

    $stateProvider
    .state('school',{
        url: '/school',
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
            component: 'addstudentComponent',
            resolve: {
                data: function(DataService) {
                      return DataService.getServerData();
                }
            }
        })
        .state('school.showstudent',{
            url: '/students/:studentId',
            component: 'viewstudentComponent',
            resolve: {
                data: function($stateParams, DataService) {
                    return DataService.getSpecificData($stateParams.studentId, 'school/students')
                    .then(function (data) {
		                 return data;
                    })
                }
            }
        })
        .state('school.addcourse', {
            url: '/addcourse',
            component: 'addscourseComponent'
        })
        .state('school.showcourse',{
            url: '/courses/:courseId',
            component: 'viewcourseComponent',
            resolve: {
                data: function($stateParams, DataService) {
                    return DataService.getSpecificData($stateParams.courseId, 'school/courses')
                    .then(function (data) {
		                 return data;
                    })
                }
            }
        })        
    
    .state('admin', {
        url: '/admin',
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
            component: 'addadminComponent'
        })
        .state('admin.showadmin',{
            url: '/:adminId',
            component: 'viewadminComponent',
            resolve: {
                data: function($stateParams, DataService) {
                    return DataService.getSpecificData($stateParams.adminId, 'admin')
                    .then(function (data) {
		                 return data;
                    })
                }
            }
        })         
});
