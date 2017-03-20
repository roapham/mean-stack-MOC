angular.module('lecturers').controller('LecturersController',
	['$scope', '$routeParams', '$location', 'Authentication',  'Courses', 'MyCourses',
    'Faculties', 'Lectures', 'LecturesByCourse',
	function ($scope, $routeParams, $location, Authentication, Courses,
        MyCourses, Faculties, Lectures, LecturesByCourse) {

		$scope.authentication = Authentication;

        $scope.myCourses = MyCourses.query();
        $scope.faculties = Faculties.query();
        // $scope.lectures = LecturesByCourse.query();
        // $scope.lectures = 


        // $scope.faculties = Faculties.query();
        // $scope.myCourses = MyCourses.get();
        $scope.createCourse = function () {
            var createThisCourse = new Courses({
                name: this.name,
                faculty: this.faculty
            });
            createThisCourse.$save(function (response) {
                alert('Create new course success');
                $scope.error = null;
                $scope.myCourses.push(createThisCourse);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // $scope.findMyCourses = function() {
        //     $scope.myCourses = MyCourses.get();
        // };


        // $scope.find = function () {
        //     $scope.courses = Courses.query();
        // };
        // $scope.findOne = function () {
        //     $scope.course = Courses.get({
        //         courseId: $routeParams.courseId
        //     });
        // };

        // $scope.findOne = function () {
        //     alert('in findone: ' + $scope.myCourseId);
        //     $scope.myCourse = MyCourses.get({
        //         courseId: $scope.myCourseId
        //     });
        // };
        $scope.updateMyCourse = function () {
            $scope.selectedCourse.$update(function () {
                // $scope.courses = Courses.query();
                $scope.myCourses = MyCourses.query();
                alert('Success');
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.addLecture = function(){
            // alert($scope.myCourse.lecture)
            // alert($scope.addThisLecture.name);
            // alert($scope.addThisLecture.video);
            // alert($scope.addThisLecture.slide);
            // alert($scope.selectedCourse._id);
            var saveLecture = new Lectures({
                name: this.addThisLecture.name,
                video: this.addThisLecture.video,
                slide: this.addThisLecture.slide,
                course: $scope.selectedCourse
            });
            saveLecture.$save(function(response){
                alert('success');
                $scope.courseLectures.push(saveLecture);
            }, function(errorResponse){
                $scope.error = errorResponse.data.message;
            })
            // $scope.myCourse.lecture.push({ name: this.lecture.name, video: this.lecture.video, slide: this.lecture.slide });
        }
	}
	]);