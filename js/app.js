var myApp = angular.module("pageApp", [ 'ui.router', 'ui.bootstrap' ]);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/til");

	$stateProvider
	.state('about3', {
		url : '/about',
		templateUrl : 'html/about2.html',
		
	})
    .state('til', {
		url : '/til',
		templateUrl : 'html/about2.html',
		
	})
	.state('about', {
		url : '/about3',
		templateUrl : 'html/about3.html',
		
	})
	
});

myApp.controller("tilCtrl", function($scope, $state) {
	
					$state.go('til');
					
					$scope.redirectToTil = function(){
                        $state.go('about'); 
                        }
							
				
					
				});
				
				
/* myApp.controller("aboutCtrl", function($scope, $state) {
	
					
					$scope.redirectToTil = function(){
                        $state.go('til'); 
                        }
							

					
					
				});		 */		


	
/* myApp.controller("aboutCtrl", function($scope, $http, $uibModal, $document) {
	initTabCtrl();
	var data = sharedDataScope.getProperty();
	$scope.tasks = data.tasks;
	$scope.orderInfo = data.order;
	$scope.custData = data.customerInfo;
	$scope.wsReqRespList = data.wsReqResp;
	
	$scope.tabs = [ {
		title : 'Summary',
		url : 'html/summary.html'
	}, {
		title : 'Order',
		url : 'html/orderList.html'
	}, {
		title : 'Customer',
		url : 'html/customerData.html'
	}, {
		title : 'Task',
		url : 'html/taskList.html'
	}, {
		title : 'WSReqResp',
		url : 'html/wsReqResp.html'
	},  {
		title : 'Flow',
		url : 'html/flow.html'
	}];
	
	
	$scope.tabs2 = [ {
		title : 'Summary',
		url : 'html/summary.html'
	}, {
		title : 'Order',
		url : 'html/orderList.html'
	}, {
		title : 'Customer',
		url : 'html/customerData.html'
	}, {
		title : 'Task',
		url : 'html/taskList.html'
	},  {
		title : 'Flow',
		url : 'html/flow.html'
	}];
	
	
	$scope.currentTab = 'html/summary.html';

	$scope.onClickTab = function(tab) {
		$scope.currentTab = tab.url;
	};

	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	};
	
	var $tabDataCtrl = this;
	$tabDataCtrl.items = [ 'item1' ];
	$tabDataCtrl.animationsEnabled = true;
	$tabDataCtrl.open = function(xml, type) {
		alert(xml);
		$scope.outputXML = xml;
		alert($scope.outputXML);
		if (type == "req")
			$scope.typeOfXml = "RequestXML";
		else
			$scope.typeOfXml = "ResponseXML";
		var modalInstance = $uibModal.open({
			templateUrl : 'html/dialogBox.html',
			controller : 'ModalInstanceCtrl',
			controllerAs : '$tabDataCtrl',
			resolve : {
				items : function() {
					return $tabDataCtrl.items;
				}
			}
		});
	};
	
	function initTabCtrl(){
		$scope.sortTypeTask = 'taskID'; // set the default sort type for Tasks
		$scope.sortReverseTask = false; // set the default sort order
		$scope.sortTypeOrder = 'orderId'; // set the default sort type for Order
		$scope.sortReverseOrder = false; // set the default sort order
		$scope.sortTypeReqResp = 'MOrderId'; // set the default sort type for WSReqResp
		$scope.sortReverseReqResp = false; //// set the default sort order
		$scope.sortTypeCustomer = 'customerId'; // set the default sort type for Customer
		$scope.sortReverseCustomer = false; //// set the default sort order
		$scope.tasks = [];
		$scope.orderInfo = [];
		$scope.custData = [];
		$scope.wsReqRespList = [];
		$scope.eno=false;
		$scope.dvarom=true;
		$scope.flowhttp= 'default';
	}
	
	
// var ordId= $scope.orderInfo[0].ensOmOrderId;
	
	var custdetails = {
			customerId : "31431" ,
			orderId : "70738" ,
			transactionId : null,
			customerIdType : "BAN",
			orderIdType : "DVAROM",
		};
	 
	 $scope.showDvarOm=function(){ 
		 $scope.eno=false;
		 $scope.dvarom=true;	
	}
	
	$scope.showEno=function(){ 
		 $scope.eno=true;
		 $scope.dvarom=false;	
	}
		
	$scope.isActiveButton=function(button){ 
		if (button== "dvarom")
			return $scope.dvarom;
		else if (button== "eno") 
			return $scope.eno;
	}
    
   $scope.searchEno = function() {
	        
	        $scope.flowhttp= "searching..";
			$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
			$http({
				method : 'GET',
				url : 'dvarwebapp',
				params : custdetails
			}).success(function(data) {
				$scope.flowhttp= "success";
			
			}).error(function(data) { 
				$scope.flowhttp = "failure";
			});
			
            }
	
});
	 */

	


	
	
	
	
	
	
	
	
	
	
