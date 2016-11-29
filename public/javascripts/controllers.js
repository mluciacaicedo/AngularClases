app.controller('BooksController', BooksController);
app.controller('PanelController', PanelController);
app.controller('ReviewController', ReviewController);
app.controller('RegisterController', RegisterController);

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
RegisterController.$inject = ['$scope', '$window', '$location'];
function RegisterController($scope, $window, $location) {
    $scope.model = {};
    $scope.model.password = "";
    $scope.flag = false;

    $scope.$watch('model.confirm_password', function (newValue, oldValue) {        
        if (newValue === $scope.model.password && newValue.length > 0 && $scope.model.password.length > 0){
            $scope.flag = true;            
        }else{
            $scope.flag = false;
        }
    });
    $scope.submit = function(){
        console.log("entra");
        $window.open("/", "_self");
        //$location.path('/someNewPath')
        //$location.href = "/";
    };
}