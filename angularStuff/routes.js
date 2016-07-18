angular.module('routerApp')
    .config(function($stateProvider, $urlRouterProvider) {
        //This is a catch all for our routes

        $urlRouterProvider.otherwise("/");

            //We need to configure our routes here

            $stateProvider
                .state('home', {
                        url: "/",
                        templateUrl: "views/home.html",
                        controller:"homeCtrl"
                })
                .state('contact' ,{
                        url:"/contact",
                        templateUrl:"views/contact.html"
                })
                .state('him' ,{
                    url:"/him",
                    templateUrl:"views/him.html"
                })
                // We will need to pull params from the url here and populate the view based off that param
                .state('her' ,{
                    url:"/her",
                    templateUrl:"views/her.html",
                    controller: "mainCtrl"

                })
                .state('details' ,{
                    url:"/details/:id",
                    templateUrl:"views/details.html",
                    controller: "detailsCtrl"

                })
                .state('purchase' ,{
                    url:"/purchase/:id",
                    templateUrl:"views/purchase.html",
                    controller: "detailsCtrl"

                })

                .state('blog' ,{
                    url:"/blog",
                    templateUrl:"views/blog.html"
                })
                .state('blog.tips' ,{
                    url:"/tips",
                    templateUrl:"views/tips.html"
                })
                .state('blog.recent' ,{
                    url:"/recent",
                    templateUrl:"views/recent.html"
                })
                .state('blog.trending' ,{
                    url:"/trending",
                    templateUrl:"views/trending.html"
                })


    });









