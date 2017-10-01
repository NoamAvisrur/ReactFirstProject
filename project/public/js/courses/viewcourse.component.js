app.component('viewcourseComponent', {
            template: `<div class="show_course_wrapper">
                            <div>
                                <a ng-href=/#!/school/editcourse/{{viewcourse.data[0]._id}}>Edit</a>
                                <h2>{{viewcourse.data[0].name}}</h2>
                                <button class="delete" ng-click="viewcourse.deleteCourse(viewcourse.data[0]._id)">Delete</button>
                            </div>
                            <img ng-src={{viewcourse.data[0].img}} alt="student ing">
                            <p>{{viewcourse.data[0].description}}</p>
                            <div id="students_courses">
                                <h2>Students in Course</h2>
                                   <ul>
                                       <p>there are {{viewcourse.data[0].courses.length}} students taking this course</p>
                                       <li ng-repeat="student in viewcourse.data[0].courses">
                                           <img ng-src={{student.img}} alt="student course"> 
                                           <span>{{student.name}}</span>
                                       </li>
                                   </ul>
                            </div>                            
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element, DataService, $state) {
      
      this.deleteCourse = function(id){
          var confirmDelete = confirm("are you sure you want to delete?");
          if(confirmDelete){
              DataService.deleteData(id,'school/courses')
              .then(function(status){
                  if(status == 204){
                      console.log(status);
                      $state.go("school.general",{},{reload: "school"});
                  }
              }.bind(this))
          }    
      }
  },
  controllerAs: 'viewcourse'
});