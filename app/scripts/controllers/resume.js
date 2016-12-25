'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('ResumeCtrl', function ($scope,$document) {
        $document.find("body").attr("id","resume-page");

        if($('.layout-switcher').length > 0) {
            if($.cookie('onoffswitch') === 'on'){
                $('.layout-switcher').find('span.basic-view').removeClass('active');
                $('.layout-switcher').find('span.timeline').addClass('active');
                $('#resume-basicview').hide();
                $('.onoffswitch-checkbox').prop("checked", true);
            }else{
                $('.layout-switcher').find('span.timeline').removeClass('active');
                $('.layout-switcher').find('span.basic-view').addClass('active');
                $('#resume-timeline').hide();
                $('.onoffswitch-checkbox').prop("checked", null);
            }

            $('.onoffswitch-checkbox').change(function(){
                $(this).parents('.layout-switcher').find('span').toggleClass('active');

                if($('.timeline').hasClass('active')) {
                    $('#resume-basicview').fadeToggle(300);
                    $('#resume-timeline').delay(300).fadeToggle(300);
                    $.cookie('onoffswitch', 'on', { path: '/', expires: 10 });
                }else{
                    $('#resume-timeline').fadeToggle(300);
                    $('#resume-basicview').delay(300).fadeToggle(300);
                    $.cookie('onoffswitch', 'off', { path: '/', expires: 10 });
                }
            });
        }
    console.log(1);
    //console.log(angular.element(".profile"));
        $scope.print = function($event) {
            $event.preventDefault();
            alert("Sorry, aun no disponible (Not available)");
        }

        $scope.download = function($event) {
            $event.preventDefault();
            alert("Sorry, aun no disponible (Not available)");
        }

  });
