var app = angular.module('myApp');


app.controller('vistaPrincipalCtrl',function ($scope, servCandidatos) {

  console.log("Entre a la vista principal");

  $scope.candidatos=  servCandidatos.getCandidatos();

  $scope.add=function () {
  	var nuevoCandidato={
  	  "cdto_nombre":$scope.Modelcdto_nombre,
      "pdto_id": $scope.Modelpdto_id,
      "cdto_cuenta_twitter": $scope.Modelcdto_cuenta_twitter,
      "cdto_fecha_nacimiento": $scope.Modelcdto_fecha_nacimiento,
      "cdto_edad":$scope.Modelcdto_edad,
      "cdto_imagen": $scope.Modelcdto_imagen
  	};

  	//SE DEBE REEMPLAZAR LA LINEA 22 Y 33 POR EL COMENTARIO CUANDO ESTE LISTO EL SERVICIO
  	servCandidatos.addCandidato(nuevoCandidato);
  	$scope.candidatos.push(nuevoCandidato); //   $scope.candidatos=  servCandidatos.getCandidatos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
  	$scope.Modelcdto_nombre='';
  	$scope.Modelpdto_id='';
  	$scope.Modelcdto_cuenta_twitter='';
  	$scope.Modelcdto_fecha_nacimiento='';
  	$scope.Modelcdto_edad='';
  	$scope.Modelcdto_imagen='';
  };

  $scope.delete=function ($index){
      servUsuarios.deleteUsuario($scope.candidatos[index].usr_id);
      $scope.candidatos.splice(index,1); //   $scope.candidatos=  servCandidatos.getCandidatos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
  };

});