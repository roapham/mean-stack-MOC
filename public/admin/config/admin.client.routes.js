angular.module('admin').config(['$routeProvider', '$stateProvider',

    function($routeProvider, $stateProvider) {
        // $routeProvider.
        // when('/admin', {
        //     templateUrl: 'admin/views/home.client.view.html'
        // });

        // $urlRouterProvider.otherwise('/#!/admin/welcome');
    
	    $stateProvider

	    	.state('admin', {
	    		url: '/admin',
	    		templateUrl: 'admin/views/home.client.view.html'
	    	})

	    	.state('admin.welcome', {
	    		url: '/welcome',
	    		templateUrl: 'admin/views/welcome.client.view.html'
	    	})
	        
	        .state('admin.faculties', {
	            url: '/faculties',
	            templateUrl: 'faculties/views/list-faculties.client.view.html'
	        })
	        
	        .state('admin.addAccount', {
	            url: '/add-account',
	            templateUrl: 'admin/views/add-account.client.view.html'
	        })



	        ;
	}
]); 