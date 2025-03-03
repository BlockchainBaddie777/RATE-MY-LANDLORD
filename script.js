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
    alert('Please select a rating! 🚀');
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

// Comment submission
submitCommentButton.addEventListener('click', () => {
  const commentText = commentBox.value.trim();

  if (commentText === "") {
    alert("Help Out Your Fellow New Yorker and Enter a Comment! 💬");
    return;
  }

  // Create a new comment
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `
    <p><span>Comment:</span> ${commentText}</p>
  `;

  // Append the new comment to the list
  commentsList.appendChild(newComment);

  // Clear the comment box
  commentBox.value = "";
});
// Landlord Data Logic

const addLandlordForm = document.getElementById("add-landlord-form");
const landlordNameInput = document.getElementById("landlord-name");
const landlordPhoneInput = document.getElementById("landlord-phone");
const landlordEmailInput = document.getElementById("landlord-email");
const landlordPropertyInput = document.getElementById("landlord-property");
const landlordList = document.getElementById("landlord-list");

let landlords = [];

addLandlordForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = landlordNameInput.value;
  const phone = landlordPhoneInput.value;
  const email = landlordEmailInput.value;
  const property = landlordPropertyInput.value;

  const newLandlord = {
    name,
    phone,
    email,
    property,
  };

  landlords.push(newLandlord);
  renderLandlords();
  landlordNameInput.value = "";
  landlordPhoneInput.value = "";
  landlordEmailInput.value = "";
  landlordPropertyInput.value = "";
});

function renderLandlords() {
  landlordList.innerHTML = "";
  landlords.forEach((landlord, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div>
        <strong>${landlord.name}</strong><br>
        Phone: ${landlord.phone}<br>
        Email: ${landlord.email}<br>
        Property: ${landlord.property}
      </div>
      <button onclick="deleteLandlord(${index})">Delete</button>
    `;
    landlordList.appendChild(listItem);
  });
}

function deleteLandlord(index) {
  landlords.splice(index, 1);
  renderLandlords();
}
