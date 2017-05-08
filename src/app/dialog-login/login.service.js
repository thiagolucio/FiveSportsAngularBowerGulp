(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .factory('LoginService', LoginService);

  /** @ngInject */
  function LoginService($http, baseUrl) {
		var _validaLogin = function (usuario) {
			return $http.get(baseUrl.URL + "/login/" + usuario.login + "/" + usuario.senha);
		};

		return {
			validaLogin: _validaLogin
		};
  }
})();
