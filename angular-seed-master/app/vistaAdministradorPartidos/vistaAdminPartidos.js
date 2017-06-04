var app = angular.module('myApp');


app.controller('vistaAdministradorPartidosCtrl',function ($scope, servPartidos) {


  $scope.partidos=  servPartidos.getPartidos();

  $scope.add=function () {

    console.log("ADD");
    var nuevoPartido={
      "pdto_nombre":$scope.Modelpdto_nombre,
      "pdto_id": $scope.Modelpdto_id,
      "pdto_logo": $scope.Modelpdto_logo,
      "pdto_Descripcion": $scope.Modelpdto_Descripcion,
    };

    

    console.log($scope.Modelpdto_nombre);
    //SE DEBE REEMPLAZAR LA LINEA 22 Y 33 POR EL COMENTARIO CUANDO ESTE LISTO EL SERVICIO
    servPartidos.addPartido(nuevoPartido);
    $scope.partidos.push(nuevoPartido); //   $scope.partidos=  servPartidos.getPartidos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
    $scope.Modelpdto_nombre='';
    $scope.Modelpdto_id='';
    $scope.Modelpdto_logo='';
    $scope.Modelpdto_Descripcion='';
  };

  $scope.delete=function (index){
     console.log("DELETE");
      servPartidos.deletePartido($scope.partidos[index].usr_id);
      $scope.partidos.splice(index,1); //   $scope.partidos=  servPartidos.getPartidos(); // COlOCAR ESTO CUANDO FUNQUE EL SERVICIO
  };

});