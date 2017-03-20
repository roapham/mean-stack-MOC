angular.module('admin').controller('AdminController', ['$scope', 'Authentication', 'Users',
	function($scope, Authentication, Users){
		$scope.authentication = Authentication;
		$scope.create = function () {
			var user = new Users({
				// title: this.title,
				// content: this.content
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				username: this.username,
				password: this.password,
				provider: 'local',
				role: this.role
			});
			user.$save(function (response) {
				alert('Create account success!');
				$scope.resetForm()
			}, function (errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		$scope.resetForm = function(){
			$scope.error = null;
			this.firstName = '';
			this.lastName = '';
			this.email = '';
			this.username = '';
			this.password = '';
			this.role = 'lecturer';
		}
	}
	]); 