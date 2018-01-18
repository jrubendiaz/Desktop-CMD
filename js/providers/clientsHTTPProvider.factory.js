(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .factory('clientsHTTPProvider', clientsHTTPProvider);

    clientsHTTPProvider.$inject = ['$http'];
    function clientsHTTPProvider($http) {
        var service = {
            getAll:getAll,
            getClientDetails: getClientDetails,
            add:addNewClient,
            update:updateClient,
            deleteClient: deleteClient
        };
        const server = window.location.origin;
        const path = window.location.pathname;
        var _url = server + path + 'api/clients';

        return service;

        ////////////////
        function getAll() {
            let clients_res = $http.get(_url);

            return clients_res.then(res => {
                res.data.forEach(client => {
                    if(typeof client.productos == 'string' && client.productos.length > 0){
                        client.productos = JSON.parse(client.productos);
                    }
                })
                return res.data;

            })
        }

        function getClientDetails(c_id) {
            let aux_url = _url + "/" + c_id;
            let client_res = $http.get(aux_url);
            return client_res.then(res => {
                return res.data[0];
            })
        }

        function addNewClient(client) {
            let aux_client = JSON.stringify(client);
            return $http.post(_url, aux_client).then(res => {
                return res;
            })
        }

        function updateClient(client) {
            let aux_url = _url + "/" + client.id;
            console.log(client);
            let cli = JSON.stringify(client);

            return $http.put(aux_url, cli).then(res => {
                return res;
            })
        }

        function deleteClient(c_id) {
            let aux_url = _url + "/" + c_id;

            $http.delete(aux_url).then(res => {
                console.log(res);
            })
        }
    }
})(

);