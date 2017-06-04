
var app=angular.module('myApp');



app.controller('vistaAdministradorUsuariosCtrl',function ($scope, servUsuarios, servCandidatos) {


  $scope.candidatos=  servCandidatos.getCandidatos();
  $scope.usuarios = servUsuarios.getUsuarios();

  $scope.add=function () {

    console.log("ADD");
    
    var nuevoUsuario={
      "usr_id":$scope.Modelusr_id,
      "cdto_id": $scope.Modelcdto_id,
      "usr_privilegio": $scope.Modelusr_privilegio,
      "usr_nombre": $scope.Modelusr_nombre,
      "usr_apellido":$scope.Modelusr_apellido,
      "usr_correo": $scope.Modelusr_correo,
      "usr_password":$scope.Modelusr_password,
    };

    //PARA QUE FUNCIONE BORRA LO QUE ESTA EN LA LINEA 30 Y 45, Y REEMPLAZALO POR LOS COMENTARIOS.
    servUsuarios.addUsuario(nuevoUsuario);
    $scope.usuarios.push(nuevoUsuario); //   $scope.usuarios = servUsuarios.getUsuarios();
    
    $scope.Modelusr_id='';
    $scope.Modelcdto_id='';
    $scope.Modelusr_privilegio='';
    $scope.Modelusr_nombre='';
    $scope.Modelusr_apellido='';
    $scope.Modelusr_correo='';
    $scope.Modelusr_password='';

  };

  $scope.delete=function (index){
        console.log("DELETE");
      servUsuarios.deleteUsuario($scope.usuarios[index].usr_id);
      $scope.usuarios.splice(index,1); //   $scope.usuarios = servUsuarios.getUsuarios();
  };

  $scope.privilegios = [
    {nombre : "usuario", id : "0"},
    {nombre : "administrador", id: "1"}
    ]
});

/**

**/