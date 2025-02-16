var app = angular.module('suApp', ['ngCookies', 'ui.toggle']);
app.controller('suCtrl', function ($scope, $cookies) {

    $scope.nomeUsuario = "";
    $scope.cargoUsuario = "";
    $scope.matrUsuario = "";
    $scope.orgaoUsuario = "";
    $scope.acordoInternacional = false;

    //Gravar Dados em Cookie
    $scope.gravarDados = function () {
        let dataExpiracao = new Date();
        dataExpiracao.setTime(2144232732000);
        $cookies.put("nomeusuario", $scope.nomeUsuario, { 'expires': dataExpiracao });
        $cookies.put("cargousuario", $scope.cargoUsuario, { 'expires': dataExpiracao });
        $cookies.put("matrusuario", $scope.matrUsuario, { 'expires': dataExpiracao });
        $cookies.put("orgaousuario", $scope.orgaoUsuario, { 'expires': dataExpiracao });
        $cookies.put("acordoInternacional", $scope.acordoInternacional, { 'expires': dataExpiracao });
        alert("Dados do Usuário gravados!");
    };

    //Apagar Dados do Cookie
    $scope.limparDados = function () {
        if (confirm("Confirma a exclusão de todos os dados de Usuário?")) {
            $cookies.remove("nomeusuario");
            $cookies.remove("cargousuario");
            $cookies.remove("matrusuario");
            $cookies.remove("orgaousuario");
            $cookies.remove("acordoInternacional");
            alert("Dados de Usuário excluídos!");
            $scope.buscarDados();
        };
    };

    //Carregar Dados do Cookie
    $scope.buscarDados = function () {
        $scope.nomeUsuario = $cookies.get("nomeusuario");
        $scope.cargoUsuario = $cookies.get("cargousuario");
        $scope.matrUsuario = $cookies.get("matrusuario");
        $scope.orgaoUsuario = $cookies.get("orgaousuario");
        $scope.acordoInternacional = ($cookies.get("acordoInternacional") === 'true'); //Cookie retorna string, essa é uma forma de converter para Boolean
    };   

    $scope.buscarDados();
});