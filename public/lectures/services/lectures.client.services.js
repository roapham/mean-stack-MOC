angular.module('lectures')
.factory('Lectures', ['$resource',
	function ($resource) {
		return $resource('api/lectures/:lectureId', {
			lectureId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}])
.factory('LecturesByCourse', ['$resource', 
	function($resource) {
		return $resource('api/:thisCourseId/lectures', {
			thisCourseId: '@_id'
		}, {
			get: {
				method: 'GET',
				isArray: true
			}
		})
	}])

; 