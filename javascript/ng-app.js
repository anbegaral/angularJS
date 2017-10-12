var jsonplaceholder = angular.module('JsonPlaceHolderApp', []);
/**
 * Main controller
 * @param {type} param1
 * @param {type} param2
 */
jsonplaceholder.controller('mainController', function ($scope, $http) {
    var url = "http://jsonplaceholder.typicode.com";
    $scope.posts = {};
    $scope.msg = {};
    $scope.user = {};
    
/**
 * Getting posts
 */
    $http.get(url + '/posts').
            success(function (data) {
                $scope.posts = data;
            })
            .error(function (err) {
                $scope.msg = err;
            });
            
/**
 * Getting user by id
 * @param {type} userId
 * @returns {undefined}
 */
    $scope.showUser = function (userId) {
        $scope.newUser = userId;
        $http.get(url + '/users/' + $scope.newUser).
                success(function (data) {
                    $scope.newUser={};
                    $scope.user = data;
                })
                .error(function (err) {
                    $scope.msg = err;
                });
    };
    
    /**
     * Controller for translations
     * @param {type} $scope
     * @param {type} $http
     * @returns {undefined}
     */
}).controller('translateController', function ($scope, $http) {
    var urlTranslate = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160716T134240Z.8c1bffe0bd0333de.e0bda45c7c9066063dccf27ec4d584e883cda16b";
    $scope.translate = {};
    
    /**
     * Getting the translation given the te text to translate
     * @param {type} title
     * @param {type} body
     * @returns {undefined}
     */
    $scope.showTranslate = function (title, body) {
        $scope.newTranslate = title + " "+body;
        $http.get(urlTranslate + '&text=' +$scope.newTranslate + '&lang=la-en&format=html').
                success(function (data) {
                    $scope.newTranslate={};
                    $scope.translate = data.text;
                })
                .error(function (err) {
                    $scope.msg = err;
                });
    };
    
    /**
     * Directive to show the user matching the element
     * @returns 
     */
}).directive('showUser', function () {
    return {
        restrict: 'E',
        templateUrl: 'show-user.html'
    };
});
