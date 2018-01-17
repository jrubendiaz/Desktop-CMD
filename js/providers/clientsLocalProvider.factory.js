(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .factory('ClientsLocalProvider', ClientsLocalProvider);

    ClientsLocalProvider.$inject = ['$http'];
    function ClientsLocalProvider($http) {
        var service = {
            getAll:getAll
        };

        return service;

        ////////////////
        function getAll() {
            let clients = [];
            if('clients' in localStorage) {
                clients = JSON.parse(localStorage.clients);
            }
            return clients;
        }

        function get(id) {
            let clients = getAll();
            let client = {};

            if(clients.length > 0) {
                client = clients.find(aux_client => {
                    return aux_client.id === id;
                })
            }
            return client;
        }

        function set(clients) {
            localStorage.client = JSON.stringify(clients);
        }

        function update(updatedClient) {
            let clients = getAll();

            clients.forEach((client, index) => {
                if(client.id == updatedClient.id) {
                    clients[index] = updatedClient;
                }
            })

            set(clients);
        }

        function remove(id) {
            let clients = getAll();

            clients.forEach((client, index => {
                if(client.id == id) {
                    clients.splice(index, 1);
                }
            }))

            set(clients);
        }
    }
})();