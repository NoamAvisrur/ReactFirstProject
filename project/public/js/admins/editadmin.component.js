app.component('editadminComponent', {
    template: `<div class="add_admin_wrapper">
                   <h2>edit administrator</h2>
                   <form ng-submit="editadmin.submit()">
                       <label>
                           <span>name:</span>
                           <input type="text" name="name" ng-model="editadmin.name" maxlength="50" pattern="^[A-Za-z\\s]+$" title="please use english letters only" required>
                       </label>
                       <label>
                           <span>phone:</span>
                           <input type="text" name="phone" ng-model="editadmin.phone" maxlength="10" pattern="^[0-9]{7,10}$" title="please insert 7 - 10 digits only" required>
                       </label>
                       <label>
                           <span>email:</span>
                           <input type="email" name="email" ng-model="editadmin.email" required>
                       </label>
                       <label>
                           <span>role:</span>
                           <select ng-model="editadmin.role" required>
                               <option value="59ca5316eacd11bc2f1ea63f">Manager</option>
                               <option value="59ca531eeacd11bc2f1ea640">Sales</option>
                           </select>
                       </label>                       
                       <label>
                           <span>new password:</span>
                           <input type="password" name="password" maxlength="8" ng-model="editadmin.password" pattern="^[a-zA-Z0-9]+$" title="please use english letters and digits only" required>
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
    controller: function($element, DataService, $state) {

        this.$onInit = function(){  
            this.name = this.data[0].name;
            this.phone = this.data[0].phone;
            this.email = this.data[0].email;
            this.img = '';
            this.role = '';
            this.password = '';
        }

        this.submit = function(){
            this.img = document.querySelector('input[type=file]').files[0].name;
            var data = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                img: this.img,
                role: this.role,
                password: this.password
            }    
            DataService.addNewData('admins', JSON.stringify(data))
            .then(function(status){
                if(status == 201){
                    console.log(status);
                    this.clean();
                    $state.go("admin.general",{},{reload: "admin"})
                }
            }.bind(this))          
        }

        this.clean = function(){  
            this.name = '';
            this.phone = '';
            this.email = '';
            this.role = '';
            this.password = '';          
        }      

    },
    controllerAs: 'editadmin'
});