function myProfile($scope) {
	// TODO get info from backend and populate user class object
	console.log('started');
	$scope.user = {
		"userName":"Aravind Shankar"
	};
	$scope.uploadNotes = function() {
		console.log('Notes uploaded');
	}

	$scope.loadImage = function() {
		console.log('Image loaded');
	}
}