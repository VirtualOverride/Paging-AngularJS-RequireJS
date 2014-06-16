define(['app'], function (app) {
    app.controller('PaginationCtrl', ['$scope', 'dataFactory', 'PagerFactory',
       function ($scope, dataFactory, PagerFactory) {
           $scope.items = [];
           $scope.paging = {};
           var items = [];

           $scope.paging = PagerFactory.createNew(5);

           dataFactory.Init();
           items = dataFactory.getItems();

           $scope.paging.dataLength = items.length;
           $scope.items = items;
       }
    ]);
});

