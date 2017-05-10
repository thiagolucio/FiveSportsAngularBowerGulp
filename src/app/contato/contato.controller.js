(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .controller('ContatoController', ContatoController);

  /** @ngInject */
  function ContatoController($log) {
      var vm = this;
      vm.contato = {};
    //   vm.checkboxModel = {value : true};
      vm.formContato = formContato;
      function formContato(contato) {
        $log.log('fornContato', contato);
      }
  }
})();
