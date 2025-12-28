document.addEventListener('DOMContentLoaded', function() {
  // Mobile filter popup functionality
  const filterMobile = document.querySelector('.filter-mobile');
  const sideBarMobile = document.querySelector('.side-bar-mobile');
  const sortMobile = document.querySelector('.sort-mobile');
  const sortBarMobile = document.querySelector('.sort-bar-mobile');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const closeFilterBtn = document.querySelector('.close-filter-btn');
  const closeSortBtn = document.querySelector('.close-sort-btn');

  // Open mobile filter
  if (filterMobile) {
    filterMobile.addEventListener('click', function() {
      sideBarMobile.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  }

  // Open mobile sort
  if (sortMobile) {
    sortMobile.addEventListener('click', function() {
      sortBarMobile.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  }

  // Close mobile filter
  function closeMobileFilter() {
    if (sideBarMobile) {
      sideBarMobile.classList.remove('active');
    }
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Close mobile sort
  function closeMobileSort() {
    if (sortBarMobile) {
      sortBarMobile.classList.remove('active');
    }
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Close filter button
  if (closeFilterBtn) {
    closeFilterBtn.addEventListener('click', closeMobileFilter);
  }

  // Close sort button
  if (closeSortBtn) {
    closeSortBtn.addEventListener('click', closeMobileSort);
  }

  // Close on overlay click
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function() {
      closeMobileFilter();
      closeMobileSort();
    });
  }

  // Sort functionality
  const sortOptions = document.querySelectorAll('input[name="sort"]');
  const productGrid = document.querySelector('.product-grid');
  
  sortOptions.forEach(option => {
    option.addEventListener('change', function() {
      const sortValue = this.value;
      const products = Array.from(productGrid.querySelectorAll('.product-card'));
      
      products.sort((a, b) => {
        switch(sortValue) {
          case 'rating':
            const ratingA = parseFloat(a.querySelector('.stargazers_count').textContent.trim());
            const ratingB = parseFloat(b.querySelector('.stargazers_count').textContent.trim());
            return ratingB - ratingA;
            
          case 'price-low':
            const priceA = parseFloat(a.querySelector('.price').textContent.replace(/\./g, ''));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace(/\./g, ''));
            return priceA - priceB;
            
          case 'price-high':
            const priceA2 = parseFloat(a.querySelector('.price').textContent.replace(/\./g, ''));
            const priceB2 = parseFloat(b.querySelector('.price').textContent.replace(/\./g, ''));
            return priceB2 - priceA2;
            
          case 'newest':
            // Reverse order for newest
            return -1;
            
          case 'popular':
          default:
            // Keep original order
            return 0;
        }
      });
      
      // Clear and re-append sorted products
      productGrid.innerHTML = '';
      products.forEach(product => productGrid.appendChild(product));
    });
  });

  // Size selection functionality
  const sizeRadios = document.querySelectorAll('input[name="size"]');
  sizeRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      // Update the size label
      const sizeLabel = document.querySelector('.product-size label[for="size"]');
      if (sizeLabel) {
        sizeLabel.textContent = `Size: ${this.value}`;
      }
    });
  });

  // Quantity selector functionality
  const quantitySelectors = document.querySelectorAll('.item-quantity');
  quantitySelectors.forEach(selector => {
    const minusBtn = selector.querySelector('.minus');
    const plusBtn = selector.querySelector('.plus');
    const input = selector.querySelector('input');
    
    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
          input.value = currentValue - 1;
        }
      });
    }
    
    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(input.value);
        input.value = currentValue + 1;
      });
    }
  });
});
