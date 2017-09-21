app.component('studentComponent', {
            template: `<a ng-href=/#!/school/{{student._id}} ng-repeat="student in student.students">
                           <li>
                               <img class="student_img" ng-src={{student.img}} alt="students img"/>
                               <div>
                                   <span class="name">{{student.name}}</span>
                                   <span class="phone">{{student.phone}}</span>
                               </div>
                           </li>   
                       </a>`,
  bindings: {
       students: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'student'
});