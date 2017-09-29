app.component('addadminComponent', {
            template: `<div class="add_admin_wrapper">
                          <h2>add new administrator</h2>
                          <form ng-submit="addadmin.submit()">
                              <label>
                                  <span>name:</span>
                                  <input type="text" name="name" ng-model="addadmin.name" maxlength="50" pattern="^[A-Za-z\\s]+$" title="please use english letters only" required>
                              </label>
                              <label>
                                  <span>phone:</span>
                                  <input type="text" name="phone" ng-model="addadmin.phone" maxlength="10" pattern="^[0-9]+$" title="please use digits only" required>
                              </label>
                              <label>
                                  <span>email:</span>
                                  <input type="email" name="email" ng-model="addadmin.email" required>
                              </label>
                              <label>
                                  <span>role:</span>
                                  <select ng-model="addadmin.role" required>
                                       <option value="ObjectId("59ca52d0eacd11bc2f1ea63e")">Owner</option>
                                       <option value="ObjectId("59ca5316eacd11bc2f1ea63f")">Manager</option>
                                       <option value="ObjectId("59ca531eeacd11bc2f1ea640")">Sales</option>
                                  </select>
                              </label>                       
                              <label>
                                  <span>password:</span>
                                  <input type="password" name="password" maxlength="8" ng-model="addadmin.password" required>
                              </label>                      
                              <label>
                                  <span>presonal image:</span>
                                  <input type="file">
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
      this.img = '';
      this.role = '';
      this.password = '';
      
      console.log(this);
      this.submit = function(){
          console.log(this);
      }
      
      this.clean = function(){  
          this.name = '';
          this.phone = '';
          this.email = '';
          this.role = '';
          this.password = '';          
      }      

  },
  controllerAs: 'addadmin'
});