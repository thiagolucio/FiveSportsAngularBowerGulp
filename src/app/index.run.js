(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
