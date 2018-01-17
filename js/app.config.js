(function() {
    'use strict';

    angular.module('DesktopCRM', ['ngRoute']).config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                controller: 'clientsManagerPanel',
                templateUrl: 'views/clientsManagerPanel.html',
                controllerAs: 'clientsManager'
            })
            .when("/client:id", {
                controller: 'clientProfile',
                templateUrl: 'views/clientProfile.html',
                controllerAs: 'clientProfile'
            })
    }
})();