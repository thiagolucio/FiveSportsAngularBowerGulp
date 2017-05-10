(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .controller('TreinamentosController', TreinamentosController);

  /** @ngInject */
  function TreinamentosController(vm, TreinamentosService) {
      vm.listaTreinamentos = {};

      function getListaTreinamento() {

        TreinamentosService.getListaTreinamento().success(function (data) {
            vm.listaTreinamentos = data;
        }).error(function (data, status) {
            vm.status = status;
            vm.error = "Não foi possível carregar a lista de Treinamentos!";
        });
      }
       getListaTreinamento();
  }
})();
