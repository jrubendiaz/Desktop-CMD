(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .controller('clientsManagerPanelController', clientsManagerPanelController);

    clientsManagerPanelController.$inject = ['ClientsLocalProvider'];
    function clientsManagerPanelController(clientsLocalProvider) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.clients = clientsLocalProvider.getAll();
            console.log(vm.clients);
        }

        function saveClients() {
            clientsLocalProvider.set(vm.clients);
        }

        function setClientTest() {
            let client = {
                id: "001",
                name: "User",
                subname: "Test",
                dni: "11223344A",
                photo: "data/img/users/001.jpg",
                products: ["4577", "0021", "2562"]
            }
            vm.clients.push(client);

            saveClients();
        }
    }
})();