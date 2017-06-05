var app = angular.module('myApp');


app.controller('vistaAdministradorPartidosCtrl',function ($scope, servPartidos) {


  $scope.partidos=  servPartidos.getPartidos();

  $scope.add=function () {

    console.log("ADD");
    var nuevoPartido={
      "pdtoNombre":$scope.ModelpdtoNombre,
      "pdtoId": $scope.ModelpdtoId,
      "pdtoLogo": $scope.ModelpdtoLogo,
      "pdtoDescripcion": $scope.ModelpdtoDescripcion,
    };

    

    console.log($scope.Modelpdto_nombre);
    //SE DEBE REEMPLAZAR LA LINEA 22 Y 33 POR EL COMENTARIO CUANDO ESTE LISTO EL SERVICIO
    servPartidos.addPartido(nuevoPartido);
    $scope.partidos.push(nuevoPartido); //   $scope.partidos=  servPartidos.getPartidos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
    $scope.ModelpdtoNombre='';
    $scope.ModelpdtoId='';
    $scope.ModelpdtoLogo='';
    $scope.ModelpdtoDescripcion='';
  };

  $scope.delete=function (index){
     console.log("DELETE");
      servPartidos.deletePartido($scope.partidos[index].pdtoId);
      $scope.partidos.splice(index,1); //   $scope.partidos=  servPartidos.getPartidos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
  };

});