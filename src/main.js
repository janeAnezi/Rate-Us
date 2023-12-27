// Initialize a variable to store the selected rating
let selectedRating = 0;

    function selectRating(rating) {
        selectedRating = rating;
        highlightStars(rating);   
    }

    function highlightStars(rating) {
       // Get all radio button elements with the class 'rating'
        const stars = document.querySelectorAll('.star');
       // Loop through each class to find the selected one
        stars.forEach((star, index) => {
            if (index < rating) {
                star.style.color = 'gold';
            } else {
                star.style.color = 'black';
            }
        });
    }

         // If a rating is selected, display it in the result container
         function showRating() {
        if (selectedRating !== 0) {
            // Show the result container
            document.getElementById('result-container').style.display = 'block';
            // hide the content container
            document.getElementById('rating-container').style.display = 'none';
            // Set the text content of the result paragraph
            document.getElementById('selected-rating').textContent = `You selected ${selectedRating} out of 5.`;
        }

    }