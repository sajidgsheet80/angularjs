# Food Ordering System - AngularJS

A complete food ordering system built with AngularJS featuring menu browsing, cart management, checkout, and order tracking.

## Features

### 🍔 Menu Management
- Browse food items by category (Pizza, Burgers, Salads, Pasta, Sides, Desserts)
- Search functionality to find dishes quickly
- Dynamic category filtering
- Responsive grid layout

### 🛒 Shopping Cart
- Add items to cart with quantity management
- Update quantities or remove items
- Real-time cart total calculation
- Persistent cart badge showing item count

### 📝 Checkout Process
- Complete customer information form
- Form validation for all required fields
- Order summary before placing order
- Delivery fee calculation

### 📦 Order Tracking
- View all placed orders
- Real-time order status updates
- Detailed order information modal
- Visual status timeline (Pending → Confirmed → Preparing → Out for Delivery → Delivered)
- Automatic status progression (simulated)

## Technology Stack

- **AngularJS 1.8.2** - Frontend framework
- **Angular Route** - Client-side routing
- **Pure CSS3** - Styling with gradients and animations
- **Vanilla JavaScript** - No external dependencies

## Project Structure

```
food-ordering-system/
├── index.html              # Main HTML file
├── app.js                  # App configuration and routes
├── styles.css              # All CSS styles
├── controllers/
│   ├── headerController.js    # Header and cart badge
│   ├── menuController.js      # Menu display and filtering
│   ├── cartController.js      # Cart and checkout logic
│   └── ordersController.js    # Order history
├── services/
│   ├── menuService.js         # Menu data management
│   ├── cartService.js         # Cart operations
│   └── orderService.js        # Order management
└── views/
    ├── menu.html              # Menu page template
    ├── cart.html              # Cart and checkout template
    └── orders.html            # Orders page template
```

## Installation & Usage

1. **Clone or download** the project files

2. **Open the application**:
   - Simply open `index.html` in a web browser
   - OR use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **Access the application**:
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## How to Use

### Browsing Menu
1. Navigate to the home page (Menu)
2. Use category filters to browse by type
3. Use the search bar to find specific items
4. Click "Add to Cart" to add items

### Managing Cart
1. Click "Cart" in the navigation
2. Adjust quantities using the number input
3. Remove items with the × button
4. Click "Proceed to Checkout" when ready

### Placing Orders
1. Fill in all delivery information
2. Review your order summary
3. Click "Place Order"
4. You'll be redirected to the orders page

### Tracking Orders
1. Navigate to "My Orders"
2. View all your order history
3. Click "View Details" to see full order information
4. Watch the status timeline for updates (auto-updates every 10 seconds)

## Key Features Explained

### Services (Business Logic)

**MenuService**: Manages the food menu data with 10 different items across 6 categories.

**CartService**: 
- Add/remove items
- Update quantities
- Calculate totals
- Broadcast cart updates to header

**OrderService**:
- Place new orders
- Store order history
- Simulate order status progression
- Track delivery estimates

### Controllers

**MenuController**: Handles filtering, searching, and adding items to cart

**CartController**: Manages cart view, checkout form, and order placement

**OrdersController**: Displays order history and detailed order information

**HeaderController**: Updates cart badge count in real-time

### Routing

- `/` - Menu page (default)
- `/cart` - Shopping cart and checkout
- `/orders` - Order history

## Customization

### Adding New Menu Items

Edit `services/menuService.js`:

```javascript
{
    id: 11,
    name: 'Your Item Name',
    description: 'Item description',
    price: 9.99,
    category: 'Category',
    image: '🍕', // Emoji icon
    available: true
}
```

### Modifying Delivery Fee

Edit `views/cart.html` and search for `3.99` to change the delivery fee.

### Styling

All styles are in `styles.css`. Key sections:
- Colors: Search for `#667eea` (primary color)
- Fonts: Modify `font-family` in body selector
- Layout: Grid configurations in `.menu-grid` and `.cart-item`

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Features Demo

The application includes:
- ✅ Real-time cart updates
- ✅ Form validation
- ✅ Responsive design
- ✅ Animated transitions
- ✅ Status tracking
- ✅ Order simulation
- ✅ Modal dialogs
- ✅ Search and filter

## Future Enhancements

Potential additions:
- User authentication
- Payment integration
- Restaurant backend API
- Order cancellation
- Multiple addresses
- Favorites/Wishlist
- Reviews and ratings
- Real-time delivery tracking

## License

This project is open source and available for educational purposes.

## Credits

Built with ❤️ using AngularJS

---

Enjoy your food ordering experience! 🍕🍔🥗
