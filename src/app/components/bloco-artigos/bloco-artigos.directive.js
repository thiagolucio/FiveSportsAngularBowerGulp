(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('blocoArtigos', blocoArtigos);

  /** @ngInject */
  function blocoArtigos() {
    var directive = {
      templateUrl: 'app/components/bloco-artigos/bloco-artigos.html',
      controller: BlocoArtigosController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
    /** @ngInject */
    function BlocoArtigosController() {}
  }

})();
