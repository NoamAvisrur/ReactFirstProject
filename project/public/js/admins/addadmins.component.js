app.component('addadminComponent', {
            template: `<div class="add_admin_wrapper">
                          <h2>add administrator</h2>
                          <form>
                              <label>
                                  <span>name</span>
                                  <input type="text">
                              </label>
                              <label>
                                  <span>phone</span>
                                  <input type="text">
                              </label>
                              <label>
                                  <span>email</span>
                                  <input type="email">
                              </label>
                              <label>
                                  <span>image</span>
                                  <input type="file">
                              </label>                      
                              <label ng-repeat="course in addstudent.data[0]">
                                  <input type="checkbox" value={{course}}>
                              </label>
                          </form>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
      
      console.log(this);
     
  },
  controllerAs: 'addadmin'
});