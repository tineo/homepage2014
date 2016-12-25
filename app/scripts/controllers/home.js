'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('HomeCtrl', function ($document) {
        $document.find("body").attr("id","home-page");
  });
