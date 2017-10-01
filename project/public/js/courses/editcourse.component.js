app.component('editcourseComponent', {
template: `<div class="add_course_wrapper">
              <h2>Edit course</h2>
              <form ng-submit="addcourse.submit()">
                  <label>
                      <span>title:</span>
                      <input type="text" name="title" ng-model="editcourse.title" maxlength="50" pattern="^[A-Za-z\\s]+$" title="please use english letters only" required>
                  </label>
                  <label>
                      <span>description:</span>
                      <textarea rows="4" name="description" ng-model="editcourse.description" maxlength="220" required></textarea>
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
  controller: function($element, DataService) {

      this.$onInit = function(){
          this.title = this.data[0].name;
          this.description = this.data[0].description;
          this.img = '';
      }
  },
  controllerAs: 'editcourse'
});