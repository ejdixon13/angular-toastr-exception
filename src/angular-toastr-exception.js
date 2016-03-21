/**
 * Created by ericjohndixon on 3/15/16.
 */
(function () {
    'use strict';

    angular.module('angular-toastr-exception', [])
        .config(ExceptionConfig)
        .factory('Exception', Exception);
    ExceptionConfig.$inject = ['$provide'];

    //Exception Config
    function ExceptionConfig($provide){
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }

    extendExceptionHandler.$inject = ['$delegate', '$injector'];

    function extendExceptionHandler($delegate, $injector) {
        return function(exception, cause) {
            $delegate(exception, cause);

            var exceptionParts = exception.stack.split('(');
            var fileParts = exceptionParts[1].split(')')[0].split('/');

            var toastr = $injector.get('toastr');
            toastr.error(fileParts[fileParts.length - 1], exceptionParts[0]);
        };
    }


    Exception.$inject = ['toastr', '$rootScope'];

    //Exception Service
    function Exception(toastr, $rootScope) {
        return {
            catcher : catcher,
            success : success
        };
        /////////////////////////////////////////////////////////
        function catcher(message) {
            return function(reason){
                toastr.error(message, reason);
            };
        }

        function success(message) {
            return function(reason){
                toastr.success(message, reason);
            };
        }
    }

})();