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
                           email VARCHAR(100) UNIQUE NOT NULL
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
                           email VARCHAR(100) UNIQUE NOT NULL
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
                            stockID VARCHAR(50),
                            processDate DATE NOT NULL,
                            processedQuantity DECIMAL(10,2) NOT NULL,
                            logs VARCHAR(255),
                            FOREIGN KEY (stockID) REFERENCES rawMaterialStock(stockID)
);

CREATE TABLE product (
                          productID VARCHAR(50) PRIMARY KEY ,
                          name VARCHAR(100) NOT NULL,
                          type VARCHAR(50),
                          pricePerKg DECIMAL(10,2) NOT NULL
);
