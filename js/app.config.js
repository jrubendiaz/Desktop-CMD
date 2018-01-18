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
            .when("/editClient/:id", {
                controller: 'editClientController',
                templateUrl: 'views/editClient.html',
                controllerAs: 'editClient'
            })
            .when("/newClient", {
                controller: 'newClientController',
                templateUrl: 'views/newClient.html',
                controllerAs: 'newClient'
            })
    }
})();