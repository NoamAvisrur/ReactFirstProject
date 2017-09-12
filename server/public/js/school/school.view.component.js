app.component('schoolviewComponent', {
            template: `<div class="main_view">
                            <div class="view_content">
                                  <img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">
                            </div>
                       </div>`,
  bindings: {
       name: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'schoolview'
});