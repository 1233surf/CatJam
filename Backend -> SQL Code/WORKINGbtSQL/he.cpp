#include <stdlib.h>
#include <iostream>
#include <string>
//#include<format>

#include <mysql/jdbc.h>

using namespace std;

const string server = "127.0.0.1"; // Update the server to your hostname 127.0.0.1
const string username = "root"; //supriseme
const string password = "456838Rg~"; // Update the password jake
const int port = 3306; // Update the port

void addinfo(sql::Statement* stmt, sql::ResultSet* res)
{
	try
	{

		stmt->execute("USE sys");
		res = stmt->executeQuery("INSERT INTO customerinfo (CustomerID, CustomerFirstName, CustomerLastName, CustomerEmail, CustomerUserName, CustomerPassword) VALUES ('1', 'Rachel' , 'Parker', 'IloveThisClass@JK.com', 'FakeName', 'FakePassword')");

	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;

	}

}
void addinfo1(sql::Statement* stmt, sql::ResultSet* res)
{
	try
	{

		stmt->execute("USE sys");
		res = stmt->executeQuery("INSERT INTO employeeinfo (EmployeeNumber, EmployeeFirstName, EmployeeLastName, EmployeeEmail, EmployeeUserName, EmployeePassword) VALUES ('1', 'Aaron' , 'Loveland', 'Imtired@reallytired', 'NameisFake', 'PasswordIsTo')");

	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;

	}

}
void addinfo2(sql::Statement* stmt, sql::ResultSet* res)
{
	try
	{

		stmt->execute("USE sys");
		res = stmt->executeQuery("INSERT INTO rools (RoolsID, RoolsName, RoolsEmail, RoolsQeury) VALUES ('1', 'Customer' , 'Rools@email.com', 'no')");

	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;

	}

}
void addinfo3(sql::Statement* stmt, sql::ResultSet* res)
{
	try
	{

		stmt->execute("USE sys");
		res = stmt->executeQuery("INSERT INTO songinfo (SongInfoID, SongInfoName, SongInfoLyric, SongAlbum, SongArtist, SongProducer) VALUES ('1', 'Binding Lights' , 'Lyrics', 'The Weekend', 'The Weekend', 'IDK')");

	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;

	}

}
int main()
{
	sql::Driver* driver;
	sql::Connection* con;
	sql::Statement* stmt;
	sql::PreparedStatement* pstmt;
	sql::ResultSet* res{};
	//int userInputID;
	string  userInputFN, userInputLN, userInputEM, userInputUS, userInputPW;
	//string firstname, lastname, email;

	//cout << "Input infotmation: "
		//cin >> firstname;

	try
	{
		driver = get_driver_instance();
		con = driver->connect(server, username, password);
		// Check if the connection is active and valid
		if (con->isValid())
		{
			cout << "Connection successful\n";
		}
		else
		{
			// Close connection if it is invalid
			con->close();
			return 0;
		}

		// Set schema to use for the connection
		con->setSchema("sys");
		// Create statement object for issuing commands to SQL Database
		stmt = con->createStatement();

	}

	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;
		system("pause");
		exit(1);
	}
	if (con->isValid())
	{

			addinfo(stmt, res);
			addinfo1(stmt, res);
			addinfo2(stmt, res);
			addinfo3(stmt, res);



	}
	// Clear any SQL created objects. Driver should be done automatically by the compiler.
	//delete con, stmt, res, pstmt;
	return 0;
}
