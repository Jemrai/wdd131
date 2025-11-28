// Product array (updated with the provided data)
const products = [
  {
    id: "roraima-tepui",
    name: "Roraima Tepui",
    averagerating: 4.8
  },
  {
    id: "kukenan-tepui",
    name: "Kukenan Tepui",
    averagerating: 4.5
  },
  {
    id: "canaima-cascadas",
    name: "Canaima Cascadas",
    averagerating: 4.7
  },
  {
    id: "botas-senderismo",
    name: "Botas de Senderismo",
    averagerating: 4.2
  },
  {
    id: "mochila-trekking",
    name: "Mochila de Trekking",
    averagerating: 4.6
  }
];


document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;  
            option.textContent = product.name; 
            productSelect.appendChild(option);
        });
    }


    const ratingInputs = document.querySelectorAll('#rating input');
    ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
            
        });
    });

  
    if (window.location.pathname.includes('review.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        document.getElementById('productName').textContent = products.find(p => p.id == urlParams.get('productName'))?.name || 'N/A';
        document.getElementById('rating').textContent = urlParams.get('rating') || 'N/A';
        document.getElementById('installDate').textContent = urlParams.get('installDate') || 'N/A';
        document.getElementById('features').textContent = urlParams.getAll('features').join(', ') || 'None selected';
        document.getElementById('writtenReview').textContent = urlParams.get('writtenReview') || 'No review provided';
        document.getElementById('userName').textContent = urlParams.get('userName') || 'Anonymous';

       
        let count = localStorage.getItem('reviewCount') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('reviewCount', count);
        document.getElementById('reviewCount').textContent = count;
    }
});