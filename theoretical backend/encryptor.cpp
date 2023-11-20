// encryptor.cpp

#include "encryptor.h"

Encryptor::Encryptor(int shift) : shift(shift) {}

Encryptor::~Encryptor() {}

std::string Encryptor::encrypt(const std::string& input) {
    std::string encryptedText;
    for (char c : input) {
        encryptedText += shiftChar(c, shift);
    }
    return encryptedText;
}

char Encryptor::shiftChar(char c, int shift) {
    if (std::isalpha(c)) {
        char base = (std::isupper(c)) ? 'A' : 'a';
        return static_cast<char>((c - base + shift) % 26 + base);
    }
    return c;
}
