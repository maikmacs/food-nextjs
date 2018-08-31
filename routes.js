const routes = require('next-routes');

module.exports = routes()
  .add('index', '/', 'index')
  .add('login', '/login', 'login')
  .add('signup', '/signup', 'signup')
  .add('restaurants', '/restaurants', 'restaurants')
  .add('restaurant', '/restaurant/:id', 'restaurant')
  .add('CheckoutSuccess', '/checkout-success/:paymentId', 'CheckoutSuccess')
  .add('CheckoutError', '/checkout-error/:paymentId', 'CheckoutError');
