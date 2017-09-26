app.component('viewstudentComponent', {
            template: `<div class="show_student_wrapper">
                          <div>
                              <a href="">Edit</a>                          
                              <h2>{{viewstudent.data[0].name}}</h2>
                              <a href="">Delete</a>
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
  controller: function($element) {
    
  },
  controllerAs: 'viewstudent'
});