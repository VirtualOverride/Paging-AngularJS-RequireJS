define(['app'], function (app) {
    app.factory('dataFactory', function () {
        var factory = {};
        var items = [];

        factory.Init = function () {
            items = [];
            for (var i = 0; i < 50; i++) {
                items.push({ Id: i, Name: "name " + i, Description: "description " + i });
            }
        };

        factory.getItems = function () {
            return items;
        };

        return factory;
    });
});
