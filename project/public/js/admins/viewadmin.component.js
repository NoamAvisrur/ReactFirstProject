app.component('viewadminComponent', {
            template: `<div class="show_admin_wrapper">
                          <div>
                              <a href="">Edit</a>                     
                              <h2>{{viewadmin.data[0].name}}, {{viewadmin.data[0].roles[0].role}}</h2>
                              <a href="">Delete</a>
                          </div>
                          <img ng-src={{viewadmin.data[0].img}} alt="student ing">
                          <span>tel: {{viewadmin.data[0].phone}}</span>
                          <span>email: {{viewadmin.data[0].email}}</span>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
    
  },
  controllerAs: 'viewadmin'
});