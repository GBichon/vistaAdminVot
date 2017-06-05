var app = angular.module('myApp');


app.controller('vistaAdministradorCandidatosCtrl',function ($scope, servCandidatos, servPartidos) {


  $scope.candidatos=  servCandidatos.getCandidatos();
  $scope.partidos=  servPartidos.getPartidos();

  $scope.add=function () {

    console.log("ADD Que sucede");
    var nuevoCandidato={
      "pdtoId": $scope.ModelpdtoId,
      "cdtoNombre":$scope.ModelcdtoNombre,
      "cdtoCuentaTwitter": $scope.ModelcdtoCuentaTwitter,
      "cdtoFechaNacimiento": $scope.ModelcdtoFechaNacimiento,
      "cdtoEdad":$scope.ModelcdtoEdad,
      "cdtoDescripcion":$scope.ModelcdtoDescripcion,
      "cdtoImagen": $scope.ModelcdtoImagen,
      "cdtoActivo": $scope.ModelcdtoActivo
    };

    //SE DEBE REEMPLAZAR LA LINEA 22 Y 33 POR EL COMENTARIO CUANDO ESTE LISTO EL SERVICIO
    servCandidatos.addCandidato(nuevoCandidato);
    $scope.ModelpdtoId='';
    $scope.candidatos.push(nuevoCandidato); //   $scope.candidatos=  servCandidatos.getCandidatos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
    $scope.ModelcdtoNombre='';
    $scope.ModelcdtoCuentaTwitter='';
    $scope.ModelcdtoFechaNacimiento='';
    $scope.ModelcdtoEdad='';
    $scope.ModelcdtoImagen='';
    $scope.ModelcdtoActivo='';     
  };

  $scope.delete=function (index){
     console.log("DELETE");
      servCandidatos.deleteCandidato($scope.candidatos[index].cdtoId);
      $scope.candidatos.splice(index,1); //   $scope.candidatos=  servCandidatos.getCandidatos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
  };

  $scope.actividad = [
    {nombre : "inactivo", id : 0},
    {nombre : "activo", id: 1}
    ]

});