function fetchMenus() {
  // Stub: Phase 3 will fetch from API Gateway /menus
  document.getElementById('menu-list').innerHTML = '<p>Sample Menu: Pizza $10, Burger $8</p><img src="sample-food.jpg" alt="Food">'; // Placeholder image
}

function placeOrder() {
  alert('Order submitted!'); // Stub for Phase 3 Lambda invoke
}

function fetchOrders() {
  // Stub: Phase 3 /orders
  document.getElementById('order-list').innerHTML = '<p>Order #1: Pizza - Pending <select><option>Pending</option><option>Ready</option></select></p>';
}

function updateStatus() {
  alert('Status updated!'); // Stub for Phase 3
}