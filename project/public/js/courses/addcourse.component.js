app.component('addscourseComponent', {
            template: `<div class="add_course_wrapper">
                          <h2>Add new course</h2>
                          <form ng-submit="addcourse.submit()">
                              <label>
                                  <span>title:</span>
                                  <input type="text" name="title" ng-model="addcourse.title">
                              </label>
                              <label>
                                  <span>description</span>
                                  <textarea rows="4" name="description" ng-model="addcourse.description"></textarea>
                              </label>
                              <input type="submit">
                          </form>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
      this.title = '';
      this.description = '';

      this.submit = function(){
          console.log('ok');
          console.log(this);
         this.name = '';
         this.description = '';
      }   
  },
  controllerAs: 'addcourse'
});