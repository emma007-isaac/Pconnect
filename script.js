document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeProductAnimations();
});

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            // Obtenir la catégorie sélectionnée
            const selectedCategory = this.getAttribute('data-category');

            // Filtrer les produits
            filterProducts(selectedCategory, productCards);
        });
    });
}

function filterProducts(category, productCards) {
    productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            // Afficher le produit avec animation
            card.style.display = 'block';
            card.classList.remove('hidden');
            
            // Animation d'apparition
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 50);
        } else {
            // Masquer le produit avec animation
            card.classList.add('hidden');
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            
            // Masquer complètement après l'animation
            setTimeout(() => {
                if (card.classList.contains('hidden')) {
                    card.style.display = 'none';
                }
            }, 300);
        }
    });

    // Mettre à jour le compteur de produits
    updateProductCount(category, productCards);
}
