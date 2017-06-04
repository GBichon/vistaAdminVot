var app = angular.module('myApp');


app.controller('vistaAdministradorCandidatosCtrl',function ($scope, servCandidatos, servPartidos) {


  $scope.candidatos=  servCandidatos.getCandidatos();
  $scope.partidos=  servPartidos.getPartidos();

  $scope.add=function () {
    var nuevoCandidato={
      "pdto_id": $scope.Modelpdto_id,
      "cdto_nombre":$scope.Modelcdto_nombre,
      "cdto_cuenta_twitter": $scope.Modelcdto_cuenta_twitter,
      "cdto_fecha_nacimiento": $scope.Modelcdto_fecha_nacimiento,
      "cdto_edad":$scope.Modelcdto_edad,
      "cdto_descripcion":$scope.Modelcdto_descripcion,
      "cdto_imagen": $scope.Modelcdto_imagen,
      "cdto_activo": $scope.Modelcdto_activo
    };

    //SE DEBE REEMPLAZAR LA LINEA 22 Y 33 POR EL COMENTARIO CUANDO ESTE LISTO EL SERVICIO
    servCandidatos.addCandidato(nuevoCandidato);
    $scope.Modelpdto_id='';
    $scope.candidatos.push(nuevoCandidato); //   $scope.candidatos=  servCandidatos.getCandidatos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
    $scope.Modelcdto_nombre='';
    $scope.Modelcdto_cuenta_twitter='';
    $scope.Modelcdto_fecha_nacimiento='';
    $scope.Modelcdto_edad='';
    $scope.Modelcdto_imagen='';
    $scope.Modelcdto_activo='';     
  };

  $scope.delete=function (index){
     console.log("DELETE");
      servCandidatos.deleteCandidato($scope.candidatos[index].usr_id);
      $scope.candidatos.splice(index,1); //   $scope.candidatos=  servCandidatos.getCandidatos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
  };

  $scope.actividad = [
    {nombre : "inactivo", id : "0"},
    {nombre : "activo", id: "1"}
    ]

});