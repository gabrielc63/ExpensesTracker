// import "./scss/main.scss";
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
// import "./controllers";
import "bootstrap";
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js', { scope: './' })
                           .then(function(registration) {
                             console.log('[Companion]', 'Service worker registered!')
                             console.log(registration)
                           })
  }