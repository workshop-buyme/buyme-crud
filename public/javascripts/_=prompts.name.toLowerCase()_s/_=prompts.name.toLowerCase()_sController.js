app.controller("<%= prompts.name %>sCtrl", ["$scope", "<%= prompts.name %>s", function ($scope, <%= prompts.name %>s) {
  
  <%= prompts.name %>s.all().then(function (response) {
    $scope.<%= prompts.name.toLowerCase() %> = response;
  });

  $scope.selected<%= prompts.name %> = undefined;

  $scope.select<%= prompts.name %> = function (item) {
    $scope.selected<%= prompts.name %> =  item;
  };

}]);