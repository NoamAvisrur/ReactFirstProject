app.component('adminComponent', {
            template: `<h1>administrators</h1>
                       <div class="content">
                           <div id="admins"><h3>admins</h3><p>{{admin.name}}</p></div>
                           <div id="main_view"><h3>main view</h3></div>
                       </div>`,
  bindings: {
       name: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'admin'
});