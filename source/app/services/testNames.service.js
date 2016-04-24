import angular from 'angular';

class TestNames {

	constructor() {
		this.names = [
			{name: 'Anon', born: 1995},
			{name: 'Anona', born: 1997}
		];
	}

	getNames() {
		return this.names;
	}

}

export default angular.module('service.test-names', [])
	.service('testNames', TestNames)
	.name;