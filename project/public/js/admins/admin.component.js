app.component('adminComponent', {
            template: `<li ng-repeat="admin in admin.admins">
                            <img class="admin_img" ng-src={{admin.img}} alt="course img"/>
                            <div>
                                <span class="name">{{admin.name}}</span>
                                <span class="phone">{{admin.phone}}</span>
                                <span class="email">{{admin.email}}</span>
                            </div>
                        </li>`,
  bindings: {
       admins: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'admin'
});