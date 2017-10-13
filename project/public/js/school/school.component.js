app.component('schoolComponent', {
    template: `<h1>school</h1>
               <div class="content">
                   <courses-component courses="school.data[1]"></courses-component>
                   <students-component students="school.data[0]"></students-component>
                   <schoolview-component></schoolview-component>
               </div>`,
    bindings: {
         data: "="
    },
    controller: function($element) {

    },
    controllerAs: 'school'
});