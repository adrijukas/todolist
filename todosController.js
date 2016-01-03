// Code goes here
(function() {

  var controller = function($scope) {

    $scope.todos = [{
      text: "learn AngularJS",
      done: false
    }, {
      text: "add save functionality",
      done: false
    }, {
      text: "add remove functionality",
      done: true
    }, {
      text: "find desktop editor",
      done: false
    }, {
      text: "learn about dependencies",
      done: false
    }];

    $scope.addTodo = function() {
      if ($scope.newTodo) {
        $scope.todos.push({
          text: $scope.newTodo,
          done: false
        });
        $scope.newTodo = null;
      }
    };

    $scope.removeDone = function() {
      removeItems(0);
      
      // could use underscore framework instead and call _.filter function
      // which takes in the array and a filtering function
      // ._filter processes that array and filters out the elements that are done
      // $scope.todos = _.filter($scope.todos, isStillTodo);
    };

    var removeItems = function(startingIndex) {
      for (i = startingIndex; i < $scope.todos.length; i++) {
        var todo = $scope.todos[i];
        if (todo.done) {
          // remove the done element at the specified index
          $scope.todos.splice(i, 1);
          removeItems(i);
        }
      }
    };

    var isStillTodo = function(todo) {
      return (!todo.done);
    };

  };

  var app = angular.module("myApp");
  app.controller("todosController", controller);

}());