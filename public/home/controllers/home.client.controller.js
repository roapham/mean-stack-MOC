angular.module('home')
.controller('HomeController',
    ['$scope', '$routeParams', '$location', 'Authentication', 'Lectures',
    function ($scope, $routeParams, $location, Authentication, Lectures) {
        $scope.authentication = Authentication;
        $scope.listAllLectures = Lectures.query();
    }
])
.directive('youtube', function() {
    return {
        restrict: 'E',
        scope: {
            src: '='
        },
        templateUrl: 'home/views/youtube.html'
    };
})
.directive('slide', function() {
    return{
        restrict: 'E',
        scope: {
            src: '='
        },
        templateUrl: 'home/views/slide.html'
    }
})
.filter('trusted', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
});