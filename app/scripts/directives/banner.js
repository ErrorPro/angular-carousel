'use strict';

/**
 * @ngdoc directive
 * @name testtaskApp.directive:banner
 * @description
 * # banner
 */
angular.module('testtaskApp')
  .directive('banner', ['$resource', function ($resource) {
    return {
      templateUrl: 'views/banner.html',
      replace: true,
      restrict: 'EA',
      scope: {
          json: '@'
      },
      link: function postLink(scope) {
            //получает данные пустым гет запросом.
            $resource(scope.json).get(function(data){
                var info = data.data;

                info.map(extendData);
                scope.info = info;
                active(info[0]);

            });

            //простая функция екстенда объекта. Сразу инициализируем фолсом.
            function extendData(el){
                el.active = false;

                return el;
            }

            function active(el, state){
                //сбрасываем все элементы в неактивные.
                scope.info.map(extendData);

                el.active = state || true;

                scope.background = el.url;

            }

            scope.active = active;
      }
    };
  }]);
