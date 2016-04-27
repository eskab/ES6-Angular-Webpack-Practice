export default class UsersController {

	constructor(usersResource) {

		let vm = this;

		usersResource.query((data) => { vm.users = data; });

	}

}

UsersController.$inject = ['usersResource'];