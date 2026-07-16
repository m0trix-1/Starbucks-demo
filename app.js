document.addEventListener('DOMContentLoaded', () => {
    // 1. Khởi tạo Modal
    modalUtils.init();

    // 2. Render danh sách sản phẩm từ products.js
    const menuGrid = document.getElementById('menu-grid');
    
    if (menuGrid && typeof STARBUCKS_CATALOG !== 'undefined') {
        const productsHTML = STARBUCKS_CATALOG.menuGrid.map(product => `
            <div class="product-card">
                <div class="product-image-wrapper">
                    <!-- Yêu cầu hình ảnh tại assets/img/ -->
                    <img src="${product.image}" alt="${product.alt}" class="product-img" onerror="this.src='https://via.placeholder.com/150x200?text=Cup+Image'">
                </div>
                <div class="product-info">
                    <span class="product-tag">${product.displayTag}</span>
                    <button class="btn-add-to-cart" data-name="${product.displayTag}" aria-label="Thêm ${product.alt} vào giỏ hàng">ADD TO CART</button>
                </div>
            </div>
        `).join('');
        
        menuGrid.innerHTML = productsHTML;

        // 3. Gắn sự kiện Add to cart
        const cartButtons = document.querySelectorAll('.btn-add-to-cart');
        cartButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productName = e.target.getAttribute('data-name');
                modalUtils.open(productName);
            });
        });
    }
});
