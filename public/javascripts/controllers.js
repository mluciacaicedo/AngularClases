app.controller('BooksController', BooksController);
app.controller('PanelController', PanelController);
app.controller('ReviewController', ReviewController);

  BooksController.$inject = ['$scope'];
  function BooksController($scope){
      // $scope.book = book;
       $scope.books = books;
       $scope.init = function(){
       $scope.tab=1;
       }
  }

  PanelController.$injet = ['$scope'];
  function PanelController($scope){
    $scope.tab =1;
    $scope.selecTab = function(tab){
    $scope.tab= tab;
    };

    $scope.isSelected = function(tab){
      return $scope.tab == tab;
    };
    
  }

  ReviewController.$injet = ['$scope'];

   function ReviewController($scope){

     $scope.submit= function(){
       $scope.comentarios={
         estrellas: "",
         cuerpo:"",
         autor:""
         
       };
       //console.log("entra aca");
       $scope.book.comentarios.push($scope.model);
       $scope.model = {};

     };
      
  }
