(function () {
    'use strict';
    angular
        .module('toastr', [])
        .constant('toastrConfig', {
            tapToDismiss: true,
            toastClass: 'toast',
            containerId: 'toast-container',
            debug: false,

            showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
            showDuration: 300,
            showEasing: 'swing', //swing and linear are built into jQuery
            onShown: undefined,
            hideMethod: 'fadeOut',
            hideDuration: 1000,
            hideEasing: 'swing',
            onHidden: undefined,
            closeMethod: false,
            closeDuration: false,
            closeEasing: false,
            closeOnHover: true,

            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            positionClass: 'toast-top-right',
            timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
            titleClass: 'toast-title',
            messageClass: 'toast-message',
            escapeHtml: false,
            target: 'body',
            closeHtml: '<button type="button">&times;</button>',
            closeClass: 'toast-close-button',
            newestOnTop: true,
            preventDuplicates: false,
            progressBar: false,
            progressClass: 'toast-progress',
            rtl: false
        })
        .factory('toastr', ['toastrConfig', function (toastrConfig) {
            return {
                success: callToastr('success'),
                info: callToastr('info'),
                warning: callToastr('warning'),
                error: callToastr('error')
            };

            function callToastr(typ) {
                return function(message, title, options) {
                    return toastr[typ](message, title, angular.extend({}, toastrConfig, options))
                }
            }
        }]);
        
})();
