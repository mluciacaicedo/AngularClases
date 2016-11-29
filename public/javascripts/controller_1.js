app.controller('PlaylistController', PlaylistController);
app.controller('PlaylistUpdateController', PlaylistUpdateController);
app.controller('PlaylistAddController', PlaylistAddController);
app.controller('PromesaController', PromesaController);


PlaylistController.$inject = ['$scope', 'PlaylistFactory','PlaylistService','Playlist'];
function PlaylistController($scope, PlaylistFactory,PlaylistService,Playlist) {
    $scope.playlist = Playlist.listar();

}

PlaylistUpdateController.$inject = ['$scope', 'PlaylistFactory','PlaylistService'];
function PlaylistUpdateController($scope, PlaylistFactory,PlaylistService,Playlist) {
    $scope.playlist = PlaylistFactory.listar();
    $scope.borrar = function (id) {
        PlaylistFactory.borrar(id);
    };

}

PlaylistAddController.$inject = ['$scope', 'PlaylistFactory','PlaylistService'];
function PlaylistAddController($scope, PlaylistFactory,PlaylistService,Playlist) {
    $scope.agregar = function () {
        var cancion= $scope.addcancion;
        PlaylistFactory.agregar(cancion);
        $scope.playlist = PlaylistFactory.listar();
        
    };

}

PromesaController.$inject = ['$scope','$q'];

function PromesaController($scope,$q){
    $scope.server="Verificando...";
    $scope.http="Verificando...";
    var checkServer = function(){
        var def = $q.defer();
        setTimeout(function(){
        def.resolve('Online');
        console.log("Online");
        $scope.test="Online";
        },2000);
        return def.promise;
      
};


    var checkHttp = function(){
        var def = $q.defer();
        setTimeout(function(){
            if(Math.floor(Math.random()* 100)>50){
                def.resolve('Online')

            }else{
                def.reject('El servicio no esta Disponible');
            }
        },3000);
        return def.promise;
      
};
checkServer().then(function(result){
    $scope.server = result;
});

checkHttp().then(function(result){

    $scope.http = result;

},function(error){

    $scope.http = error;

    
});
}