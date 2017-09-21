app.component('coursesComponent', {
            template: `<div id="courses">
                           <div class="students_header">
                               <h3>Courses</h3>
                               <a ui-sref="school.courses">+</a>
                           </div>
                           <ul>
                               <course-component courses="courses.courses"></course-component>
                           </ul>
                       </div>`,
  bindings: {
       courses: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'courses'
});