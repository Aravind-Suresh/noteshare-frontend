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

    var dropbox = document.getElementById("dropbox")
    $scope.dropText = 'Drop files here...'

    // init event handlers
    function dragEnterLeave(evt) {
        evt.stopPropagation()
        evt.preventDefault()
        $scope.$apply(function(){
            $scope.dropText = 'Drop files here...'
            $scope.dropClass = ''
        })
    }
    dropbox.addEventListener("dragenter", dragEnterLeave, false)
    dropbox.addEventListener("dragleave", dragEnterLeave, false)
    dropbox.addEventListener("dragover", function(evt) {
        evt.stopPropagation()
        evt.preventDefault()
        var clazz = 'not-available'
        var ok = evt.dataTransfer && evt.dataTransfer.types && evt.dataTransfer.types.indexOf('Files') >= 0
        $scope.$apply(function(){
            $scope.dropText = ok ? 'Drop files here...' : 'Only files are allowed!'
            $scope.dropClass = ok ? 'over' : 'not-available'
        })
    }, false)
    dropbox.addEventListener("drop", function(evt) {
        console.log('drop evt:', JSON.parse(JSON.stringify(evt.dataTransfer)))
        evt.stopPropagation()
        evt.preventDefault()
        $scope.$apply(function(){
            $scope.dropText = 'Drop files here...'
            $scope.dropClass = ''
        })
        var files = evt.dataTransfer.files
        if (files.length > 0) {
            $scope.$apply(function(){
                $scope.files = []
                for (var i = 0; i < files.length; i++) {
                    $scope.files.push(files[i])
                }
            })
        }
    }, false)

    $scope.setFiles = function(element) {
    $scope.$apply(function($scope) {
      console.log('files:', element.files);
      // Turn the FileList object into an Array
        $scope.files = []
        for (var i = 0; i < element.files.length; i++) {
          $scope.files.push(element.files[i])
        }
      $scope.progressVisible = false
      });
    };

    $scope.uploadFile = function() {
        var fd = new FormData()
        for (var i in $scope.files) {
            fd.append("uploadedFile", $scope.files[i])
        }
        var xhr = new XMLHttpRequest()
        xhr.upload.addEventListener("progress", uploadProgress, false)
        xhr.addEventListener("load", uploadComplete, false)
        xhr.addEventListener("error", uploadFailed, false)
        xhr.addEventListener("abort", uploadCanceled, false)
        xhr.open("POST", "/fileupload")
        $scope.progressVisible = true
        xhr.send(fd)
    }

    function uploadProgress(evt) {
        $scope.$apply(function(){
            if (evt.lengthComputable) {
                $scope.progress = Math.round(evt.loaded * 100 / evt.total)
            } else {
                $scope.progress = 'unable to compute'
            }
        })
    }

    function uploadComplete(evt) {
    	/* This event is raised when the server send back a response */
        alert(evt.target.responseText)
    }

    function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.")
    }

    function uploadCanceled(evt) {
        $scope.$apply(function(){
            $scope.progressVisible = false
        })
        alert("The upload has been canceled by the user or the browser dropped the connection.")
    }
}
