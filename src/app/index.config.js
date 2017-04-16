(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .config(config);
  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
