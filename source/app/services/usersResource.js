import angular from 'angular';
import ngResource from 'angular-resource';

class UsersResource {

	constructor($resource) {
		return $resource('http://localhost:3000/users/:id', null, {
			'update': {method: 'PUT'}
		});
	}

}

UsersResource.$inject = ['$resource'];

export default angular.module('usersResource', ['ngResource'])
	.service('usersResource', UsersResource)
	.name;