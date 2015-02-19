function myProfile($scope) {
	// TODO get info from backend and populate user class object
	console.log('started');
	$scope.user = {
		"userName":"Aravind Shankar",
		"uploadsCount":"50",
		"downloadsCount":"60",
		"creditsCount":"10",
		"followersCount":"40",
		"followingCount":"0"
	};
	$scope.uploadNotes = function() {
		console.log('Notes uploaded');
	}
	$scope.displayModalUploadNotes = function() {
		$('#uploadNotes').modal('show');
	}
	$scope.loadImage = function() {
		console.log('Image loaded');
	}
	$scope.browseFiles = function() {
		console.log('Browsing files');
	}
	$scope.logout = function() {
		console.log('logged out');
	}
}