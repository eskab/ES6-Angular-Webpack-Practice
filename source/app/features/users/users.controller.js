export default class UsersController {

	constructor(usersResource) {

		var vm = this;

		usersResource.query((data) => {
			vm.users = data;
		});

	}

}

UsersController.$inject = ['usersResource'];