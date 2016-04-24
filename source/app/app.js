import './../styles/app.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import test from './features/test';

angular.module('app', [uirouter, test])
	.config(routing);

