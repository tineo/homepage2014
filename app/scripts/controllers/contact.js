'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('ContactCtrl', function ($scope,$document) {
        $document.find("body").attr("id","contact-page");


        $scope.map = {
            center: {
                latitude: -12.0318297,
                longitude: -77.0776264
            },
            zoom: 17
        };
        var qr = angular.element( document.querySelector( '.qr-code' ) );
        if(qr.length > 0) {
            console.log("founded");
            /*qr.click(function(){
                $(this).toggleClass('active');
            });*/

            $scope.showQR = function($event){
                console.log($event.target);

            }
        }


        $scope.mailme = function ($event){
            $event.preventDefault();
            alert("Sorry!! I'm using only AngularJS, even there not is a NodeJS backend. ;)")
        }
  });
