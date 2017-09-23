app.component('viewcourseComponent', {
            template: `<div class="show_course_wrapper">
                          <div>
                              <a href="">Edit</a>
                              <h2>{{viewcourse.data.name}}</h2>
                              <a href="">Delete</a>
                          </div>
                          <img ng-src={{viewcourse.data.img}} alt="student ing">
                          <p>{{viewcourse.data.description}}</p>
                          <p>there are _ students taking this course</p>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
    
  },
  controllerAs: 'viewcourse'
});