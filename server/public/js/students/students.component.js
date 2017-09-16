app.component('studentsComponent', {
            template: `<div id="students">
                           <div class="students_header">
                               <h3>Students</h3>
                               <a href="">+</a>
                           </div>
                           <ul>
                               <student-component students="students.students"></student-component>
                           </ul>
                       </div>`,
  bindings: {
       students: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'students'
});