import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './userEdit.routes';
import UserEditController from './userEdit.controller';
import usersResource from './../../services/usersResource';

export default angular.module('app.userEdit', [uirouter, usersResource])
	.config(routing)
	.controller('UserEditController', UserEditController)
	.name;