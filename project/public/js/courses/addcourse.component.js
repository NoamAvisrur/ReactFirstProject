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
                              <label>
                                  <span>course image:</span>
                                  <input type="file" ng-model="addcourse.image">
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
      this.image = '';

      this.submit = function(){
          console.log(this);
          this.name = '';
          this.description = '';
      }   
  },
  controllerAs: 'addcourse'
});