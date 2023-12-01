document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
      loginForm.addEventListener('submit', loginUser);
  } else {
      console.error('Login form not found in the document');
  }

  // Function to handle login form submission
  function loginUser(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Validate the inputs (you can add more validation as needed)
      if (!username || !password) {
          alert('Please enter both username and password.');
          return;
      }

      const apiEndpoint = 'http://localhost:3000/login';

      // Make a POST request to the server
      fetch(apiEndpoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          console.log('Response data:', data);
          if (data.success) {
              // Handle successful login
              alert('Login successful');
              console.log('Login successful');
              // Redirect or show a success message
              // Update user page based on data.message (e.g., show specific user page)
          } else {
              // Handle unsuccessful login
              alert('Login failed: ' + data.message);
              console.log('Login failed:', data.message);
          }
      })
      .catch(error => {
          console.error('Error during login:', error.message);
          // Handle error (e.g., show an error message)
      });
  }
});

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

// Set initial state to hide the ticket form
var ticketFormVisible = false;

// Function to toggle ticket form visibility
function toggleTicketForm() {
  var ticketForm = document.getElementById("ticketForm");

  if (ticketFormVisible) {
    // If visible, hide the ticket form
    ticketForm.style.display = "none";
  } else {
    // If hidden, show the ticket form
    ticketForm.style.display = "block";
  }

  // Update the state
  ticketFormVisible = !ticketFormVisible;
}

// Hide the ticket form initially
document.getElementById("ticketForm").style.display = "none";

// Show/hide the ticket form when the "Create Ticket" button is clicked
document.getElementById("createTicketButton").addEventListener("click", function () {
  // Hide the login form
  document.getElementById("login-form").style.display = "none";

  // Hide the song request form
  document.getElementById("songRequestForm").style.display = "none";

  // Toggle the ticket form visibility
  toggleTicketForm();
});

// Attach click event listeners to "Go to Login" buttons
const goToLoginButtons = document.querySelectorAll("#goToLogin");
goToLoginButtons.forEach(button => {
  button.addEventListener("click", goToLogin);
});

// Set initial state to hide the song request form
var songRequestFormVisible = false;

// Function to toggle song request form visibility
function toggleSongRequestForm() {
  var songRequestForm = document.getElementById("songRequestForm");

  if (songRequestFormVisible) {
    // If visible, hide the song request form
    songRequestForm.style.display = "none";
  } else {
    // If hidden, show the song request form
    songRequestForm.style.display = "block";
  }

  // Update the state
  songRequestFormVisible = !songRequestFormVisible;
}

// Hide the song request form initially
document.getElementById("songRequestForm").style.display = "none";

// Show/hide the song request form when the "Create Song Request" button is clicked
document.getElementById("createSongRequest").addEventListener("click", function () {
  // Hide the login form
  document.getElementById("login-form").style.display = "none";

  // Hide the ticket form
  document.getElementById("ticketForm").style.display = "none";

  // Toggle the song request form visibility
  toggleSongRequestForm();
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
// Attach click event listeners to other buttons to hide the search bar
const otherButtonsSearch = document.querySelectorAll("#goToLogin, #createSongRequest, #createTicketButton, #goToLoginCreditor");
otherButtonsSearch.forEach(button => {
  button.addEventListener("click", function () {
    // Hide the search bar and clear the input
    document.getElementById("searchBarContainer").style.display = "none";
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

// browse song 

document.addEventListener("DOMContentLoaded", function () {
  // Attach click event listeners to other buttons to hide the song info table
  const otherButtons = document.querySelectorAll("#goToLogin, #searchSongs, #createTicketButton, #createSongRequest");
  otherButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Hide the song info table
      document.getElementById("songInfoContainer").style.display = "none";
    });
  });

  // Function to toggle song info table visibility
  function toggleSongInfoTable() {
    var songInfoContainer = document.getElementById("songInfoContainer");

    if (songInfoContainer.style.display === "block") {
      // If visible, hide the table
      songInfoContainer.style.display = "none";
    } else {
      // If hidden, show the table
      songInfoContainer.style.display = "block";
    }
  }

  // Hide the song info table initially
  document.getElementById("songInfoContainer").style.display = "none";

  // Attach click event listener to the "Browse Songs" button
  document.getElementById("browseSongs").addEventListener("click", function () {
    // Toggle the song info table visibility
    toggleSongInfoTable();
  });
});

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

//end of Login & user Functions


//Manager Functions


//End of Manager functions


// Customer Service Functions


// edit & delete
document.addEventListener('DOMContentLoaded', function() {
    // Hide both forms and ticket table when the page loads
    var editForm = document.getElementById('editForm');
    var deleteForm = document.getElementById('deleteForm');
    var ticketTable = document.getElementById('ticketTable');
    editForm.style.display = 'none';
    deleteForm.style.display = 'none';
    ticketTable.style.display = 'none'; // Initially hide the ticket table
});

function toggleForm() {
    var editForm = document.getElementById('editForm');
    var deleteForm = document.getElementById('deleteForm');
    var ticketTable = document.getElementById('ticketTable');

    // Toggle the visibility of the edit form
    if (editForm.style.display === 'none') {
        editForm.style.display = 'block';
        // Hide the delete form
        deleteForm.style.display = 'none';
        // Hide the ticket table
        ticketTable.style.display = 'none';
    } else {
        editForm.style.display = 'none';
        // Display the ticket table when edit form is hidden
        ticketTable.style.display = 'none'; // Corrected this line
    }
}

function toggleDeleteForm() {
    var editForm = document.getElementById('editForm');
    var deleteForm = document.getElementById('deleteForm');
    var ticketTable = document.getElementById('ticketTable');

    // Toggle the visibility of the delete form
    if (deleteForm.style.display === 'none') {
        deleteForm.style.display = 'block';
        // Hide the edit form
        editForm.style.display = 'none';
        // Hide the ticket table
        ticketTable.style.display = 'none';
    } else {
        deleteForm.style.display = 'none';
        // Display the ticket table when delete form is hidden
        ticketTable.style.display = 'none';
    }
}

// View Tickets
function toggleTicketTable() {
    var ticketTable = document.getElementById('ticketTable');
    var editForm = document.getElementById('editForm');
    var deleteForm = document.getElementById('deleteForm');

    // Check if either edit or delete form is visible, and hide them
    if (editForm.style.display !== 'none') {
        editForm.style.display = 'none';
    }

    if (deleteForm.style.display !== 'none') {
        deleteForm.style.display = 'none';
    }

    // Toggle the visibility of the ticket table
    if (ticketTable.style.display === 'none' || ticketTable.style.display === '') {
        ticketTable.style.display = 'table';
    } else {
        ticketTable.style.display = 'none';
    }
}
// End of Customer Service Functions

//Moderator Functions

//End of Moderator Functions

// Dev Functions

// End of Dev Functions

// Fulfiller Functions

// End of Fulfiller Functions


//Creditor functions
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

//End of Creditor functions
