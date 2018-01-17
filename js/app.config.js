(function() {
    'use strict';

    angular.module('DesktopCRM', ['ngRoute']).config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider
            .when("/", {
                controller: 'clientsManagerPanelController',
                templateUrl: 'views/clientsManagerPanel.html',
                controllerAs: 'clientsManager'
            })
            .when("/client:id", {
                controller: 'clientProfileController',
                templateUrl: 'views/clientProfile.html',
                controllerAs: 'clientProfile'
            })
            .when("/newClient", {
                controller: 'newClientController',
                templateUrl: 'views/newClient.html',
                controllerAs: 'newClient'
            })
    }
})();