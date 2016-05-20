'use strict';
app.controller('PesquisaController', ['$scope','PesquisaService', '$ionicPopup', function ($scope, PesquisaService, $ionicPopup) {
    $scope.dados = {};
    $scope.formulario = { cep: null };
    
    $scope.novaConsulta = function () {
        $scope.formulario.cep = null;
        $scope.dados = {};
    }
    
    $scope.consultar = function() {
      PesquisaService.Pesquisar($scope.formulario.cep).then(function(retorno) {
          if (retorno.status == 200){
            $scope.dados = retorno.data;    
          }
          else{
              $ionicPopup.alert({
                title: 'ERRO!',
                template: 'Não foi possível consultar o CEP'
              });
          }
      })
    };
}]);