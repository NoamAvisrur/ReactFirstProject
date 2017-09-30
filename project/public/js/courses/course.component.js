app.component('courseComponent', {
            template: `<a ng-href=/#!/school/courses/{{course._id}} ng-repeat="course in course.reCourses">
                           <li>
                               <img class="course_img" ng-src={{course.img}} alt="course img"/>
                                <span class="name">{{course.name}}</span>
                            </li>
                        </a>`,
  bindings: {
       courses: "="
  },
  controller: function($element) {
       this.$onInit = function(){
         this.reCourses = this.courses.reverse();
     }   
  },
  controllerAs: 'course'
});