'use strict';

app
	
	.controller('itemIndexCtrl',function ($scope) {
		
	})

	.controller('itemListCtrl',function ($scope, itemProvider) {

		$scope.items = itemProvider.getItems() ;
	
		
	})

	.controller('itemCreateCtrl',function ($scope) {

		$scope.test = 'toto creatcrt item' ; 
		
	})
	.controller('itemRemoveCtrl',function ($scope) {
		
	})
	;