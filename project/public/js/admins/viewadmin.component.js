app.component('viewadminComponent', {
            template: `<div class="show_admin_wrapper">
                          <div>
                              <a href="">Edit</a>                     
                              <h2>{{viewadmin.data.name}}</h2>
                              <a href="">Delete</a>
                          </div>
                          <img ng-src={{viewadmin.data.img}} alt="student ing">
                          <span>tel: {{viewadmin.data.phone}}</span>
                          <span>email: {{viewadmin.data.email}}</span>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
    
  },
  controllerAs: 'viewadmin'
});