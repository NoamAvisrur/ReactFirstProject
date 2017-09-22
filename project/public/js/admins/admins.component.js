app.component('adminsComponent', {
            template: `<div id="admins">
                           <div class="students_header">
                               <h3>Administrators</h3>
                               <a ui-sref="admin.addadmin">+</a>
                           </div>
                           <ul>
                               <admin-component admins="admins.admins"></admin-component>
                           </ul>
                       </div>`,
  bindings: {
       admins: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'admins'
});