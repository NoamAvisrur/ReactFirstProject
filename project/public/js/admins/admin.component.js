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
       admins: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'admin'
});