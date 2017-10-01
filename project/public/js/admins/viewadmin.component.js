app.component('viewadminComponent', {
            template: `<div class="show_admin_wrapper">
                          <div>
                              <a ui-sref="school.editcourse">Edit</a>                     
                              <h2>{{viewadmin.data[0].name}}, {{viewadmin.data[0].roles[0].role}}</h2>
                              <button class="delete" ng-click="viewadmin.deleteAdmin(viewadmin.data[0]._id)">Delete</button>
                          </div>
                          <img ng-src={{viewadmin.data[0].img}} alt="student ing">
                          <span>tel: {{viewadmin.data[0].phone}}</span>
                          <span>email: {{viewadmin.data[0].email}}</span>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element, DataService, $state) {
  
      this.deleteAdmin = function(id){
          var confirmDelete = confirm("are you sure you want to delete?");
          if(confirmDelete){
              DataService.deleteData(id,'admins')
              .then(function(status){
                  if(status == 204){
                      $state.go("admin.general",{},{reload: "admin"});
                  }
              }.bind(this))
          }
      }
  },            
  controllerAs: 'viewadmin'
});