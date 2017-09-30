app.component('studentComponent', {
            template: `<a ng-href=/#!/school/students/{{student._id}} ng-repeat="student in student.reStudents">
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
     this.$onInit = function(){
         this.reStudents = this.students.reverse();
     }
  },
  controllerAs: 'student'
});