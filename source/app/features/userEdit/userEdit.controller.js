export default class UserEditController {

	constructor($stateParams, usersResource) {

		var vm = this;

		usersResource.get($stateParams, (data) => {
			vm.user = data;
		});

		vm.submit = () => {
			vm.user.$save(() => {});
		}

	}

}

UserEditController.$inject = ['$stateParams', 'usersResource'];