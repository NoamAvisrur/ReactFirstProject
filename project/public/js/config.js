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
            component: 'schoolgeneralComponent',
            resolve: {
                data: function(DataService) {
                      return DataService.getServerData();
                }
            }            
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
		                 return data.reverse();
                    })
                }
            }
        })
        .state('school.editstudent',{
            url: '/editstudent/:courseId',
            component: 'editstudentComponent',
            resolve: {
                data: function($stateParams, DataService) {
                    return DataService.getSpecificData($stateParams.courseId, 'school/students')
                    .then(function (student) { 
                        return DataService.getServerData()
                        .then(function(courses){
                            var data = [student,courses[1]]
                            return data;    
                        })
                    })
                }
            }
        })         
        .state('school.addcourse', {
            url: '/addcourse',
            component: 'addcourseComponent'
        })
        .state('school.showcourse',{
            url: '/courses/:courseId',
            component: 'viewcourseComponent',
            resolve: {
                data: function($stateParams, DataService) {
                    return DataService.getSpecificData($stateParams.courseId, 'school/courses')
                    .then(function (course) {
                        return DataService.getUserData()
                        .then(function(user){
                            var data = [course[0], user[0]]
                            return data;
                        })
                    })
                }
            }
        })
        .state('school.editcourse',{
            url: '/editcourse/:courseId',
            component: 'editcourseComponent',
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
            component: 'admingeneralComponent',
            resolve: {
                data: function(DataService) {
                      return DataService.getServerData();
                }
            }            
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
                    return DataService.getSpecificData($stateParams.adminId, 'admins')
                    .then(function (data) {
		                 return data;
                    })
                }
            }
        })  
        .state('admin.editcourse',{
            url: '/editadmin/:courseId',
            component: 'editadminComponent',
            resolve: {
                data: function($stateParams, DataService) {
                    return DataService.getSpecificData($stateParams.courseId, 'admins')
                    .then(function (data) { 
                        return data;
                    })
                }
            }
        })         
});
