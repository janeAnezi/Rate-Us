let selectedRating = 0;

    function selectRating(rating) {
        selectedRating = rating;
        highlightStars(rating);

        
    }

    function highlightStars(rating) {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.style.color = 'gold';
            } else {
                star.style.color = 'black';
            }
        });
    }

    function showRating() {
        if (selectedRating !== 0) {
            document.getElementById('result-container').style.display = 'block';
            document.getElementById('rating-container').style.display = 'none';
            document.getElementById('selected-rating').textContent = `You selected ${selectedRating} out of 5.`;

        }
        
    }