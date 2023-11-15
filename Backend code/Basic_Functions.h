#ifndef BASIC_FUNCTIONS_H
#define BASIC_FUNCTIONS_H
#include <iostream>
using namespace std;
#include "Security_functions.h"


class LogIn {
private:
  // private members here

public:
  // constructors
  LogIn();
  LogIn(string param1, string param2);

  // setters
  void setParam1(string value);
  void setParam2(string value);

  // getters
  string getParam1();
  string getParam2();

//Call Check credntials to check if an account exists, correct username and correct password  
CheckCreds();

  //if an account exists with correct username and password send to display menu

  //if an account does not exist, incorrect password, or incorrect username display warning banner

};

class Signup{
private:
  // private members here

public:
  // constructors
  Signup();
  Signup(string param1, string param2);

  // setters
  void setParam1(string value);
  void setParam2(string value);

  // getters
  string getParam1();
  string getParam2();

//call check credentials to make sure the email is available
CheckCreds();

  //if available create new information in the customer database

  //if not available display a warning banner(?)


};

#endif