'use strict';

require.config({
    paths: {
        jQuery          : 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        bootstrap       : 'http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
        angular         : 'http://code.angularjs.org/1.2.9/angular.min',
        pagination      : './libs/paginationApp'
    },
    shim: {
        angular         : { 'exports': 'angular' },
        pagination      : ['angular'],
        bootstrap       : ['jQuery']
    }
});

define('app', [
    'angular',
    'pagination'
],
function (angular) {
    return angular.module('MyApp', ['Pagination']);
});

require([
    'angular',
    'app',
    'controllers/PaginationCtrl',
    'factories/dataFactory',
    'bootstrap',
    'jQuery'
],
function (angular) {
    angular.bootstrap(document, ['MyApp']);
});
