app.component('studentComponent', {
            template: `<li ng-repeat="student in student.students">
                            <img class="student_img" src={{student.img}} alt="students img"/>
                            <span>{{student.name}}</span>
                        </li>`,
  bindings: {
       students: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'student'
});