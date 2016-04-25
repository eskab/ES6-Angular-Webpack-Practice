export default class TestController {

	constructor(testNames) {
		this.names = testNames.getNames();
	}

}

TestController.$inject = ['testNames'];