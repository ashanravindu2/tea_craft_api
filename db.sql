drop database if exists TeaFactoryDB;
CREATE DATABASE TeaFactoryDB;
USE TeaFactoryDB;

CREATE TABLE userAdmin (
                           email VARCHAR(100) PRIMARY KEY,
                           password VARCHAR(255) UNIQUE NOT NULL,
                           role VARCHAR(50) NOT NULL
);

CREATE TABLE supplier (
                           supplierID VARCHAR(50) PRIMARY KEY,
                           firstName VARCHAR(100) NOT NULL,
                           lastName VARCHAR(100) NOT NULL,
                           gender VARCHAR(10) NOT NULL,
                           joinedDate DATE NOT NULL,
                           dob DATE NOT NULL,
                           addressLine01 VARCHAR(255) NOT NULL,
                           addressLine02 VARCHAR(255),
                           addressLine03 VARCHAR(255),
                           addressLine04 VARCHAR(255),
                           addressLine05 VARCHAR(255),
                           postalCode VARCHAR(20) NOT NULL,
                           contactNo VARCHAR(20) NOT NULL,
                           email VARCHAR(100)  NOT NULL
);

CREATE TABLE employee(
                           employeeID VARCHAR(50) PRIMARY KEY,
                           firstName VARCHAR(100) NOT NULL,
                           lastName VARCHAR(100) NOT NULL,
                           designation VARCHAR(100) NOT NULL,
                           gender VARCHAR(10) NOT NULL,
                           joinedDate DATE NOT NULL,
                           dob DATE NOT NULL,
                           addressLine01 VARCHAR(255) NOT NULL,
                           addressLine02 VARCHAR(255),
                           addressLine03 VARCHAR(255),
                           addressLine04 VARCHAR(255),
                           addressLine05 VARCHAR(255),
                           postalCode VARCHAR(20) NOT NULL,
                           contactNo VARCHAR(20) NOT NULL,
                           email VARCHAR(100)  NOT NULL
);

CREATE TABLE rawMaterialStock (
                                  stockID VARCHAR(50) PRIMARY KEY ,
                                  supplierID VARCHAR(50),
                                  quantityInKg DECIMAL(10,2) NOT NULL,
                                  dateReceived DATE,
                                  FOREIGN KEY (supplierID) REFERENCES supplier(supplierID)
);

CREATE TABLE production (
                            productionID VARCHAR(50) PRIMARY KEY,
                            qualityChecks BOOLEAN NOT NULL,
                            processDate DATE NOT NULL,
                            processedQuantity DECIMAL(10,2) NOT NULL,
                            logs VARCHAR(255)

);

CREATE TABLE log (
                          logCode VARCHAR(50) PRIMARY KEY ,
                          logDate DATE NOT NULL,
                          observation VARCHAR(255) ,
                          productionID VARCHAR(50)  NULL,
                          supplierID VARCHAR(50)  NULL,
                          employeeID VARCHAR(50)  NULL,
                          observedImage LONGTEXT NULL,
                          FOREIGN KEY (productionID) REFERENCES production(productionID) ,
                          FOREIGN KEY (supplierID) REFERENCES supplier(supplierID),
                          FOREIGN KEY (employeeID) REFERENCES employee(employeeID)
);

CREATE TABLE product (
                           productID VARCHAR(50) PRIMARY KEY,
                           name VARCHAR(100) NOT NULL,
                           type VARCHAR(255) NOT NULL,
                           pricePerKg DECIMAL(10,2) NOT NULL
);


