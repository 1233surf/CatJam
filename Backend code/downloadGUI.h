#ifndef DOWNLOADGUI_H
#define DOWNLOADGUI_H

#include "Manage_Functions.h"

class downloadGUI : public manageGUI {
private:
  // private members here
public:
  // constructors
downloadGUI();
downloadGUI(int param1, int param2);
  // setters
  void setParam1(int value);
  void setParam2(int value);
  // getters
  int getParam1();
  int getParam2();
};
#endif