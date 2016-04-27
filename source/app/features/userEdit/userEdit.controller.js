export default class UserEditController {

	constructor($stateParams, usersResource) {

		let vm = this;

		usersResource.get($stateParams, (data) => { vm.user = data; });

	}

	submit() {

		let vm = this;

		vm.user.$save(() => {})
		.then(() => {
			console.log('success');
			vm.info = {value: 'User has been updated', class: 'bg-success'};
		}, () => {
			console.log('error');
			vm.info = {value: 'An error has occured', class: 'bg-danger'};
		});

	}

}

UserEditController.$inject = ['$stateParams', 'usersResource'];