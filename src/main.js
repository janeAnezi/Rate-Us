const ratingContainer = document.getElementById('ratingContainer');

function submitRating() {
    // Get the selected rating value
    var selectedRating = document.getElementById('rating').value;

    // Clear existing content
    document.getElementById('contentContainer').innerHTML = '';

    // Create new content based on the selected rating
    var newContent = document.createElement('div');
    newContent.innerHTML = '<h2>Selected Rating: ' + selectedRating + ' stars</h2>';
    
    // You can customize the content based on the selected rating here
    // For example, add different paragraphs, images, etc.

    // Append the new content to the container
    document.getElementById('contentContainer').appendChild(newContent);
}