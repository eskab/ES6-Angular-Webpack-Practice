import './../styles/app.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import users from './features/users';
import userEdit from './features/userEdit';

angular.module('app', [uirouter, users, userEdit])
	.config(routing);

