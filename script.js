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
// Add new landlord
addLandlordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const landlordName = document.getElementById('landlord-name').value;
  const landlordPhone = document.getElementById('landlord-phone').value;
  const landlordEmail = document.getElementById('landlord-email').value;
  const landlordProperty = document.getElementById('landlord-property').value;
  const landlordPhoto = document.getElementById('landlord-photo').files[0];

  if (landlordName && landlordPhone && landlordEmail && landlordProperty && landlordPhoto) {
    const landlord = {
      name: landlordName,
      phone: landlordPhone,
      email: landlordEmail,
      property: landlordProperty,
      photo: URL.createObjectURL(landlordPhoto)
    };
    
    landlords.push(landlord); // Add landlord to the list
    displayLandlordList();
    addLandlordForm.reset(); // Reset the form
    
    // Redirect to Thank You page
    window.location.href = 'thank-you.html';
  }
});
submitButton.addEventListener("click", () => {
  if (selectedRating > 0) {
    totalRatings++;
    sumRatings += selectedRating;
    updateRatingInfo();
    selectedRating = 0;
    updateStars();
    
    // Redirect to Thank You page
    window.location.href = 'thank-you.html';
  }
});
// Cosmic Rating Logic (Unchanged)
let selectedRating = 0;
let totalRatings = 0;
let sumRatings = 0;
const stars = document.querySelectorAll(".star");
const averageRatingDisplay = document.getElementById("average-rating");
const totalRatingsDisplay = document.getElementById("total-ratings");
const commentBox = document.getElementById("comment-box");
const submitButton = document.getElementById("submit-button");
const submitCommentButton = document.getElementById("submit-comment");
const commentsList = document.getElementById("comments-list");

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-value"));
    updateStars();
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating > 0) {
    totalRatings++;
    sumRatings += selectedRating;
    updateRatingInfo();
    selectedRating = 0;
    updateStars();
  }
});

submitCommentButton.addEventListener("click", () => {
  const commentText = commentBox.value.trim();
  if (commentText) {
    const commentItem = document.createElement("div");
    commentItem.classList.add("comment");
    commentItem.innerHTML = `<p>${commentText}</p>`;
    commentsList.appendChild(commentItem);
    commentBox.value = ""; // Clear the comment box
  }
});

