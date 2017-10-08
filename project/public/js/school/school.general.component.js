app.component('schoolgeneralComponent', {
    template: `<div class="general_wrapper">
                    <h2>number of students: <span>{{schoolgeneral.data[0].length}}</span></h2>
                    <h2>number of courses: <span>{{schoolgeneral.data[1].length}}</span></h2>
                    <img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">
               </div>`,
    bindings: {
         data: "="
    },
    controller: function($element, DataService, $state) {
    

    },
    controllerAs: 'schoolgeneral'
});