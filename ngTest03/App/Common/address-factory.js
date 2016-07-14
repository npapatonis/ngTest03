(function () {
    'use strict';

    angular
        .module('g1mApp')
        .factory('addressFactory', address_factory);

    address_factory.$inject = [];

    function address_factory() {

        var service = {
            initializeAddress: initializeAddress,
            getUsStates: getUsStates,
            getCountries: getCountries,
        };

        return service;

        function initializeAddress() {
            return {
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                phone: ''
            };
        }

        function getUsStates() {
            return [
                { id: 'idAL', name: 'AL' },
                { id: 'idAK', name: 'AK' },
                { id: 'idAZ', name: 'AZ' },
                { id: 'idAR', name: 'AR' },
                { id: 'idCA', name: 'CA' },
                { id: 'idCO', name: 'CO' },
                { id: 'idCT', name: 'CT' },
                { id: 'idDE', name: 'DE' },
                { id: 'idFL', name: 'FL' },
                { id: 'idGA', name: 'GA' },
                { id: 'idHI', name: 'HI' },
                { id: 'idID', name: 'ID' },
                { id: 'idIL', name: 'IL' },
                { id: 'idIN', name: 'IN' },
                { id: 'idIA', name: 'IA' },
                { id: 'idKS', name: 'KS' },
                { id: 'idKY', name: 'KY' },
                { id: 'idLA', name: 'LA' },
                { id: 'idME', name: 'ME' },
                { id: 'idMD', name: 'MD' },
                { id: 'idMA', name: 'MA' },
                { id: 'idMI', name: 'MI' },
                { id: 'idMN', name: 'MN' },
                { id: 'idMS', name: 'MS' },
                { id: 'idMO', name: 'MO' },
                { id: 'idMT', name: 'MT' },
                { id: 'idNE', name: 'NE' },
                { id: 'idNV', name: 'NV' },
                { id: 'idNH', name: 'NH' },
                { id: 'idNJ', name: 'NJ' },
                { id: 'idNM', name: 'NM' },
                { id: 'idNY', name: 'NY' },
                { id: 'idNC', name: 'NC' },
                { id: 'idND', name: 'ND' },
                { id: 'idOH', name: 'OH' },
                { id: 'idOK', name: 'OK' },
                { id: 'idOR', name: 'OR' },
                { id: 'idPA', name: 'PA' },
                { id: 'idRI', name: 'RI' },
                { id: 'idSC', name: 'SC' },
                { id: 'idSD', name: 'SD' },
                { id: 'idTN', name: 'TN' },
                { id: 'idTX', name: 'TX' },
                { id: 'idUT', name: 'UT' },
                { id: 'idVT', name: 'VT' },
                { id: 'idVA', name: 'VA' },
                { id: 'idWA', name: 'WA' },
                { id: 'idWV', name: 'WV' },
                { id: 'idWI', name: 'WI' },
                { id: 'idWY', name: 'WY' }
            ];
        }

        function getCountries() {
            var countries = [
                { isoCode: 'US', name: 'United States of America' },
                { isoCode: 'MX', name: 'Mexico' }
            ];
            return countries;
        }
    }
})();