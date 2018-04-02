(function (){
  'use strict';
  // browser-sync start --server --directory --files "**/*"

  var LunchCheckApp = angular.module("LunchCheck",[]);

  LunchCheckApp.$inject = ['$scope'];
  LunchCheckApp.controller("LunchCheckController", LunchCheckController);

  function LunchCheckController( $scope ){

    var defaultMsgClass = "form-group message";
    var errorMsgClass = "alert alert-danger";
    var succesErrorClass = "alert alert-success";

    $scope.dishes = "";
    $scope.countDishes = countDishes;
    $scope.message = "";
    $scope.messageClass = defaultMsgClass;

    // "alert alert-danger"
    // "alert alert-success"
    // "alert alert-warning"
    function countDishes(){

      let dishes = $scope.dishes.split(",");
      let numDishes = 0;

      for( let elem = 0; elem < dishes.length; elem++){
        if( dishes[elem].trim() !== "" ){
          numDishes++;
        }
      }

      setMessage(numDishes);
      setMessageClass(numDishes);
    }


    function setMessage( numDishes ){

      if ( numDishes === 0 ){
        $scope.message = "Please enter data first";
      }
      else if( numDishes <= 3 ){
        $scope.message = "Enjoy!";
      }
      else{
        $scope.message = "Too much!";
      }

    }

    function setMessageClass( numDishes ){

      if ( numDishes === 0 ){
        $scope.messageClass = defaultMsgClass + " " + errorMsgClass;
      }
      else if( numDishes <= 3 ){
        $scope.messageClass = defaultMsgClass + " " + succesErrorClass;
      }
      else{
        $scope.messageClass = defaultMsgClass + " " + succesErrorClass;
      }
    }

  }


})();
