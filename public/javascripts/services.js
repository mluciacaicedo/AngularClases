app.factory("PlaylistFactory", [function () {
    var playlist = [
        "Maps",
        "Animals",
        "Lost Stars",
        "Sugar",
        "Leaving California",
        "In Your Pocket",
        "New Love",
    ];
    var listar = function () {
        return playlist;
    };

    var borrar = function (id) {
        playlist.splice(id, 1);
    };
    var agregar = function (cancion) {
        if (playlist.indexOf(cancion) == -1) {
            playlist.push(cancion);
        } else {
            alert("se encuentra");
        }
    };

    return {
        listar: listar,
        borrar: borrar,
        agregar: agregar
    };


}]);


app.service("PlaylistService", [function () {
    var playlist = [
        "Maps",
        "Animals",
        "Lost Stars",
        "Sugar",
        "Leaving California",
        "In Your Pocket",
        "New Love",
    ];
     this.listar = function () {
        return playlist;
    };

     this.borrar = function (id) {
        playlist.splice(id, 1);
    };


}]);



app.provider("Playlist", [function () {
    var playlist = [
        "Maps",
        "Animals",
        "Lost Stars",
        "Sugar"
        
    ];
    var listar = function () {
        return playlist;
    };

    var borrar = function (id) {
        playlist.splice(id, 1);
    };

     var concatenar = function (data) {
        playlist = playlist.concat(data);
    };
   
    return {
     concatenar : concatenar,
        $get: function (){
            return {
                listar: listar,
                borrar: borrar
            };
        }
    }
}]);

// app.provider("Playlist", [function () {   
//      var playlist = [     
//             "If I Ever Lose My Faith In You",      
//             "Love Is Stronger Than Justice",    
//             "Fields Of Gold",       
//             "Heavy Cloud No Rain",    
//             "She's Too Good For Me"  
//          ];    
//     var listar = function () {        
//              return playlist;    
//             };   
            
//      var borrar = function (id) {      
//                 playlist.splice(id, 1);   
//              }; 
//     var concatenar = function (data) {    
//             playlist = playlist.concat(data); 
//            };   
//      return {  
//            concatenar: concatenar,     
//            $get: function(){  
//                return {     
//                       listar: listar,  
//                       borrar: borrar   
//                        };    
                    
//                 }    
//      };}]);