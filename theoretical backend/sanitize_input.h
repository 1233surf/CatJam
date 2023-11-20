// sanitize_input.h
#ifndef SANITIZE_INPUT_H
#define SANITIZE_INPUT_H

#include <string>
#include <regex>

namespace InputSanitizer {

    // Function to sanitize HTML input
    std::string sanitizeHTML(const std::string& input) {
        // Regular expression to remove HTML tags
        std::regex htmlTags("<.*?>");
        std::string sanitized = std::regex_replace(input, htmlTags, "");

        // You can add more sanitization steps as needed, such as handling special characters

        return sanitized;
    }

} // namespace InputSanitizer

#endif // SANITIZE_INPUT_H
