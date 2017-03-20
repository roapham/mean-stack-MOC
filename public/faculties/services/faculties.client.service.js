angular.module('faculties')
.factory('Faculties', ['$resource',
	function ($resource) {
		return $resource('api/faculties/:facultyId', {
			facultyId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}])
; 