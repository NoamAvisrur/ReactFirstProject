app.component('courseComponent', {
            template: `<a ui-sref="">
                           <li ng-repeat="course in course.courses" data-set={{course._id}}>
                               <img class="course_img" ng-src={{course.img}} alt="course img"/>
                                <span class="name">{{course.name}}</span>
                            </li>
                        </a>`,
  bindings: {
       courses: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'course'
});