'use strict';
app.factory('PesquisaService', ['$http', function ($http) {
    var PesquisaService = {};
    
    PesquisaService.Pesquisar = function (cep) {
        return $http.get('http://api.postmon.com.br/v1/cep/' + cep).then(function (results) {
            return results;
        });
    };
    
    return PesquisaService;
}]);