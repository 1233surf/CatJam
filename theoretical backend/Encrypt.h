// encryptor.h

#ifndef ENCRYPTOR_H
#define ENCRYPTOR_H

#include <string>

class Encryptor {
public:
    // Constructor with the encryption key
    Encryptor(int shift);

    // Destructor
    ~Encryptor();

    // Function to encrypt a string
    std::string encrypt(const std::string& input);

private:
    int shift; // Shift value for the Caesar cipher

    // Helper function to shift a single character
    char shiftChar(char c, int shift);
};

#endif // ENCRYPTOR_H
