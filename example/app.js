(function () {
    'use strict';
    angular
        .module('example', ['toastr'])
        .config(['toastrConfig', function(toastrConfig){
            angular.extend(toastrConfig, {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-bottom-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": 300,
                "hideDuration": 1000,
                "timeOut": 5000,
                "extendedTimeOut": 1000,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "slideDown",
                "hideMethod": "slideUp"
              })
        }])
        .controller('exampleController', function($scope, toastr) {
            $scope.showinfo = function() {
                toastr.info('this is an info toast', 'info');
            }
            $scope.showerror = function() {
                toastr.error('this is an danger toast', 'danger');
            }
            $scope.showwarning = function() {
                toastr.warning('this is an warning toast', 'warning');
            }
            $scope.showsuccess = function() {
                toastr.success('this is an success toast', 'success');
            }
        })
})();
