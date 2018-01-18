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
            console.log(vm.client.id);
            getDetails();
        }

        function getDetails() {
            let api_res = clientsHTTPProvider.getClientDetails(vm.client.id).then(res => {
                vm.client = res;
                console.log(vm.client);
            })
        }

        function editClient() {
            clientsHTTPProvider.update(vm.client).then(res => {
                console.log(res);
                getDetails();
            });
        }
    }
})();