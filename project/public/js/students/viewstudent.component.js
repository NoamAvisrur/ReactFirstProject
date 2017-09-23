app.component('viewstudentComponent', {
            template: `<div class="show_student_wrapper">
                          <div>
                              <a href="">Edit</a>                          
                              <h2>{{viewstudent.data.name}}</h2>
                              <a href="">Delete</a>
                          </div>
                          <img ng-src={{viewstudent.data.img}} alt="student ing">
                          <span>tel: {{viewstudent.data.phone}}</span>
                          <span>email: {{viewstudent.data.email}}</span>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
    
  },
  controllerAs: 'viewstudent'
});