function updateStars() {
  stars.forEach(star => {
    const starValue = parseInt(star.getAttribute("data-value"));
    if (starValue <= selectedRating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

function updateRatingInfo() {
  const averageRating = totalRatings === 0 ? 0 : (sumRatings / totalRatings).toFixed(1);
  averageRatingDisplay.textContent = averageRating;
  totalRatingsDisplay.textContent = totalRatings;
}

// Landlord Logic
const tabListButton = document.getElementById('tab-list');
const tabAddButton = document.getElementById('tab-add');
const landlordListContainer = document.getElementById('landlord-list');
const addLandlordFormContainer = document.getElementById('add-landlord-form-container');
const landlordListUl = document.getElementById('landlord-list-ul');
const addLandlordForm = document.getElementById('add-landlord-form');

let landlords = [
  // Adding largest NYC landlords
  {
    name: "The Related Companies",
    phone: "(212) 801-1000",
    email: "contact@related.com",
    property: "Hudson Yards",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Hudson_Yards_%28Manhattan%29_1.jpg"
  },
  {
    name: "Tishman Realty & Construction",
    phone: "(212) 453-2500",
    email: "info@tishmanrealty.com",
    property: "The MetLife Building",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/26/MetLife_Building%2C_NYC.jpg"
  },
  {
    name: "Silverstein Properties",
    phone: "(212) 266-4500",
    email: "info@silversteinproperties.com",
    property: "World Trade Center",
    photo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/One_World_Trade_Center_September_2018.jpg"
  },
  {
    name: "Extell Development Company",
    phone: "(212) 563-5388",
    email: "info@extell.com",
    property: "Central Park Tower",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Central_Park_Tower%2C_New_York_2020.jpg"
  },
  {
    name: "Brookfield Properties",
    phone: "(212) 417-7000",
    email: "info@brookfieldproperties.com",
    property: "Brookfield Place",
    photo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Brookfield_Place%2C_New_York.jpg"
  }
];

// Switch tabs
tabListButton.addEventListener('click', () => {
  tabListButton.classList.add('active');
  tabAddButton.classList.remove('active');
  landlordListContainer.classList.add('active');
  addLandlordFormContainer.classList.remove('active');
});

tabAddButton.addEventListener('click', () => {
  tabAddButton.classList.add('active');
  tabListButton.classList.remove('active');
  landlordListContainer.classList.remove('active');
  addLandlordFormContainer.classList.add('active');
});

// Add new landlord
addLandlordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const landlordName = document.getElementById('landlord-name').value;
  const landlordPhone = document.getElementById('landlord-phone').value;
  const landlordEmail = document.getElementById('landlord-email').value;
  const landlordProperty = document.getElementById('landlord-property').value;
  const landlordPhoto = document.getElementById('landlord-photo').files[0];

  if (landlordName && landlordPhone && landlordEmail && landlordProperty && landlordPhoto) {
    const landlord = {
      name: landlordName,
      phone: landlordPhone,
      email: landlordEmail,
      property: landlordProperty,
      photo: URL.createObjectURL(landlordPhoto)
    };
    
    landlords.push(landlord); // Add landlord to the list
    displayLandlordList();
    addLandlordForm.reset(); // Reset the form
    
    // Redirect to Thank You page
    window.location.href = 'thank-you.html';
  }
});

function displayLandlordList() {
  landlordListUl.innerHTML = ''; // Clear the list
  landlords.forEach((landlord, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>
        <img class="landlord-image" src="${landlord.photo}" alt="${landlord.property}">
        <p>${landlord.name} (${landlord.property})</p>
        <p>${landlord.phone} | ${landlord.email}</p>
      </div>
      <button onclick="removeLandlord(${index})">Remove</button>
    `;
    landlordListUl.appendChild(listItem);
  });
}

// Remove landlord from the list
function removeLandlord(index) {
  landlords.splice(index, 1);
  displayLandlordList();
}
// Tab Switching Logic
const tabRatingButton = document.getElementById('tab-rating');
const tabLandlordDirectoryButton = document.getElementById('tab-landlord-directory');
const tabAddButton = document.getElementById('tab-add');
const ratingTab = document.getElementById('rating-tab');
const landlordDirectoryTab = document.getElementById('landlord-directory-tab');
const addLandlordTab = document.getElementById('add-landlord-tab');

tabRatingButton.addEventListener('click', () => {
  setActiveTab(ratingTab, tabRatingButton);
});

tabLandlordDirectoryButton.addEventListener('click', () => {
  setActiveTab(landlordDirectoryTab, tabLandlordDirectoryButton);
});

tabAddButton.addEventListener('click', () => {
  setActiveTab(addLandlordTab, tabAddButton);
});

function setActiveTab(tabContent, tabButton) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Deactivate all buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Show the clicked tab and activate its button
  tabContent.classList.add('active');
  tabButton.classList.add('active');
}

// Landlord Data
let landlords = [
  {
    name: "The Related Companies",
    phone: "(212) 801-1000",
    email: "contact@related.com",
    property: "Hudson Yards",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Hudson_Yards_%28Manhattan%29_1.jpg"
  },
  {
    name: "Tishman Realty & Construction",
    phone: "(212) 453-2500",
    email: "info@tishmanrealty.com",
    property: "The MetLife Building",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/26/MetLife_Building%2C_NYC.jpg"
  },
  {
    name: "Silverstein Properties",
    phone: "(212) 266-4500",
    email: "info@silversteinproperties.com",
    property: "World Trade Center",
    photo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/One_World_Trade_Center_September_2018.jpg"
  },
  {
    name: "Extell Development Company",
    phone: "(212) 563-5388",
    email: "info@extell.com",
    property: "Central Park Tower",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Central_Park_Tower%2C_New_York_2020.jpg"
  },
  {
    name: "Brookfield Properties",
    phone: "(212) 417-7000",
    email: "info@brookfieldproperties.com",
    property: "Brookfield Place",
    photo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Brookfield_Place%2C_New_York.jpg"
  }
];

// Display Landlord List
function displayLandlordList() {
  const landlordListUl = document.getElementById('landlord-list-ul');
  landlordListUl.innerHTML = ''; // Clear the list
  landlords.forEach((landlord) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>
        <img class="landlord-image" src="${landlord.photo}" alt="${landlord.property}">
        <p>${landlord.name} (${landlord.property})</p>
        <p>${landlord.phone} | ${landlord.email}</p>
      </div>
    `;
    landlordListUl.appendChild(listItem);
  });
}

// Call the displayLandlordList function when the page loads
window.onload = displayLandlordList;
