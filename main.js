'use strict';

require.config({
    paths: {
        jQuery          : '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        bootstrap       : '//maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
        angular         : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular.min',
        ngResource      : '//code.angularjs.org/1.2.9/angular-resource.min',
        pagination      : 'paginationApp'
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
    'PaginationCtrl',
    'dataFactory',
    'bootstrap',
    'jQuery'
],
function (angular) {
    angular.bootstrap(document, ['MyApp']);
});
