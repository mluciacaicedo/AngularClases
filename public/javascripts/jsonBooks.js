  
var book = {
          "year": "1967",
          "name": "Cien Años de Soledad",
          "autor": "Gabriel Garcia Marquez",
          "precio": 5,
          "descripcion":"Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982.",
          "canPurchase": true, // el boton solo se muestra si es true este atributo
          "agotado":false,
          "images": 'images/cien.jpg',

  };
  
 var books = [
     {
          "year": "1965",
          "name": "Las aventuras de Alicia en el país de las maravillas",
          "autor": "Lewis Carroll",
          "precio": 5, 
          "descripcion":"En esta obra aparecen algunos de los personajes más famosos de Lewis Carroll, como el Conejo Blanco, la Liebre de Marzo, el Sombrerero, la Oruga azul, el Gato de Cheshire o la Reina de Corazones;1 quienes han cobrado importancia suficiente para ser reconocidos fuera del mundo de Alicia.",
          "canPurchase": true, 
          "agotado":false,
          "images": 'images/alicia.jpg',
          "comentarios":[
              {
                  "estrellas": 5,
                  "cuerpo":"Buen Libro",
                  "autor":"Juan"
              },
              {
                  "estrellas": 4,
                  "cuerpo":"Regular Libro",
                  "autor":"martha"
              },
          ]
     },
     {
          "year": "1605",
          "name": "El ingenioso hidalgo don Quijote de la Mancha ",
          "autor": "Miguel de Cervantes Saavedra",
          "precio": 25,
          "descripcion":"Es la primera obra genuinamente desmitificadora de la tradición caballeresca y cortés por su tratamiento burlesco. Representa la primera novela moderna y la primera polifónica; como tal, ejerció un enorme influjo en toda la narrativa europea.",
          "canPurchase": true, 
          "agotado":false,
          "images": 'images/quijote.jpg',
          "comentarios":[
              {
                  "estrellas": 5,
                  "cuerpo":"Buen Libro",
                  "autor":"Juan"
              },
              {
                  "estrellas": 4,
                  "cuerpo":"Regular Libro",
                  "autor":"martha"
              },
          ]
     },
     {
          "year": "2008",
          "name": "Crepúsculo",
          "autor": "Stephenie Meyer",
          "precio": 55,
          "descripcion":"Narra la historia de Bella desde el momento que decidió mudarse al pequeño pueblo de Forks en el estado de Washington; ahì conoce al misterioso Edward Cullen, hijo del doctor Carlise Cullen y Esme Cullen, (familia vampira), Bella atraida por el misticismo de la vida del chico y por su incontrolable necesidad de estar con él, se enamora perdidamente de Edward.",
          "canPurchase": true, 
          "agotado":false,
          "images": 'images/crepusculo.jpg',
          "comentarios":[
              {
                  "estrellas": 5,
                  "cuerpo":"Buen Libro",
                  "autor":"Juan"
              },
              {
                  "estrellas": 4,
                  "cuerpo":"Regular Libro",
                  "autor":"martha"
              },
          ]
     },
     {
          "year": "1967",
          "name": "Cien Años de Soledad",
          "autor": "Gabriel Garcia Marquez",
          "precio": 28,
          "descripcion":"Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982.",
          "canPurchase": true,
          "agotado":false,
          "images": 'images/cien.jpg',
          "comentarios":[
              {
                  "estrellas": 5,
                  "cuerpo":"Buen Libro",
                  "autor":"Juan"
              },
              {
                  "estrellas": 4,
                  "cuerpo":"Regular Libro",
                  "autor":"martha"
              },
          ]
     },
     {
          "year": "1951",
          "name": "El viejo y el mar",
          "autor": "Ernest Hemingway",
          "precio": 100,
          "descripcion":"La obra se desarrolla en La Habana -Cuba, cuyo protagonista es Santiago, aunque todo el mundo lo llama El viejo. Santiago es un pescador de avanzada edad, que lleva 84 días sin conseguir pesca alguna.",
          "canPurchase": true, 
          "agotado":false,
         "images": 'images/elViejo.jpg',
         "comentarios":[
              {
                  "estrellas": 5,
                  "cuerpo":"Buen Libro",
                  "autor":"Juan"
              },
              {
                  "estrellas": 4,
                  "cuerpo":"Regular Libro",
                  "autor":"martha"
              },
          ]
     }

  ];