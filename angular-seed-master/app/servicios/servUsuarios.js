app.service('servUsuarios', function($http){
        var urlBase = null;


        var _debugUsuarios = [
		    {
		      "usrId": 1,
		      "cdtoId": 1,
		      "usrPrivilegio": "0",
		      "usrNombre": "jose",
		      "usrApellido": "quezada",
		      "usrCorreo": "jose.quezada@gmail.com",
		      "usrPassword": "soyjose",
		      "usrActivo": true,
		      "usrFechaRegistro": "2017-05-15 04:00:00"
		    },
		    {
		      "usrId": "2",
		      "cdtoId": "1",
		      "usrPrivilegio": "0",
		      "usrNombre": "maria",
		      "usrApellido": "alvarado",
		      "usrCorreo": "lageisha@gmail.com",
		      "usrPassword": "nocobrobarato",
		      "usrActivo": true,
		      "usrFechaRegistro": "2017-05-08 03:00:00"
		    },
		    {
		      "usrId": "3",
		      "cdtoId": "2",
		      "usrPrivilegio": "0",
		      "usrNombre": "jeronimo",
		      "usrApellido": "acosta",
		      "usrCorreo": "jeroacosta@gmail.com",
		      "usrPassword": "jerosito",
		      "usrActivo": true,
		      "usrFechaRegistro": "2017-05-23 04:00:00"
		    },
		    {
		      "usrId": "4",
		      "cdtoId": "2",
		      "usrPrivilegio": "0",
		      "usrNombre": "jasinto",
		      "usrApellido": "gatusso",
		      "usrCorreo": "jasintoelgato@gmail.com",
		      "usrPassword": "megustaelwhiskas",
		      "usrActivo": true,
		      "usrFechaRegistro": "2017-05-15 04:00:00"
		    },
		    {
		      "usrId": "5",
		      "cdtoId": "2",
		      "usrPrivilegio": "0",
		      "usrNombre": "angela",
		      "usrApellido": "colombia",
		      "usrCorreo": "sisicolombia@gmail.com",
		      "usrPassword": "jamesrodriguez",
		      "usrActivo": true,
		      "usrFechaRegistro": "2017-05-23 04:00:00"
		    }
		  ];

        this.getUsuarios = function(){
        	if (urlBase)
            	return $http.get(urlBase);
            else
            	return getDebugUsuarios();
        };

        this.addUsuario = function(usuario){
        	if (urlBase)
            	return $http.post(urlBase, usuario);

        }

        this.deleteUsuario = function(id){
        	console.log("Delete usuario: " + id);
        	if (urlBase)
        		return $http.post(urlBase)
        }

        function getDebugUsuarios(){
			return angular.copy(_debugUsuarios);
        }

});
