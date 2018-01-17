(function() {
    'use strict';

    angular
        .module('DesktopCRM')
        .controller('newClientController', newClientController);

    newClientController.$inject = ['ClientsLocalProvider'];
    function newClientController(ClientsLocalProvider) {
        var vm = this;

        //Variables

        //Functions
        vm.manageChanges = manageChanges;
        vm.managePhoto = managePhoto;


        activate();

        ////////////////

        function activate() { }

        function manageChanges() {
            console.log(vm.name, vm.subname, vm.photo, vm.dni);
        }

        function hexToBase64(str) {
            return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
        }

        function managePhoto() {
            console.log("HOLA");
            let photo = document.getElementById("photo").files[0];
            let photoBinary = "";
            let reader = new FileReader();

            //Photo preview
            vm.photo = window.URL.createObjectURL(photo);
            console.log(vm.photo);
            reader.onloadend = e => {
                photoBinary = e.target.result;
                //manage binary data
            }
        }

    }
})();