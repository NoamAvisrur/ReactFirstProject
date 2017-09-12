app.component('studentsComponent', {
            template: `<div id="students">
                           <div class="students_header">
                               <h3>Students</h3>
                               <a href="">+</a>
                           </div>
                           <ul>
                               <li ng-repeat="student in students.students">{{student.name}}</li>
                           </ul>
                       </div>`,
  bindings: {
       students: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'students'
});