/*jshint -W003, -W098, -W033 */
(function () {
  'use strict';

  angular
    .module('app.admin')
    .controller('HivSummaryIndicatorsCtrl', HivSummaryIndicatorsCtrl);

  HivSummaryIndicatorsCtrl.$nject =

    ['$rootScope', '$scope', '$stateParams', 'EtlRestService', 'HivSummaryIndicatorService', 'moment', '$filter', '$state'
    ,'$timeout','$modal'];

  function HivSummaryIndicatorsCtrl($rootScope, $scope, $stateParams, EtlRestService, HivSummaryIndicatorService, moment,
                                    $filter, $state, $timeout,$modal) {
$scope.params = {
  groupBy:'groupByLocation',
  orderBy:'encounter_datetime|asc'
};

  }
})();
