(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .controller('editClientController', editClientController);

    editClientController.$inject = ['$routeParams', 'clientsHTTPProvider'];
    function editClientController($routeParams, clientsHTTPProvider) {
        var vm = this;
        //Variables
        vm.client = {};

        //Functions
        vm.editClient = editClient;


        activate();

        ////////////////

        function activate() {
            vm.client.id = $routeParams.id;
            getDetails();
        }

        function getDetails() {
            let api_res = clientsHTTPProvider.getClientDetails(vm.client.id).then(res => {
                vm.client = res;
            })
        }

        function editClient() {
            clientsHTTPProvider.update(vm.client).then(res => {
                getDetails();
                let redirect = window.location.origin + "" + window.location.pathname;
                window.location.href = redirect;
            });
        }
    }
})();