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
    function BlocoArtigosController() {
      var vm = this;
      vm.artigos = [
        {'img':'assets/images/postsBloco/imgPost01.jpg', 'titulo':'Título Curto do Bloco.', 'texto':'aaaaaaaaaaaaaaaaaaa'},
        {'img':'assets/images/postsBloco/imgPost02.jpg', 'titulo':'Título Curto do Bloco.', 'texto':'bbbbbbbbbbbbbb'},
        {'img':'assets/images/postsBloco/imgPost03.jpg', 'titulo':'Título Curto do Bloco.', 'texto':'bbbbbbbbbbbbbb'},
        {'img':'assets/images/postsBloco/imgPost04.jpg', 'titulo':'Título Curto do Bloco.', 'texto':'bbbbbbbbbbbbbb'}
        ];
    }
  }

})();
