function myProfile($scope) {
	// TODO get info from backend and populate user class object
	$scope.notificationCount = 7;
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
	$scope.visUploadProgress = false;
	$scope.files = [];

	for(var i=1;i<=$scope.notificationCount;i++) {
		$scope.user.notifications.push({"textHeading":"New notification","textDescription":"Description about the notification"});
	}

	$scope.uploadNotes = function() {
		console.log('Notes uploaded');
		//Will be called when progress bar reaches 100%
		//TODO : Give a popup saying that your notes has been uploaded.
		$scope.visUploadProgress = false;
	}
	$scope.startUpload = function() {
		console.log('Started uploading');
		$scope.files.push({"fileName":$('.fileinput-filename').text()});
		$('#removeSelectedFile').trigger('click');
	}
	$scope.uploadNotesDetails = function() {
		console.log('Notes details uploaded');
		//TODO : Do some validation here.
		$scope.visUploadProgress = true;
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

		//TODO : update notifications - user object from backend
		$scope.notificationCount = $scope.notificationCount;	
		$('#notificationCount').css({top: '-30px'});
		$('#notificationCount').animate({top: '12px', opacity: 1});
	}
	$scope.updateNotification = function() {
		console.log('notifications updated');
	}
}