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

array.push(
const landlords = [
  "Barry Singer", "Alfred Thompson", "Karen Geer", "Melanie Martin", "Claudette Henry",
  "David Tennenbaum", "Sam Klein", "Robert Kaszovitz", "Yonatan Bahumi", "Joseph Emile",
  "Daniel Ohebshalom", "Jonathan Santana", "Ivan Disla", "Barry Hers", "Joseph Brunner",
  "David Schwartz", "Joseph Shalom", "Abraham Klein", "Shimon Shkury", "Jacob Klein",
  "Yitzchok Tessler", "Moishe Kohn", "Shlomo Kohn", "Abraham Kohn", "Yisroel Kohn",
  "Mordechai Kohn", "Yankie Kohn", "Chaim Kohn", "Leibish Kohn", "Shmuel Kohn",
  "Dovid Kohn", "Shimon Tessler", "Yitzchok Tessler", "Moishe Tessler", "Shlomo Tessler",
  "Abraham Tessler", "Yisroel Tessler", "Mordechai Tessler", "Yankie Tessler", "Chaim Tessler",
  "Leibish Tessler", "Shmuel Tessler", "Dovid Tessler", "Shimon Tessler", "Yitzchok Tessler",
  "Moishe Tessler", "Shlomo Tessler", "Abraham Tessler", "Yisroel Tessler", "Mordechai Tessler",
  "Yankie Tessler", "Chaim Tessler", "Leibish Tessler", "Shmuel Tessler", "Dovid Tessler",
  "Shimon Tessler", "Yitzchok Tessler", "Moishe Tessler", "Shlomo Tessler", "Abraham Tessler",
  "Yisroel Tessler", "Mordechai Tessler", "Yankie Tessler", "Chaim Tessler", "Leibish Tessler",
  "Shmuel Tessler", "Dovid Tessler", "Shimon Tessler", "Yitzchok Tessler", "Moishe Tessler",
  "Shlomo Tessler", "Abraham Tessler", "Yisroel Tessler", "Mordechai Tessler", "Yankie Tessler",
  "Chaim Tessler", "Leibish Tessler", "Shmuel Tessler", "Dovid Tessler", "Shimon Tessler",
  "Yitzchok Tessler", "Moishe Tessler", "Shlomo Tessler", "Abraham Tessler", "Yisroel Tessler",
  "Mordechai Tessler", "Yankie Tessler", "Chaim Tessler", "Leibish Tessler", "Shmuel Tessler",
  "Dovid Tessler", "Shimon Tessler", "Yitzchok Tessler", "Moishe Tessler", "Shlomo Tessler",
  "Abraham Tessler", "Yisroel Tessler", "Mordechai Tessler", "Yankie Tessler", "Chaim Tessler",
  "Leibish Tessler", "Shmuel Tessler", "Dovid Tessler", "Shimon Tessler", "Yitzchok Tessler"
];

// Function to populate the Landlord Directory
function populateLandlordDirectory() {
  const landlordListUl = document.getElementById('landlord-list-ul');

  landlords.forEach(landlord => {
    const listItem = document.createElement('li');
    listItem.textContent = landlord;
    landlordListUl.appendChild(listItem);
  });
}

// Call the function to populate the landlord directory when the page loads
document.addEventListener('DOMContentLoaded', populateLandlordDirectory);

// Tab Switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
function switchTab(event) {
  tabButtons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
  tabContents.forEach(content => content.classList.remove('active'));
  const targetTab = document.getElementById(`${event.target.id.replace('tab-', '')}-tab`);
  targetTab.classList.add('active');
}
tabButtons.forEach(button => button.addEventListener('click', switchTab));

// Rating System
let totalRatings = 0;
let totalStars = 0;
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('click', (e) => {
    const rating = parseInt(e.target.getAttribute('data-value'));
    totalStars += rating;
    totalRatings++;
    const averageRating = totalStars / totalRatings;
    document.getElementById('average-rating').textContent = averageRating.toFixed(1);
    document.getElementById('total-ratings').textContent = totalRatings;
  });
});

// Submit Rating
document.getElementById('submit-button').addEventListener('click', () => {
  alert(`Rating Submitted: ${document.getElementById('average-rating').textContent}`);
});

// Comment Section
document.getElementById('submit-comment').addEventListener('click', () => {
  const commentBox = document.getElementById('comment-box');
  const comment = commentBox.value;
  if (comment) {
    const commentList = document.getElementById('comments-list');
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment');
    commentItem.textContent = comment;
    commentList.appendChild(commentItem);
    commentBox.value = '';
  }
});

// Add Landlord to Directory
let landlords = [];
document.getElementById('add-landlord-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('landlord-name').value;
  const phone = document.getElementById('landlord-phone').value;
  const email = document.getElementById('landlord-email').value;
  const property = document.getElementById('landlord-property').value;
  landlords.push({ name, phone, email, property });
  const landlordListUl = document.getElementById('landlord-list-ul');
  const landlordItem = document.createElement('li');
  landlordItem.textContent = `${name} - ${property}`;
  landlordListUl.appendChild(landlordItem);
  event.target.reset();
});

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
})
