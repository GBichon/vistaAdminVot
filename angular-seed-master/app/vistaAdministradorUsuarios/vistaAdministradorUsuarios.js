
var app=angular.module('myApp');



app.controller('vistaAdministradorUsuariosCtrl',function ($scope, servUsuarios, servCandidatos) {


  $scope.candidatos=  servCandidatos.getCandidatos();
  $scope.usuarios = servUsuarios.getUsuarios();

  $scope.add=function () {

    console.log("ADD");
    
    var nuevoUsuario={
      "usrId":$scope.ModelusrId,
      "cdtoId": $scope.ModelcdtoId,
      "usrPrivilegio": $scope.ModelusrPrivilegio,
      "usrNombre": $scope.ModelusrNombre,
      "usrApellido":$scope.ModelusrApellido,
      "usrCorreo": $scope.ModelusrCorreo,
      "usrPassword":$scope.ModelusrPassword,
    };

    //PARA QUE FUNCIONE BORRA LO QUE ESTA EN LA LINEA 30 Y 45, Y REEMPLAZALO POR LOS COMENTARIOS.
    servUsuarios.addUsuario(nuevoUsuario);
    $scope.usuarios.push(nuevoUsuario); //   $scope.usuarios = servUsuarios.getUsuarios();
    
    $scope.ModelusrId='';
    $scope.ModelcdtoId='';
    $scope.ModelusrPrivilegio='';
    $scope.ModelusrNombre='';
    $scope.ModelusrApellido='';
    $scope.ModelusrCorreo='';
    $scope.ModelusrPassword='';

  };

  $scope.delete=function (index){
        console.log("DELETE");
        console.log($scope.usuarios[index].usrId);
      servUsuarios.deleteUsuario($scope.usuarios[index].usrId);
      $scope.usuarios.splice(index,1); //   $scope.usuarios = servUsuarios.getUsuarios();
  };

  $scope.privilegios = [
    {nombre : "usuario", id : 0},
    {nombre : "administrador", id: 1}
    ]
});

/**

**/