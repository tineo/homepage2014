'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('PortfolioCtrl', function ($scope,$document,$window) {
        $document.find("body").attr("id","portfolio-page");



            //Isotope portfolio
            var $container = $('#container');
            //var $container = angular.element( document.querySelector( '#container' ) );

            $container.isotope({
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                },
                animationEngine: 'best-available',
                itemSelector: '.element',
                layoutMode: 'fitRows',
                filter: '.page-1'
            });


            //Filter categories
            $('#filters a').click(function(){
                var $categories = $(this).attr('data-filter');
                $('#filters').attr('data-active', $categories);

                var $optionSet = $(this).parents('#filters');
                $optionSet.find('.active').removeClass('active');
                $(this).addClass('active');

                reorder();
                return false;
            });

            //Filter pages
            $('#filters-page a').click(function(){
                var $pages = $(this).attr('data-filter');
                $('#filters-page').attr('data-active', $pages);

                var $optionSet = $(this).parents('#filters-page');
                $optionSet.find('.active').removeClass('active');
                $(this).addClass('active');

                reorder();
                return false;
            });

            //PrettyPhoto
            /*$("a[rel^='prettyPhoto']").click(function(e) {
                console.log($(window).width());
                if ($(window).width()<480) {
                    e.stopImmediatePropagation();
                    $window.location = $(this).attr('href');
                }
                console.log("hey");
                e.preventDefault();
                return false;
            });*/

            $("a[rel^='prettyPhoto']").prettyPhoto({
                social_tools: '',
                theme: 'light_rounded',
                callback: function()
                {

                   // $window.location = "#portfolio";
                }
            });
        // Fix me
        $scope.repeler = function($event){
            $event.preventDefault();

        }



        function reorder(){

            console.log("reordering");

            var $categories = $('#filters').attr('data-active');
            var $pages = $('#filters-page').attr('data-active');

            if (typeof $categories === 'undefined') {
                $categories = "";
            }
            if (typeof $pages === 'undefined') {
                $pages = "";
            }

            var filterString = $categories + $pages;

            if (filterString === "**"){
                filterString = "*";
            }

            $container.isotope({
                filter: filterString,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        }
  });
