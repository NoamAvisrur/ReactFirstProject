app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/school');

    $stateProvider

        .state('school', {
            url: '/school',
            template: `<school-component name="main.name"></school-component>`
        })

        .state('admin', {
            url: '/admin',
            template: `<admin-component name="main.name"></admin-component>`     
        });

});