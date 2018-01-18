(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .controller('clientsManagerPanelController', clientsManagerPanelController);

    clientsManagerPanelController.$inject = ['$http', 'ClientsLocalProvider', 'clientsHTTPProvider'];
    function clientsManagerPanelController($http, clientsLocalProvider, clientsHTTPProvider) {
        var vm = this;

        // Variables
        vm.localClients = [];
        vm.httpClients = [];
        vm.clients = [];
        // Functions


        activate();

        ////////////////

        function activate() {
            /*
            *   GET all clients from http request
            */
            getAllClients();
            // Update Client TEST
            //updateClient();

            // Delete Client TEST
            deleteClient(3);
        }

        function getAllClients() {
            let api_res =clientsHTTPProvider.getAll();

            api_res.then(res => {
                vm.clients = res;
            })
        }

        function updateClient(c) {
            let cli = c || {
                id: 3,
                name: "User Mod",
                subname: "Test",
                dni: "47885566C",
                photo: "/img/photo.jpg",
                productos: "[4788,4555,2222]"
            };
            clientsHTTPProvider.update(cli);
        }

        function deleteClient(c_id) {
            clientsHTTPProvider.deleteClient(c_id);
        }

        function addNewClient(c) {
            let cli = c || {
                name: "User",
                subname: "Test",
                dni: "47885566C",
                photo: "/img/photo.jpg",
                productos: "[4788,4555,2222]"
            };
            //clientsHTTPProvider.add(aux_client);
        }
    }
})();