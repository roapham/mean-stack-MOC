angular.module('faculties').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/faculties', {
            templateUrl: 'faculties/views/list-faculties.client.view.html'
        }).
        when('/faculties/create', {
            templateUrl: 'faculties/views/create-faculty.client.view.html'
        }).
        when('/faculties/:facultyId', {
            templateUrl: 'faculties/views/view-faculty.client.view.html'
        }).
        when('/faculties/:facultyId/edit', {
            templateUrl: 'faculties/views/edit-faculty.client.view.html'
        });
    }
]); 

// angular.module('faculties').config(['$stateProvider', {
//     function($stateProvider){
//         $stateProvider
//         .state('/admin/faculties', {
            
//         })
//     }
// }])