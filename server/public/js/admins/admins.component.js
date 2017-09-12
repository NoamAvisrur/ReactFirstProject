app.component('adminsComponent', {
            template: `<div id="admins">
                           <div class="students_header">
                               <h3>Administrators</h3>
                               <a href="">+</a>
                           </div>
                           <ul>
                               <li ng-repeat="admin in admins.admins">{{admin.name}}</li>
                           </ul>
                       </div>`,
  bindings: {
       admins: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'admins'
});