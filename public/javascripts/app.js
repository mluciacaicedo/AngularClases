var app = angular.module('AngularApp', []);

  app.filter('customFilter',function(){
    var reemplazaLetras = function(datosOriginales,arg){
      return datosOriginales.replace(RegExp("o","g"),"_");

    }
    return reemplazaLetras;

  });
  

 // app.controller('BooksController', function($scope){
   //   $scope.book = book;
     // $scope.msg = "Este Campo es Obligatorio";
      
  //});