(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .controller('newClientController', newClientController);

    newClientController.$inject = ['clientsHTTPProvider', 'ClientsLocalProvider'];
    function newClientController(clientsHTTPProvider, ClientsLocalProvider) {
        var vm = this;

        //Variables

        //Functions
        vm.manageChanges = manageChanges;
        vm.managePhoto = managePhoto;
        vm.addClient = addClient;


        activate();

        ////////////////

        function activate() { }

        function addClient() {
            let cli = {
                name: vm.name || "nombre",
                subname: vm.subname || "apellidos",
                dni: vm.dni || "DNI",
                photo: vm.photo || "url_photo",
                productos: vm.productos || "[]"
            }
            clientsHTTPProvider.add(cli).then(res => {
                let redirect = window.location.origin + "" + window.location.pathname;
                window.location.href = redirect;
            })
        }

        function manageChanges() {
        }

        function hexToBase64(str) {
            return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
        }

        function managePhoto() {
            let photo = document.getElementById("photo").files[0];
            let photoBinary = "";
            let reader = new FileReader();

            //Photo preview
            vm.photo = window.URL.createObjectURL(photo);
            reader.onloadend = e => {
                photoBinary = e.target.result;
                //manage binary data
            }
        }

    }
})();