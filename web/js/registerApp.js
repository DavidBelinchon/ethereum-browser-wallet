/** 
* The MIT License (MIT) 
*  
* Copyright (c) 2016 Auth0, Inc. <support@auth0.com> (http://auth0.com) 
*  
* Permission is hereby granted, free of charge, to any person obtaining a copy 
* of this software and associated documentation files (the "Software"), to deal 
* in the Software without restriction, including without limitation the rights 
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
* copies of the Software, and to permit persons to whom the Software is 
* furnished to do so, subject to the following conditions: 
*  
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software. 
*  
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
* SOFTWARE. 
*/
angular.module('InformationApp', [])
.controller('informationCtrl', function($scope, $http, $location) {
	
	
	var abi=[{"constant":false,"inputs":[{"name":"authenticationKey","type":"address"}],"name":"register","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newAuthenticationKey","type":"address"}],"name":"changeAuthenticationKey","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"keyEntries","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"keysInUse","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"keyEntryAddress","type":"address"}],"name":"Registration","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"uint256"},{"indexed":false,"name":"owner","type":"address"}],"name":"Error","type":"event"}];
	
	$scope.register = function(){
		console.log(document.getElementById('secondaryAddress').value)
		web3.eth.contract(abi).at("0x197ef7967a3e4482e917519df422efbc4dde02d3").register(document.getElementById('secondaryAddress').value, {
			from: web3.eth.accounts[0]
		}, function (error, result) {
			if (!error) {
				console.log(result)
			} else {
				console.error(error);
			}
		})
	}
});