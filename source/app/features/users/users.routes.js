routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('users', {
			url: '/users',
			template: require('./users.html'),
			controller: 'UsersController',
			controllerAs: 'vm'
		});
}