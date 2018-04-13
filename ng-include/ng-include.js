let m = angular.module("app",[]).controller("ctrl",function($scope){
	$scope.records=[
		{regNo:1, name:"John"},
		{regNo:2, name:"Anne"},
		{regNo:3, name:"Dave"}
	];
	$scope.fName = "";
});