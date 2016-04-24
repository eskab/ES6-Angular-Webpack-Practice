routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('test', {
			url: '/',
			template: require('./test.html'),
			controller: 'TestController',
			controllerAs: 'vm'
		});
}