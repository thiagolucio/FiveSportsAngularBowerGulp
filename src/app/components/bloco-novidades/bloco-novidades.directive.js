(function() {
  'use strict';

  angular.module('FiveSportsApp').directive('blocoNovidades', blocoNovidades);

  /** @ngInject */
  function blocoNovidades() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/bloco-novidades/bloco-novidades.html',
      link: function(scope) {
        scope.novidades = [
          {
            'img': 'assets/images/postsBloco/imgPost05.jpg',
            'titulo': 'Novo Assasins Creed.  40 primeiros minutos do jogo com todas as manhas.',
            'texto': 'Textos mocados 01'
          },
          {
            'img': 'assets/images/postsBloco/imgPost06.jpg',
            'titulo': 'God of War Ascencion é a melhor versão da Saga que já foi feita.',
            'texto': 'Textos mocados 02'
          }
        ];
      }
    };
    return directive;
  }
})();
