import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './users.routes';
import UsersController from './users.controller';
import usersResource from './../../services/usersResource';

export default angular.module('app.users', [uirouter, usersResource])
	.config(routing)
	.controller('UsersController', UsersController)
	.name;