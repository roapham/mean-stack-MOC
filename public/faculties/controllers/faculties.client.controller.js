angular.module('faculties').controller('FacultiesController',
    ['$scope', '$routeParams', '$location', 'Authentication', 'Faculties',
    function ($scope, $routeParams, $location, Authentication, Faculties) {
        $scope.authentication = Authentication;
        $scope.create = function () {
            var faculty = new Faculties({
                name: this.name
            });
            faculty.$save(function (response) {
                // $location.path('faculties/' + response._id);
                $scope.faculties.push(faculty);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        $scope.find = function () {
            $scope.faculties = Faculties.query();
        };
        $scope.findOne = function () {
            $scope.faculty = Faculties.get({
                facultyId: $routeParams.facultyId
            });
        };
        // $scope.update = function () {
        //     $scope.faculty.$update(function () {
        //         $location.path('faculties/' + $scope.faculty._id);
        //     }, function (errorResponse) {
        //         $scope.error = errorResponse.data.message;
        //     });
        // };
        $scope.update = function () {
            $scope.faculty.$update(function () {
                $scope.faculties = Faculties.query();
                alert('Success');
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

    }
    ]);