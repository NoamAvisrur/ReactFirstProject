app.component('viewstudentComponent', {
    template: `<div class="show_student_wrapper">
                  <div>
                      <a ng-href=/#!/school/editstudent/{{viewstudent.data[0]._id}}>Edit</a>                         
                      <h2>{{viewstudent.data[0].name}}</h2>
                      <button class="delete" ng-click="viewstudent.deleteStudent(viewstudent.data[0]._id)">Delete</button>
                  </div>
                  <img ng-src={{viewstudent.data[0].img}} alt="student img">
                  <span>tel: {{viewstudent.data[0].phone}}</span>
                  <span>email: {{viewstudent.data[0].email}}</span>
                  <div id="students_courses">
                      <h2>Student's Courses</h2>
                         <ul>
                             <li ng-repeat="course in viewstudent.data[0].courses">
                                 <img ng-src={{course.img}} alt="student course"> 
                                 <span>{{course.name}}</span>
                             </li>
                         </ul>
                  </div>
               </div>`,
    bindings: {
         data: "="
    },
    controller: function($element, DataService, $state) {

        this.deleteStudent = function(id){
            var confirmDelete = confirm("are you sure you want to delete?");
            if(confirmDelete){
                DataService.deleteData(id,'school/students')
                .then(function(status){
                    if(status == 204){
                        $state.go("school.general",{},{reload: "school"});
                    }
                }.bind(this))
            }              
        }
    },
    controllerAs: 'viewstudent'
});