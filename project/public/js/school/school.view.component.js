app.component('schoolviewComponent', {
    template: `<div class="main_view">
                    <div class="view_content">
                          <div ui-view></div>                     
                    </div>
               </div>`,
    bindings: {
         name: "="
    },
    controller: function($element) {

    },
    controllerAs: 'schoolview'
});