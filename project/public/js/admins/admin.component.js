app.component('adminComponent', {
    template: `<a ng-href=/#!/admin/{{admin._id}} ng-repeat="admin in Admin.admins" ng-if="admin.roles[0].role !== Admin.loggedUser">
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
        
        this.loggedUser = true;  

        this.$onInit = function(){
            if(this.user.roles[0].role == 'manager'){
                this.loggedUser = 'owner';
            }
        }    

    },
    controllerAs: 'Admin'
});