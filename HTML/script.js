function loginUser() {
  const userType = document.getElementById("user-type").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userTypes = ["user", "manager", "customerService", "moderator", "developer", "fulfiller", "creditor"];
  if (!userTypes.includes(userType)) {
    alert("Invalid user type. Please select a valid user type.");
    return false;
  }
  //  test usernames and passwords for each user type
  const testUsers = {
    user: { username: "1", password: "1" },
    manager: { username: "2", password: "2" },
    customerService: { username: "3", password: "3" },
    moderator: { username: "4", password: "4" },
    developer: { username: "5", password: "5" },
    fulfiller: { username: "6", password: "6" },
    creditor: { username: "7", password: "7" }
  };
  if (testUsers[userType].username === username && testUsers[userType].password === password) {
    alert("Login successful");
    hideLogin();
    document.getElementById(`page${userTypes.indexOf(userType) + 2}`).classList.add("active");
  } else {
    alert("Invalid username or password. Please try again.");
  }
  return false;
}

function hideLogin() {
  document.getElementById("page1").classList.remove("active");
}

function goToLogin() {
  document.getElementById("page1").classList.add("active");
  for (let i = 2; i <= 8; i++) {
    document.getElementById(`page${i}`).classList.remove("active");
  }
  // Show the login form
  document.getElementById("login-form").style.display = "block";

  // Hide the ticket form
  document.getElementById("ticketForm").style.display = "none";
  // Hide the Request form
  document.getElementById("songRequestForm").style.display = "none";
  // Hide the Creditor Form
  document.getElementById("sendModInfoForm").style.display = "none";
}

// Hide the ticket form initially
document.getElementById("ticketForm").style.display = "none";

// Show the ticket form when the "Create Ticket" button is clicked
document.getElementById("createTicketButton").addEventListener("click", function () {
  // Hide the login form
  document.getElementById("login-form").style.display = "none";

  // Hide the song request form
    document.getElementById("songRequestForm").style.display = "none";

  // Show the ticket form
  document.getElementById("ticketForm").style.display = "block";
});

// Attach click event listeners to "Go to Login" buttons
const goToLoginButtons = document.querySelectorAll("#goToLogin");
goToLoginButtons.forEach(button => {
  button.addEventListener("click", goToLogin);
});
// Hide the song request form initially
document.getElementById("songRequestForm").style.display = "none";

  // Show the song request form when the "Create Song Request" button is clicked
  document.getElementById("createSongRequest").addEventListener("click", function () {
    // Hide the login form
    document.getElementById("login-form").style.display = "none";

    // Hide the ticket form
    document.getElementById("ticketForm").style.display = "none";

    // Show the song request form
    document.getElementById("songRequestForm").style.display = "block";
  });

  function createSongRequest() {
    //  logic for handling the song request form submission here
    alert("Song request submitted successfully");

    // Hide the song request form after submission
    document.getElementById("songRequestForm").style.display = "none";

    return false;
  }

  // Attach click event listeners to other buttons to hide the song request form
  const otherButtons = document.querySelectorAll("#goToLogin, #browseSongs, #searchSongs, #goToLogin");
  otherButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Hide the song request form
      document.getElementById("songRequestForm").style.display = "none";
    });
  });
  function toggleSearchBar() {
      const searchBarContainer = document.getElementById("searchBarContainer");
      const searchInput = document.getElementById("searchInput");

      // Toggle the display property of the search bar container
      if (searchBarContainer.style.display === "none" || searchBarContainer.style.display === "") {
          searchBarContainer.style.display = "block";
          // Focus on the search input when the search bar is displayed
          searchInput.focus();
      } else {
          searchBarContainer.style.display = "none";
          // Clear the search input when the search bar is hidden
          searchInput.value = "";
      }
  }

  function searchSongs() {
      const searchInput = document.getElementById("searchInput").value;

      // You can add your logic to send the search query to the C++ backend here
      // For now, let's just display an alert with the search query
      alert(`Searching for songs: ${searchInput}`);

      // Hide the search bar after searching
      document.getElementById("searchBarContainer").style.display = "none";
  }
// Show the song information form when the "Send Song Information" button is clicked
document.getElementById("sendModInfo").addEventListener("click", function () {
// Hide the login form
document.getElementById("login-form").style.display = "none";

// Hide other forms if they are visible
document.getElementById("ticketForm").style.display = "none";
document.getElementById("songRequestForm").style.display = "none";
document.getElementById("creditorInfoForm").style.display = "none";

// Show the song information form
document.getElementById("creditorInfoForm").style.display = "block";
});

function sendModInfo() {
// Logic for handling the song information form submission here
alert("Song information sent successfully");

// Hide the song information form after submission
document.getElementById("creditorInfoForm").style.display = "none";

return false;
}
function showCreditorInfoForm() {

// Show the creditor information form
document.getElementById("sendModInfoForm").style.display = "block";
}

// Attach click event listener to "Go to Login" button on creditor page
document.getElementById("goToLoginCreditor").addEventListener("click", function () {
  // Call a function to hide the creditor information form and go back to the login page
  hideCreditorInfoForm();
  goToLogin();
});

// Function to hide the creditor information form
function hideCreditorInfoForm() {
  document.getElementById("sendModInfoForm").style.display = "none";
}