(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .controller('clientsManagerPanelController', clientsManagerPanelController);

    clientsManagerPanelController.$inject = ['$http', 'ClientsLocalProvider'];
    function clientsManagerPanelController($http, clientsLocalProvider) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.clients = clientsLocalProvider.getAll();
            console.log(vm.clients);
            const api_res = $http.get('http://127.0.0.1:80/api/api/clients');
            api_res.then(res => {
                console.log(res);
            })
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