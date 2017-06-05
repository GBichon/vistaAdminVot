app.service('servCandidatos', function($http){
        var urlBase = null; //ACA VA LA URL PARA CONECTARLO AL BACKEND


        var _debugCandidatos = [
    {
      "cdtoId": 1,
      "pdtoId": 1,
      "cdtoNombre": "Felipe Kast",
      "cdtoCuentaTwitter": "@felipekast",
      "cdtoFechaNacimiento": "09/06/1977",
      "cdtoEdad": "39",
      "cdtoImagen": "http://vignette4.wikia.nocookie.net/althistory/images/b/b0/Felipe_Kast.jpg/revision/latest?cb=20150402072336&path-prefix=es",
      "cdtoActivo": true
    },
    {
      "cdtoId": 2,
      "pdtoId": 2,
      "cdtoNombre": "Jose Ossandon",
      "cdtoCuentaTwitter": "@mjossandon",
      "cdtoFechaNacimiento": "24/08/1962",
      "cdtoEdad": "54",
      "cdtoImagen": "http://www.nuevopoder.cl/nuevo_sitio/wp-content/uploads/2016/06/Ossandon-Manuel-Jose-La-Naci%C3%B3n.jpg",
      "cdtoActivo": true
    },
    {
      "cdtoId": 3,
      "pdtoId": 3,
      "cdtoNombre": "Sebastian Piñera",
      "cdtoCuentaTwitter": "@sebastinapinera",
      "cdtoFechaNacimiento": "01/12/1949",
      "cdtoEdad": "67",
      "cdtoImagen": "https://upload.wikimedia.org/wikipedia/commons/4/49/Sebastian_Pinera.JPG",
      "cdtoActivo": true
    },
    {
      "cdtoId": 4,
      "pdtoId": 4,
      "cdtoNombre": "Beatriz Sanchez",
      "cdtoCuentaTwitter": "@labeasanchez",
      "cdtoFechaNacimiento": "24/12/1970",
      "cdtoEdad": "46",
      "cdtoImagen": "http://www.diarioantofagasta.cl/wp-content/uploads/2017/04/beatrizsanchez.jpg",
      "cdtoActivo": true
    },
    {
      "cdtoId": 5,
      "pdtoId": 5,
      "cdtoNombre": "Alejandro Guiller",
      "cdtoCuentaTwitter": "@aleguiller",
      "cdtoFechaNacimiento": "05/03/1953",
      "cdtoEdad": "64",
      "cdtoImagen": "http://radio.uchile.cl/wp-content/uploads/2016/08/alejandro-guillier.jpg",
      "cdtoActivo": true
    },
    {
      "cdtoId": 6,
      "pdtoId": 6,
      "cdtoNombre": "Carolina Goinc",
      "cdtoCuentaTwitter": "@carolinagoic",
      "cdtoFechaNacimiento": "20/12/1972",
      "cdtoEdad": "44",
      "cdtoImagen": "http://3.bp.blogspot.com/-AyVS1TWSll4/Tl7D4cBjMxI/AAAAAAAAHEc/wp8WJXyIcow/s1600/DSC_4182_ok.jpg",
      "cdtoActivo": true
    }
  ];




        this.getCandidatos = function(){
        	if (urlBase)
            	return $http.get(urlBase);
            else
            	return getDebugCandidatos();
        };

        this.addCandidato = function(Candidato){
        	if (urlBase)
            	return $http.post(urlBase, Candidato);

        }

        this.deleteCandidato = function(id){
        	console.log("Delete Candidato: " + id);
        	if (urlBase)
        		return $http.post(urlBase)
        }

        function getDebugCandidatos(){
			return angular.copy(_debugCandidatos);
        }

});
