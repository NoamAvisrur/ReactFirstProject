app.component('admingeneralComponent', {
    template: `<div class="general_wrapper">
                    <h2>number of admins: <span>{{admingeneral.data[2].length}}</span></h2>
                    <img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">
               </div>`,
    bindings: {
         data: "="
    },
    controller: function($element, DataService, $state) {
        
    },
    controllerAs: 'admingeneral'
});