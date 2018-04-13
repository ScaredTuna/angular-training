let m=angular.module("app",[]).controller("ctrl", function($scope){
	$scope.data = [
	{sport:'Cricket',like:0,dislike:0},
	{sport:'Football',like:0,dislike:0},
	{sport:'Hockey',like:0,dislike:0}
	];
	$scope.addLike = function(record){
		record.like++;
	};
	$scope.addDislike = function(record){
		record.dislike++;
	};
	$scope.results = function(record){
		if(record.like > record.dislike){
			return "More likes";
		} else if(record.like < record.dislike){
			return "More dislikes";
		} else {
			return "**";
		}
	};
});