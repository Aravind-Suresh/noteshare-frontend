function myProfile($scope) {
	// TODO get info from backend and populate user class object
	$scope.notificationCount = 1;
	console.log('started');
	$scope.user = {
		"userName":"Aravind Shankar",
		"uploadsCount":"50",
		"downloadsCount":"60",
		"creditsCount":"10",
		"followersCount":"40",
		"followingCount":"0"
	};
	$scope.user.notifications=[];
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
	$scope.updateNotificationCounter = function() {
		console.log('called update function');
		$('#notificationCount').css({opacity:0});
		$scope.notificationCount = $scope.notificationCount + 1;
		$('#notificationCount').css({top: '-30px'});
		$('#notificationCount').animate({top: '12px', opacity: 1});
	}
	$scope.updateNotification = function() {
		$scope.user.notifications.push({"textHeading":"New notification","textDescription":"Description about the notification"});
	}
}