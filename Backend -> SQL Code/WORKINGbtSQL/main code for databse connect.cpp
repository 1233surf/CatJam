#include <stdlib.h>
#include <iostream>

#include <mysql/jdbc.h>

using namespace std;
 

const string server = "127.0.0.1"; // Update the server to your hostname 127.0.0.1
const string username = "root"; //supriseme
const string password = "456838Rg~"; // Update the password jake
const int port = 3306; // Update the port
/*
void CreateTable(sql::Statement* stmt)
{
	try
	{
		// Use the sys 
		stmt->execute("USE sys");
		// If table already exists, delete it
		stmt->execute("DROP TABLE IF EXISTS sys.LIST_DESC");
		// Create new table with an ID column using int data type
		stmt->execute("CREATE TABLE LIST_DESC(ID int)");
		// Insert a new column into the table called Name using char data type & a max size of 15
		stmt->execute("ALTER TABLE LIST_DESC ADD Name CHAR(15)");
		// Insert three separate rows of strinrg values into the Name column
		stmt->execute("INSERT INTO LIST_DESC(Name) VALUES('Rachel'), ('Aaron'), ('Jake')");
	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;
		system("pause");
		exit(1);
	}
}
*/
/*
void PrintTable(sql::Statement* stmt, sql::ResultSet* res)
{
	try
	{
		// Execute a query on the table and assign results to ResultSet Array
		res = stmt->executeQuery("SELECT * FROM list_desc");

		// Loop for going through the ResultSet Array
		while (res->next())
		{
			// Get values based on data types by accessing specific columns. syntax: ResultSetObject->getDataType(column_name)
			cout << "USERID: " << res->getInt("ID") << endl;
			cout << "Name: " << res->getString("Name") << endl;
		}
	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;
		system("pause");
		exit(1);
	}
}
*/

void pullinfo(sql::Statement* stmt, sql::ResultSet* res)
{
	try 
	{
		
		stmt->execute("USE sys");
		res = stmt->executeQuery("SELECT * FROM employeeinfo, loglog");

		while (res->next())
		{
			// Get values based on data types by accessing specific columns. syntax: ResultSetObject->getDataType(column_name)
			cout << "USERID: " << res->getInt("EmployeeNumber") << endl;
			cout << "Name: " << res->getString("EmployeeFirstName") << endl;
			cout << "UserName: " << res->getString("logUserName") << endl;
			cout << "Email: " << res->getString("logPassword") << endl;

		}
		
	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;
		system("pause");
		exit(1);
	}
}
int main()
{
	sql::Driver* driver;
	sql::Connection* con;
	sql::Statement* stmt;
	sql::PreparedStatement* pstmt;
	sql::ResultSet* res{};
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
	try {
		pullinfo(stmt, res);
	}
	catch (sql::SQLException e)
	{
		cout << "Error message: " << e.what() << endl;
		system("pause");
		exit(1);
	}
	// Clear any SQL created objects. Driver should be done automatically by the compiler.
	//delete con, stmt, res, pstmt;
	return 0;
}
