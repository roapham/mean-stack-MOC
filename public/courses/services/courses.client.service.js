angular.module('courses')
.factory('Courses', ['$resource', 
	function ($resource) {
		return $resource('api/courses/:courseId', {
			courseId: '@_id'
		}, {
			// get: {
			// 	method: 'GET',
			// 	isArray: true
			// },
			update: {
				method: 'PUT'
			}
		});
	}])
.factory('MyCourses', ['$resource', 
	function($resource) {
		return $resource('api/my-courses/:myCourseId', {
			myCourseId: '@_id'
		}, {
			// get: {
			// 	method: 'GET',
			// 	isArray: true
			// },
			update: {
				method: 'PUT'
			}
		});
	}])

; 