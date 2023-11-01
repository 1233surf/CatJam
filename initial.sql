CREATE TABLE CustomerInfo (
    CustomerID INT NOT NULL AUTO_INCREMENT,
    Firstname CHAR(30) NOT NULL,
    LastName CHAR(15) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    UserN VARCHAR(30) NOT NULL,
    Passw VARCHAR(30) NOT NULL,
    CONSTRAINT CUSTOMER_PK PRIMARY KEY (CustomerID)
);

CREATE TABLE SongInfo (
    SID INT NOT NULL AUTO_INCREMENT,
    SName CHAR(35) NOT NULL,
    SLyric CHAR(35) NOT NULL,
    SAlbum CHAR(35) NOT NULL,
    SArtist CHAR(30) NOT NULL,
    SProducer CHAR(15) NOT NULL,
    CONSTRAINT SongInfo_PK PRIMARY KEY (SID)
);

CREATE TABLE SongInfoSkeloton (
    SName CHAR(35) NOT NULL,
    SLyric CHAR(35) NOT NULL,
    SAlbum CHAR(35) NOT NULL,
    SArtist CHAR(30) NOT NULL,
    SProducer CHAR(15) NOT NULL
);

CREATE TABLE EmployeeInfo (
    EmployeeNumber INT NOT NULL AUTO_INCREMENT,
    Firstname CHAR(30) NOT NULL,
    LastName CHAR(15) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    UserN VARCHAR(30) NOT NULL,
    Passw VARCHAR(30) NOT NULL,
    CONSTRAINT Employee_PK PRIMARY KEY (EmployeeNumber)
);

CREATE TABLE Ticketlog (
    TicketID INT NOT NULL AUTO_INCREMENT,
    Fname CHAR(35) NOT NULL,
    Lname CHAR(35) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Descriptio CHAR(1000) NOT NULL,
    CONSTRAINT Ticket_PK PRIMARY KEY (TicketID)
);

CREATE TABLE Browselog (
    QeuryID INT NOT NULL AUTO_INCREMENT,
    Fname CHAR(35) NOT NULL,
    Lname CHAR(35) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Qeury CHAR(100) NOT NULL,
    CONSTRAINT Browse_PK PRIMARY KEY (QeuryID)
);

CREATE TABLE Requestlog (
    RequestID INT NOT NULL AUTO_INCREMENT,
    Fname CHAR(35) NOT NULL,
    Lname CHAR(35) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Problemo CHAR(100) NOT NULL,
    CONSTRAINT Request_PK PRIMARY KEY (RequestID)
);

CREATE TABLE Searchlog (
    SearchID INT NOT NULL AUTO_INCREMENT,
    Fname CHAR(35) NOT NULL,
    Lname CHAR(35) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Qeury CHAR(100) NOT NULL,
    CONSTRAINT Search_PK PRIMARY KEY (SearchID)
);

CREATE TABLE LogLog (
    LoginID INT NOT NULL AUTO_INCREMENT,
    Firstname CHAR(30) NOT NULL,
    LastName CHAR(15) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    UserN VARCHAR(30) NOT NULL,
    Passw VARCHAR(30) NOT NULL,
    CONSTRAINT Log_PK PRIMARY KEY (LoginID)
);

CREATE TABLE SignLog (
    SignID INT NOT NULL AUTO_INCREMENT,
    Firstname CHAR(30) NOT NULL,
    LastName CHAR(15) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    UserN VARCHAR(30) NOT NULL,
    Passw VARCHAR(30) NOT NULL,
    CONSTRAINT Sign_PK PRIMARY KEY (SignID)
);

CREATE TABLE DevLog (
    DevID INT NOT NULL AUTO_INCREMENT,
    Downlood CHAR(30) NOT NULL,
    Uplood CHAR(15) NOT NULL,
    CONSTRAINT Dev_PK PRIMARY KEY (DevID)
);

CREATE TABLE Rools (
    RoolsID INT NOT NULL AUTO_INCREMENT,
    Rname CHAR(35) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Qeury CHAR(100) NOT NULL,
    CONSTRAINT Rools_PK PRIMARY KEY (RoolsID)
);
