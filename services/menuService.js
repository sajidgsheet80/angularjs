// Menu Service - Manages food menu data
app.service('MenuService', function() {
    var menuItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
            price: 12.99,
            category: 'Pizza',
            image: '🍕',
            available: true
        },
        {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'Loaded with pepperoni and mozzarella cheese',
            price: 14.99,
            category: 'Pizza',
            image: '🍕',
            available: true
        },
        {
            id: 3,
            name: 'Chicken Burger',
            description: 'Grilled chicken patty with lettuce, tomato, and special sauce',
            price: 9.99,
            category: 'Burgers',
            image: '🍔',
            available: true
        },
        {
            id: 4,
            name: 'Cheese Burger',
            description: 'Beef patty with cheddar cheese, onions, and pickles',
            price: 8.99,
            category: 'Burgers',
            image: '🍔',
            available: true
        },
        {
            id: 5,
            name: 'Caesar Salad',
            description: 'Fresh romaine lettuce with parmesan and croutons',
            price: 7.99,
            category: 'Salads',
            image: '🥗',
            available: true
        },
        {
            id: 6,
            name: 'Greek Salad',
            description: 'Mixed greens with feta cheese, olives, and cucumber',
            price: 8.99,
            category: 'Salads',
            image: '🥗',
            available: true
        },
        {
            id: 7,
            name: 'Pasta Carbonara',
            description: 'Creamy pasta with bacon, eggs, and parmesan',
            price: 11.99,
            category: 'Pasta',
            image: '🍝',
            available: true
        },
        {
            id: 8,
            name: 'Spaghetti Bolognese',
            description: 'Traditional meat sauce with spaghetti',
            price: 10.99,
            category: 'Pasta',
            image: '🍝',
            available: true
        },
        {
            id: 9,
            name: 'French Fries',
            description: 'Crispy golden fries with ketchup',
            price: 4.99,
            category: 'Sides',
            image: '🍟',
            available: true
        },
        {
            id: 10,
            name: 'Chocolate Cake',
            description: 'Rich chocolate cake with frosting',
            price: 6.99,
            category: 'Desserts',
            image: '🍰',
            available: true
        }
    ];

    this.getMenuItems = function() {
        return menuItems;
    };

    this.getCategories = function() {
        var categories = [];
        menuItems.forEach(function(item) {
            if (categories.indexOf(item.category) === -1) {
                categories.push(item.category);
            }
        });
        return categories;
    };

    this.getItemById = function(id) {
        return menuItems.find(function(item) {
            return item.id === id;
        });
    };
});
