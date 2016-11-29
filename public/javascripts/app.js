var app = angular.module('AngularApp', ['ngMessages']);

app.config(['PlaylistProvider', function(PlaylistProvider){

 var playlist2=[
       "Leaving California",
       "In Your Pocket",
        "New Love",

 ];
 PlaylistProvider.concatenar(playlist2);}]);
 
// app.config(['PlaylistProvider', function (PlaylistProvider) {    
//   var playlist2 = [       
//      "Seven Days",      
//      "Saint Augustine In Hell",     
//      "It's Probably Me",        
//      "Shape Of My Heart",       
//       "Something The Boy Said",       
//        "Epilogue (Nothing 'Bout Me)", 
//           ];    
//           PlaylistProvider.concatenar(playlist2);}]);






  app.filter('customFilter',function(){
    var reemplazaLetras = function(datosOriginales,arg){
      return datosOriginales.replace(RegExp("o","g"),"_");

    }
    return reemplazaLetras;

  });
  angular.module('tabsDemoDynamicHeight', ['ngMaterial']);
  
  app.directive("bookTitle", function(){
    return{
        restrict: 'A',
        templateUrl: 'views/book-title.html'
    };
});

app.directive("bookPanel", function(){
    return{
        restrict: 'E',
        templateUrl: 'views/book-panel.html'
    };
});

 // app.controller('BooksController', function($scope){
   //   $scope.book = book;
     // $scope.msg = "Este Campo es Obligatorio";
      
  //});