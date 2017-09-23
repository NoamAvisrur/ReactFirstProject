app.component('addadminComponent', {
            template: `<div class="add_admin_wrapper">
                          <h2>add new administrator</h2>
                          <form ng-submit="addadmin.submit()">
                              <label>
                                  <span>name:</span>
                                  <input type="text" name="name" ng-model="addadmin.name">
                              </label>
                              <label>
                                  <span>phone:</span>
                                  <input type="text" name="phone" ng-model="addadmin.phone">
                              </label>
                              <label>
                                  <span>email:</span>
                                  <input type="email" name="email" ng-model="addadmin.email">
                              </label>
                              <label>
                                  <span>role:</span>
                                  <select></select>
                              </label>                       
                              <label>
                                  <span>password:</span>
                                  <input type="password" name="password" ng-model="addadmin.password">
                              </label>                      
                              <label>
                                  <span>presonal image:</span>
                                  <input type="file">
                              </label>                      
                              <label ng-repeat="course in addstudent.data[0]">
                                  <input type="checkbox" value={{course}}>
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
      this.role = '';
      this.password = '';
      
      console.log(this);
      this.submit = function(){
          console.log('ok');
          console.log(this);
          this.name = '';
          this.phone = '';
          this.email = '';
          this.role = '';
          this.password = '';
      }
     
  },
  controllerAs: 'addadmin'
});