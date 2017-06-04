app.service('servPartidos', function($http){
        var urlBase = null; //ACA VA LA URL PARA CONECTARLO AL BACKEND


        var _debugPartidos = [
    {
      "pdto_id": "1",
      "pdto_nombre": "Evopoli",
      "pdto_logo": "https://pbs.twimg.com/profile_images/818478460934955009/qsNXmwAu.jpg",
      "pdto_Descripcion": "Evolucion politica"
    },
    {
      "pdto_id": "2",
      "pdto_nombre": "Independiente",
      "pdto_logo": "http://www.contactox.net/images/big/20150529/2803445.jpg",
      "pdto_Descripcion": "Independiente"
    },
    {
      "pdto_id": "3",
      "pdto_nombre": "RN",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Renovacion Nacional"
    },
    {
      "pdto_id": "4",
      "pdto_nombre": "FR",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Frente Amplio"
    },
    {
      "pdto_id": "5",
      "pdto_nombre": "PS",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Partido Socialista"
    },
        {
      "pdto_id": "6",
      "pdto_nombre": "PDC",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Partido Democrata Cristiano"
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
