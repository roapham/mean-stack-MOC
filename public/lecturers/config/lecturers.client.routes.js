angular.module('lecturers').config([ '$stateProvider', 
	function($stateProvider){

		$stateProvider

		.state('lecturer', {
			url: '/lecturer',
			templateUrl: 'lecturers/views/index.client.view.html'
		})

		.state('lecturer.welcome', {
			url: '/welcome',
			templateUrl: '/lecturers/views/welcome.client.view.html'
		})

		.state('lecturer.mycourses', {
			url: '/my-courses',
			templateUrl: '/lecturers/views/my-courses.client.view.html'
		})

		.state('lecturer.addlecture', {
			url: '/add-lecture',
			templateUrl: '/lecturers/views/add-lecture.client.view.html'
		})

		.state('lecturer.addcourse', {
			url: '/add-course',
			templateUrl: '/lecturers/views/add-course.client.view.html'
		})

		.state('lecturer.mycourses.coursedetails', {
			url: '/:courseId',
			views: {
				'@lecturer' : {
					templateUrl: '/lecturers/views/course-details.client.view.html',
					controller: function($scope, $stateParams, MyCourses, LecturesByCourse){
						// alert($stateParams.courseId);
						// $scope.myCourseId = $stateParams.courseId;
						$scope.selectedCourse = MyCourses.get({ myCourseId: $stateParams.courseId });
						$scope.courseLectures = LecturesByCourse.get({ thisCourseId: $stateParams.courseId });
					}
				}
			}
		})

		;
	}
	
])