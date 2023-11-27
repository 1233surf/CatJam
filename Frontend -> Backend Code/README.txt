Problem in the following areas of the code (most likely)



login.cpp:

#include <iostream>
#include <string>
#include <unordered_map>

struct User {
    std::string role;
    std::string username;
    std::string password;
};

// Define a map to store user roles and credentials
std::unordered_map<std::string, User> users = {
    {"1", {"user", "1", "1"}},
    {"2", {"manager", "2", "2"}},
    {"3", {"customerService", "3", "3"}},
    {"4", {"moderator", "4", "4"}},
    {"5", {"developer", "5", "5"}},
    {"6", {"fulfiller", "6", "6"}},
    {"7", {"creditor", "7", "7"}},
};

bool validateCredentials(const std::string& username, const std::string& password, std::string& userRole) {
    auto userIt = users.find(username);
    if (userIt != users.end() && userIt->second.password == password) {
        userRole = userIt->second.role;
        return true;
    }

    return false;
}

int main(int argc, char* argv[]) {
    if (argc != 3) {
        std::cerr << "Usage: " << argv[0] << " <username> <password>" << std::endl;
        return 1;
    }

    std::string username = argv[1];
    std::string password = argv[2];

    std::string userRole;

    if (validateCredentials(username, password, userRole)) {
        std::cout << "Valid credentials. User role: " << userRole << std::endl;
        return 0;
    } else {
        std::cerr << "Invalid credentials" << std::endl;
        return 1;
    }
}

Or

This javascript in the script.js

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

As so far, the server is only handling login information from the backend.
