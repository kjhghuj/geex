/**
 * GEEX Theme - Main JavaScript
 * Handles cart functionality, mobile menu, and other interactive features
 */

class GEEXTheme {
  constructor() {
    this.cart = [];
    this.cartCount = 0;
    this.isCartOpen = false;
    this.isMobileMenuOpen = false;

    this.init();
  }

  init() {
    this.initCart();
    this.initMobileMenu();
    this.initProductForms();
    this.initSearch();
    this.initScrollEffects();
    this.initLazyLoading();
  }

  // Cart functionality
  initCart() {
    this.updateCartUI();
    this.setupCartEvents();

    // Listen for cart drawer toggle
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-cart-toggle]') || e.target.closest('[data-cart-toggle]')) {
        e.preventDefault();
        this.toggleCartDrawer();
      }
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isCartOpen &&
          !e.target.closest('.cart-drawer') &&
          !e.target.closest('[data-cart-toggle]')) {
        this.closeCartDrawer();
      }
    });
  }

  async addToCart(variantId, quantity = 1, properties = {}) {
    try {
      this.showCartLoading();

      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
          properties: properties
        })
      });

      const data = await response.json();

      if (response.ok) {
        this.showAddedToCartNotification();
        await this.updateCart();
        this.openCartDrawer();
      } else {
        this.showCartError(data.message || 'Error adding item to cart');
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      this.showCartError('Unable to add item to cart');
    } finally {
      this.hideCartLoading();
    }
  }

  async updateCart() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();

      this.cart = cart.items;
      this.cartCount = cart.item_count;
      this.updateCartUI();
    } catch (error) {
      console.error('Update cart error:', error);
    }
  }

  async updateCartItem(key, quantity) {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          id: key,
          quantity: quantity
        })
      });

      if (response.ok) {
        await this.updateCart();
      }
    } catch (error) {
      console.error('Update cart item error:', error);
    }
  }

  async removeFromCart(key) {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          id: key,
          quantity: 0
        })
      });

      if (response.ok) {
        await this.updateCart();
      }
    } catch (error) {
      console.error('Remove from cart error:', error);
    }
  }

  updateCartUI() {
    // Update cart count in navigation
    const cartCountElements = document.querySelectorAll('[data-cart-count]');
    cartCountElements.forEach(element => {
      element.textContent = this.cartCount;
      element.style.display = this.cartCount > 0 ? 'flex' : 'none';
    });

    // Update cart drawer
    const cartDrawerContent = document.querySelector('[data-cart-drawer-content]');
    if (cartDrawerContent) {
      if (this.cart.length === 0) {
        cartDrawerContent.innerHTML = this.getEmptyCartHTML();
      } else {
        cartDrawerContent.innerHTML = this.getCartHTML();
      }
    }
  }

  toggleCartDrawer() {
    if (this.isCartOpen) {
      this.closeCartDrawer();
    } else {
      this.openCartDrawer();
    }
  }

  openCartDrawer() {
    const cartDrawer = document.querySelector('.cart-drawer');
    if (cartDrawer) {
      cartDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      this.isCartOpen = true;
    }
  }

  closeCartDrawer() {
    const cartDrawer = document.querySelector('.cart-drawer');
    if (cartDrawer) {
      cartDrawer.classList.remove('open');
      document.body.style.overflow = '';
      this.isCartOpen = false;
    }
  }

  getCartHTML() {
    let html = '<div class="cart-items">';

    this.cart.forEach(item => {
      const price = Shopify.formatMoney(item.final_line_price, theme.moneyFormat);
      html += `
        <div class="cart-item" data-cart-item-key="${item.key}">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.product_title}">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.product_title}</h4>
            ${item.variant_title ? `<p class="cart-item-variant">${item.variant_title}</p>` : ''}
            <div class="cart-item-price">${price}</div>
            <div class="cart-item-quantity">
              <button class="quantity-btn" onclick="geexTheme.updateCartItem('${item.key}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn" onclick="geexTheme.updateCartItem('${item.key}', ${item.quantity + 1})">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="geexTheme.removeFromCart('${item.key}')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `;
    });

    html += '</div>';

    const total = this.cart.reduce((sum, item) => sum + item.final_line_price, 0);
    const formattedTotal = Shopify.formatMoney(total, theme.moneyFormat);

    html += `
      <div class="cart-footer">
        <div class="cart-total">
          <span>Total:</span>
          <span>${formattedTotal}</span>
        </div>
        <a href="/checkout" class="btn btn-primary btn-full">Checkout</a>
        <a href="/cart" class="btn btn-secondary btn-full">View Cart</a>
      </div>
    `;

    return html;
  }

  getEmptyCartHTML() {
    return `
      <div class="cart-empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="cart-empty-icon">
          <path d="M9 2L3 9v13h18V9l-6-7z"/>
          <path d="M3 9h18"/>
          <path d="M9 2v7"/>
        </svg>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <button class="btn btn-primary" onclick="geexTheme.closeCartDrawer()">Continue Shopping</button>
      </div>
    `;
  }

  // Mobile menu functionality
  initMobileMenu() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-mobile-menu-toggle]') || e.target.closest('[data-mobile-menu-toggle]')) {
        e.preventDefault();
        this.toggleMobileMenu();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMobileMenuOpen &&
          !e.target.closest('.mobile-menu') &&
          !e.target.closest('[data-mobile-menu-toggle]')) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
      this.isMobileMenuOpen = true;
    }
  }

  closeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      this.isMobileMenuOpen = false;
    }
  }

  // Product forms
  initProductForms() {
    document.addEventListener('submit', async (e) => {
      if (e.target.matches('.product-form')) {
        e.preventDefault();

        const variantId = e.target.querySelector('[name="id"]').value;
        const quantity = parseInt(e.target.querySelector('[name="quantity"]').value) || 1;
        const submitButton = e.target.querySelector('[type="submit"]');

        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner"></span> Adding...';

        await this.addToCart(variantId, quantity);

        submitButton.disabled = false;
        submitButton.innerHTML = 'Add to Cart';
      }
    });

    // Variant selection
    document.addEventListener('change', (e) => {
      if (e.target.matches('.variant-radio') || e.target.matches('.variant-select')) {
        this.updateVariantSelection(e.target);
      }
    });
  }

  updateVariantSelection(input) {
    const form = input.closest('.product-form');
    const variantId = input.value;
    const variantSelect = form.querySelector('[name="id"]');

    if (variantSelect) {
      variantSelect.value = variantId;
    }

    // Update price
    const variantData = this.getVariantData(variantId);
    if (variantData) {
      const priceElement = form.querySelector('.product-price');
      if (priceElement) {
        priceElement.textContent = Shopify.formatMoney(variantData.price, theme.moneyFormat);
      }

      // Update Add to Cart button state
      const submitButton = form.querySelector('[type="submit"]');
      if (submitButton) {
        if (variantData.available) {
          submitButton.disabled = false;
          submitButton.textContent = 'Add to Cart';
        } else {
          submitButton.disabled = true;
          submitButton.textContent = 'Out of Stock';
        }
      }
    }
  }

  getVariantData(variantId) {
    if (window.productVariants && window.productVariants[variantId]) {
      return window.productVariants[variantId];
    }
    return null;
  }

  // Search functionality
  initSearch() {
    const searchInput = document.querySelector('[data-search-input]');
    const searchResults = document.querySelector('[data-search-results]');

    if (searchInput && searchResults) {
      let searchTimeout;

      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value;

        if (query.length < 2) {
          searchResults.style.display = 'none';
          return;
        }

        searchTimeout = setTimeout(() => {
          this.performSearch(query);
        }, 300);
      });

      // Close search results when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
          searchResults.style.display = 'none';
        }
      });
    }
  }

  async performSearch(query) {
    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=10`);
      const data = await response.json();

      this.displaySearchResults(data.resources.results.products);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displaySearchResults(products) {
    const searchResults = document.querySelector('[data-search-results]');

    if (products.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No products found</div>';
    } else {
      const html = products.map(product => `
        <a href="${product.url}" class="search-result-item">
          <img src="${product.featured_image.url}" alt="${product.title}">
          <div class="search-result-details">
            <h4>${product.title}</h4>
            <div class="search-result-price">${Shopify.formatMoney(product.price, theme.moneyFormat)}</div>
          </div>
        </a>
      `).join('');

      searchResults.innerHTML = html;
    }

    searchResults.style.display = 'block';
  }

  // Scroll effects
  initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      let lastScroll = 0;

      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
      });
    }
  }

  // Lazy loading for images
  initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Utility methods
  showCartLoading() {
    const loadingIndicator = document.querySelector('[data-cart-loading]');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }
  }

  hideCartLoading() {
    const loadingIndicator = document.querySelector('[data-cart-loading]');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  }

  showAddedToCartNotification() {
    this.showNotification('Item added to cart!', 'success');
  }

  showCartError(message) {
    this.showNotification(message, 'error');
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  setupCartEvents() {
    // Quantity buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('.quantity-btn')) {
        e.preventDefault();
        const cartItem = e.target.closest('[data-cart-item-key]');
        const key = cartItem.dataset.cartItemKey;
        const currentQuantity = parseInt(cartItem.querySelector('.quantity').textContent);

        if (e.target.textContent === '+') {
          this.updateCartItem(key, currentQuantity + 1);
        } else if (e.target.textContent === '-' && currentQuantity > 1) {
          this.updateCartItem(key, currentQuantity - 1);
        }
      }
    });
  }
}

// Initialize theme when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.geexTheme = new GEEXTheme();
});

// Make Shopify money format available globally
window.Shopify = window.Shopify || {};
window.theme = window.theme || {};
window.theme.moneyFormat = '{{ shop.money_format }}';

// Add CSS for notifications
const notificationStyles = `
  .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 1000;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .notification.show {
    transform: translateY(0);
    opacity: 1;
  }

  .notification-success {
    background-color: #10b981;
    color: white;
  }

  .notification-error {
    background-color: #ef4444;
    color: white;
  }

  .notification-info {
    background-color: #0ea5e9;
    color: white;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);