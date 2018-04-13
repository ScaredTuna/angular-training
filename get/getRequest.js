
let m=angular.module("app1",[]).controller("ctrl",function($scope,$http){
		$scope.data=[];
		$scope.fun=function(){
			$http.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
					$scope.data=response.data;
			});
	};
});