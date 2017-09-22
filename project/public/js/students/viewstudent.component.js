app.component('viewstudentComponent', {
            template: `<div class="add_student_wrapper">
                          <h2>show student</h2>
                          <img ng-src={{viewstudent.data.img}} alt="student ing">
                          <span>{{viewstudent.data.name}}</span>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
    
  },
  controllerAs: 'viewstudent'
});