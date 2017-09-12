app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/school');

    $stateProvider

        .state('school', {
            url: '/school',
            template: `<school-component data="main.data"></school-component>`
        })

        .state('admin', {
            url: '/admin',
            template: `<administrators-component data="main.data"></administrators-component>`     
        });

});