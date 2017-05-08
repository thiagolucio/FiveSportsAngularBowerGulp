(function() {
  'use strict';

  angular.module('FiveSportsApp').directive('blocoArtigos', blocoArtigos);

  /** @ngInject */
  function blocoArtigos() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/bloco-artigos/bloco-artigos.html',
      link: function(scope) {
        scope.artigos = [
          {
            'img': 'assets/images/postsBloco/imgPost01.jpg',
            'titulo': 'Título Curto do Bloco.',
            'texto': 'Texto inserido para o bloco numero Um dos textos'
          }, {
            'img': 'assets/images/postsBloco/imgPost02.jpg',
            'titulo': 'Título Curto do Bloco.',
            'texto': 'Texto inserido para o bloco numero Dois dos textos'
          }, {
            'img': 'assets/images/postsBloco/imgPost03.jpg',
            'titulo': 'Título Curto do Bloco.',
            'texto': 'Texto inserido para o bloco numero Três dos textos'
          }, {
            'img': 'assets/images/postsBloco/imgPost04.jpg',
            'titulo': 'Título Curto do Bloco.',
            'texto': 'Texto inserido para o bloco numero Quatro dos textos'
          }
        ];
      }
    };

    return directive;
  }

})();
