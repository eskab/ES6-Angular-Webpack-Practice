export default class TestController {

	constructor(testNames) {
		this.names = testNames.getNames();
		console.log(this.names);
	}

}

TestController.$inject = ['testNames'];