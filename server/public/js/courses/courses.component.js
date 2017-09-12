app.component('coursesComponent', {
            template: `<div id="courses">
                           <div class="students_header">
                               <h3>Courses</h3>
                               <a href="">+</a>
                           </div>
                           <ul>
                               <li ng-repeat="course in courses.courses">{{course.name}}</li>
                           </ul>
                       </div>`,
  bindings: {
       courses: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'courses'
});