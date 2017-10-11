app.component('adminsComponent', {
            template: `<div id="admins">
                           <div class="students_header">
                               <h3>Administrators</h3>
                               <a ui-sref="admin.addadmin">+</a>
                           </div>
                           <ul>
                               <admin-component admins="admins.admins" user="admins.user"></admin-component>
                           </ul>
                       </div>`,
  bindings: {
       admins: "=",
       user: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'admins'
});