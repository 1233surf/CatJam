#include <iostream>
#include "sanitize_input.h"

int main() {
    std::string userInput = "<p>Hello, <script>alert('XSS');</script>world!</p>";

    // Sanitize HTML input
    std::string sanitizedInput = InputSanitizer::sanitizeHTML(userInput);

    // Display sanitized input
    std::cout << "Sanitized Input: " << sanitizedInput << std::endl;

    return 0;
}
