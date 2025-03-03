// Get references to elements
const stars = document.querySelectorAll('.star');
const submitButton = document.getElementById('submit-button');
const averageRatingElem = document.getElementById('average-rating');
const totalRatingsElem = document.getElementById('total-ratings');

let selectedRating = 0;
let ratings = [];

// Event listener for clicking on stars
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    updateStars();
  });
});

// Update the stars based on the selected rating
function updateStars() {
  stars.forEach(star => {
    const starValue = parseInt(star.getAttribute('data-value'));
    if (starValue <= selectedRating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

// Submit rating when button is clicked
submitButton.addEventListener('click', () => {
  if (selectedRating === 0) {
    alert('Please select a rating!');
    return;
  }

  // Add the rating to the ratings array
  ratings.push(selectedRating);

  // Calculate the new average rating
  const total = ratings.length;
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  const average = (sum / total).toFixed(1);

  // Update UI with new rating information
  averageRatingElem.textContent = average;
  totalRatingsElem.textContent = total;

  // Reset selected rating and stars
  selectedRating = 0;
  updateStars();
});
