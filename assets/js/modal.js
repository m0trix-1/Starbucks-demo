const modalUtils = {
    init: function() {
        this.modal = document.getElementById('cart-modal');
        this.closeBtn = document.querySelector('.close-btn');
        this.modalTitle = document.getElementById('modal-title');
        
        this.closeBtn.addEventListener('click', () => this.close());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
    },
    open: function(productName) {
        this.modalTitle.textContent = `${productName} Added!`;
        this.modal.style.display = 'flex';
    },
    close: function() {
        this.modal.style.display = 'none';
    }
};
