app.service('servPartidos', function($http){
        var urlBase = null; //ACA VA LA URL PARA CONECTARLO AL BACKEND


        var _debugPartidos = [
    {
      "pdtoId": 1,
      "pdtoNombre": "Evopoli",
      "pdtoLogo": "https://pbs.twimg.com/profile_images/818478460934955009/qsNXmwAu.jpg",
      "pdtoDescripcion": "Evolucion politica"
    },
    {
      "pdtoId": 2,
      "pdtoNombre": "Independiente",
      "pdtoLogo": "http://www.contactox.net/images/big/20150529/2803445.jpg",
      "pdtoDescripcion": "Independiente"
    },
    {
      "pdtoId": 3,
      "pdtoNombre": "RN",
      "pdtoLogo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdtoDescripcion": "Renovacion Nacional"
    },
    {
      "pdtoId": 4,
      "pdtoNombre": "FR",
      "pdtoLogo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdtoDescripcion": "Frente Amplio"
    },
    {
      "pdtoId": 5,
      "pdtoNombre": "PS",
      "pdtoLogo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdtoDescripcion": "Partido Socialista"
    },
        {
      "pdtoId": 6,
      "pdtoNombre": "PDC",
      "pdtoLogo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdtoDescripcion": "Partido Democrata Cristiano"
    }
  ];




        this.getPartidos = function(){
        	if (urlBase)
            	return $http.get(urlBase);
            else
            	return getDebugPartidos();
        };

        this.addPartido = function(Partido){
        	if (urlBase)
            	return $http.post(urlBase, Partido);

        }

        this.deletePartido = function(id){
        	console.log("Delete Partido: " + id);
        	if (urlBase)
        		return $http.post(urlBase)
        }

        function getDebugPartidos(){
			return angular.copy(_debugPartidos);
        }

});
