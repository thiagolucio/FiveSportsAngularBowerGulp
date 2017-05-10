(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .factory('TreinamentosService', TreinamentosService);

  /** @ngInject */
  function TreinamentosService($http, baseUrl) {
		var _getListaTreinamento = function () {
			return $http.get(baseUrl.URL + "/treinamento/all");
		};

		return {
			getListaTreinamento: _getListaTreinamento
		};
  }
})();
