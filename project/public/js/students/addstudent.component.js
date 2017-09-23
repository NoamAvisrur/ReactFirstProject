app.component('addstudentComponent', {
            template: `<div class="add_student_wrapper">
                          <h2>Add new student</h2>
                          <form ng-submit="addstudent.submit()">
                              <label>
                                  <span>name:</span>
                                  <input type="text" name="name" ng-model="addstudent.name">
                              </label>
                              <label>
                                  <span>phone:</span>
                                  <input type="text" name="phone" ng-model="addstudent.phone">
                              </label>
                              <label>
                                  <span>email:</span>
                                  <input type="email" name="email" ng-model="addstudent.email">
                              </label>
                              <label>
                                  <span>image</span>
                                  <input type="file">
                              </label>                      
                              <label ng-repeat="course in addstudent.data[1]">
                                  <input type="checkbox" value={{course.name}}>
                                  <span>{{course.name}}</span>
                              </label>
                              <input type="submit">
                          </form>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
      this.name = '';
      this.phone = '';
      this.email = '';
      
      console.log(this);
      this.submit = function(){
          console.log('ok');
          console.log(this);
          this.name = '';
          this.phone = '';
          this.email = '';
      }
  },
  controllerAs: 'addstudent'
});