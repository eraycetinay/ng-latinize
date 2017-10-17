(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = factory(require('angular'));
  } else {
    return factory(root.angular);
  }
}(this, function (angular) {
  'use strict';
  var moduleName = 'ngLatinize';
  var mod = angular.module(moduleName, []); ;
  mod.directive('ngLatinize', function() {
    return {
      require: 'ngModel',
      scope:{
        capitalize: '='
      },
      link: function(scope, element, attrs, modelCtrl) {
        var latinizedvalue = function(inputValue) {
          if (inputValue == undefined) inputValue = '';
          var latinized = latinize(inputValue);
          if(scope.capitalize) {
            latinized = latinized.toUpperCase();
          }
          if (latinized !== inputValue) {
            modelCtrl.$setViewValue(latinized);
            modelCtrl.$render();
          }
          return latinized;
        }
        modelCtrl.$parsers.push(latinizedvalue);
        latinizedvalue(scope[attrs.ngModel]);
      } }
  });
  mod.filter('ngLatinize', function () {
      return function(input,capitalize) {
        var latinizedvalue = function(inputValue) {
          if (inputValue == undefined) inputValue = '';
          var latinized = latinize(inputValue);
          if(capitalize) {
            latinized = latinized.toUpperCase();
          } 
          return latinized;
        }
        return latinizedvalue(input);
      }
  });
  return moduleName;
}));
