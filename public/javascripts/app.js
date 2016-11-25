var app = angular.module('AngularApp', ['ngMessages']);

  app.filter('customFilter',function(){
    var reemplazaLetras = function(datosOriginales,arg){
      return datosOriginales.replace(RegExp("o","g"),"_");

    }
    return reemplazaLetras;

  });
  angular.module('tabsDemoDynamicHeight', ['ngMaterial']);
  

 // app.controller('BooksController', function($scope){
   //   $scope.book = book;
     // $scope.msg = "Este Campo es Obligatorio";
      
  //});