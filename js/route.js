/**
 * Created by robin on 1/10/2016.
 */
app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "templates/home.html",
             controller: "HomeCtrl"
        });



    // For any unmatched url, redirect to /
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: true
    //});
    $urlRouterProvider.otherwise("/");
});