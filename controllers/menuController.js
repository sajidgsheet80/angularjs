// Menu Controller - Handles menu display and item selection
app.controller('MenuController', ['$scope', 'MenuService', 'CartService', function($scope, MenuService, CartService) {
    $scope.menuItems = MenuService.getMenuItems();
    $scope.categories = MenuService.getCategories();
    $scope.selectedCategory = 'All';
    $scope.searchQuery = '';
    $scope.addedItems = {};

    // Filter items by category
    $scope.filterByCategory = function(category) {
        $scope.selectedCategory = category;
    };

    // Custom filter function
    $scope.itemFilter = function(item) {
        var categoryMatch = $scope.selectedCategory === 'All' || item.category === $scope.selectedCategory;
        var searchMatch = !$scope.searchQuery || 
                         item.name.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) !== -1 ||
                         item.description.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) !== -1;
        return categoryMatch && searchMatch;
    };

    // Add item to cart
    $scope.addToCart = function(item) {
        CartService.addToCart(item);
        
        // Show feedback animation
        $scope.addedItems[item.id] = true;
        setTimeout(function() {
            $scope.$apply(function() {
                $scope.addedItems[item.id] = false;
            });
        }, 1000);
    };

    // Get filtered items count
    $scope.getFilteredCount = function() {
        return $scope.menuItems.filter($scope.itemFilter).length;
    };
}]);
