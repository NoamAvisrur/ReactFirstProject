app.component('adminComponent', {
    template: `<a ng-href=/#!/admin/{{admin._id}} ng-repeat="admin in admin.admins">
                    <li>
                        <img class="admin_img" ng-src={{admin.img}} alt="course img"/>
                        <div>
                            <span class="name">{{admin.name}}, {{admin.roles[0].role}}</span>
                            <span class="phone">{{admin.phone}}</span>
                            <span class="email">{{admin.email}}</span>
                        </div>
                    </li>
                </a>`,
    bindings: {
         admins: "=",
         user: "="
    },
    controller: function($element) {
        
      this.showOwner = true;  

      this.$onInit = function(){
         // if(this.user.roles[0].role == 'sales' || this.user.roles[0].role == 'manager' ){
         //         this.showOwner = "admin.roles[0].role !== 'owner'";
         // }else{
         //     console.log(this.showOwner);
         // }
      }    
      
      this.checkPremmition = function(admin){
          console.log(admin);
          console.log('ok')
          return true;
      }

    },
    controllerAs: 'admin'
});