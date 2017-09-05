app.component('schoolComponent', {
            template: `<h1>school</h1>
                       <div class="content">
                           <div id="courses"><h3>courses</h3></div>
                           <div id="students"><h3>students</h3></div>
                           <div id="main_view"><h3>main view</h3></div>
                       </div>`,
  bindings: {
       name: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'school'
});