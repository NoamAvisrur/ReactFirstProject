app.component('courseComponent', {
            template: `<li ng-repeat="course in course.courses">
                            <img class="course_img" src={{course.img}} alt="course img"/>
                            <span>{{course.name}}</span>
                        </li>`,
  bindings: {
       courses: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'course'
});