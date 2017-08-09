(function (ng) {

    /**
     * 路由模块
     */

    var routesModule = ng.module('app.routers', ['ui.router']);

    // app.config(function($stateProvider) {
    //     //分发的每一条路由
    //     $stateProvider.when('',{
    //
    //     }).when('',{
    //
    //     }).when('',{
    //
    //     }).otherwise({
    //
    //     })
    // })

    routesModule.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: 'home.html',
            templateUrl: '/views/homeView.html'
        });
        $stateProvider.state('home_Detail', {
            url:'home.html',
            views:{
                "homeHeader":{
                    templateUrl:'/views/homeDetailView.html'
                },
                "homeContent":{
                    templateUrl:'/views/homeContentView.html'
                },
            }
        });
        $stateProvider.state('find', {
            url: 'find.html',
            templateUrl: '/views/findView.html'
        });
        $stateProvider.state('setting', {
            url: 'setting.html',
            templateUrl: '/views/settingView.html'
        });
        $urlRouterProvider.otherwise('home')
    })

})(angular)
