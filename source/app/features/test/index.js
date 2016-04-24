import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './test.routes';
import TestController from './test.controller';
import testNames from './../../services/testNames.service';

export default angular.module('app.test', [uirouter, testNames])
	.config(routing)
	.controller('TestController', TestController)
	.name;