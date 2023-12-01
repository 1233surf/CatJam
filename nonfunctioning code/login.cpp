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