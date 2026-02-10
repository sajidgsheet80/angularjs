// Cart Service - Manages shopping cart operations
app.service('CartService', ['$rootScope', function($rootScope) {
    var cart = [];

    this.addToCart = function(item) {
        var existingItem = cart.find(function(cartItem) {
            return cartItem.id === item.id;
        });

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            });
        }
        
        this.updateCartCount();
    };

    this.removeFromCart = function(itemId) {
        cart = cart.filter(function(item) {
            return item.id !== itemId;
        });
        this.updateCartCount();
    };

    this.updateQuantity = function(itemId, quantity) {
        var item = cart.find(function(cartItem) {
            return cartItem.id === itemId;
        });

        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                item.quantity = quantity;
            }
        }
        this.updateCartCount();
    };

    this.getCart = function() {
        return cart;
    };

    this.getTotal = function() {
        return cart.reduce(function(total, item) {
            return total + (item.price * item.quantity);
        }, 0);
    };

    this.getCartCount = function() {
        return cart.reduce(function(count, item) {
            return count + item.quantity;
        }, 0);
    };

    this.clearCart = function() {
        cart = [];
        this.updateCartCount();
    };

    this.updateCartCount = function() {
        $rootScope.$broadcast('cartUpdated', this.getCartCount());
    };
}]);
