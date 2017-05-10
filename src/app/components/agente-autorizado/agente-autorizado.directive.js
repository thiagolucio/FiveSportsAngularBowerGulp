(function() {
	'use strict';

	angular.module('FiveSportsApp').directive('agenteAutorizado',	agenteAutorizado);

	/** @ngInject */
	function agenteAutorizado() {
		var directive = {
			templateUrl : 'app/components/agente-autorizado/agente-autorizado.html',
			controller : AgenteAutorizadoController,
			controllerAs : 'ctrl',
			bindToController : true
		}

		return directive;
		/** @ngInject */
		function AgenteAutorizadoController(AgenteAutorizadoService) {
			var vm = this;

			vm.listaAgenteAutorizado = {};

			function getListaAgenteAutorizado() {
				AgenteAutorizadoService.getListaAgenteAutorizado()
				.success(function(data) {
					if (data.erro) {
						vm.error = data.mensagem;
					} else {
						vm.listaAgenteAutorizado = data.objetoResposta;
					}})
				.error(function(data, status) {
          vm.status = status;
					vm.error = data.mensagem;
				});
			}
			getListaAgenteAutorizado();
		}
	}
})();
