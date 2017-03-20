angular.module('home').config([ '$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'home/views/index.client.view.html'
		})

		.state('viewlecture', {
			url:'/view/:viewLectureId',
			templateUrl: 'home/views/view-lecture.client.view.html',
			controller: function($scope, $stateParams, Lectures){
				$scope.selectedLecture = Lectures.get({lectureId: $stateParams.viewLectureId});
			}
			// view: {
			// 	'@root': {
			// 		templateUrl: 'home/views/view-lecture.client.view.html'
			// 	}
			// }
		})

		// .state('index.viewlecture', {
		// 	url:'/viewLectureId',
		// 	view: {
		// 		'@root': {
		// 			templateUrl: 'home/views/view-lecture.client.view.html'
		// 		}
		// 	}
		// })

		;
	}
	
])