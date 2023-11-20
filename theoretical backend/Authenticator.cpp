// authentication.cpp

#include "authentication.h"

Authenticator::Authenticator() {
    // Constructor implementation, if needed
}

Authenticator::~Authenticator() {
    // Destructor implementation, if needed
}

bool Authenticator::authenticateUser(const std::string& enteredPassword) {
    // Compare the entered password with the actual password
    return enteredPassword == actualPassword;
}
