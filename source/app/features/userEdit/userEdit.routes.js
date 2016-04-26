routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('userEdit', {
			url: '/useredit/:id',
			template: require('./userEdit.html'),
			controller: 'UserEditController',
			controllerAs: 'vm'
		});
}