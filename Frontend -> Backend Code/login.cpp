#include <iostream>
#include "jsoncpp\include\json\json.h"

int main() {
  // Read JSON input from stdin
  Json::Value inputData;
  std::cin >> inputData;

  // Test usernames and passwords for each user
  const std::string testUsers[7][2] = {
    {"user", "1"},
    {"manager", "2"},
    {"customerService", "3"},
    {"moderator", "4"},
    {"developer", "5"},
    {"fulfiller", "6"},
    {"creditor", "7"}
  };

  // Find the matching user
  std::string matchingUser;
  for (const auto& user : testUsers) {
    if (inputData["username"].asString() == user[0] && inputData["password"].asString() == user[1]) {
      matchingUser = user[0];
      break;
    }
  }

  // Prepare JSON response
  Json::Value jsonResponse;
  if (!matchingUser.empty()) {
    jsonResponse["success"] = true;
    // You can customize the response based on your needs
    jsonResponse["message"] = "Login successful";
    jsonResponse["pageNumber"] = matchingUser.substr(matchingUser.size() - 1);
  } else {
    jsonResponse["success"] = false;
    jsonResponse["message"] = "Invalid username or password";
  }

  // Output JSON response to stdout
  std::cout << jsonResponse << std::endl;

  return 0;
}