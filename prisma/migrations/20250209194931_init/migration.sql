-- CreateTable
CREATE TABLE `UserAdmin` (
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `supplierID` VARCHAR(50) NOT NULL,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `gender` VARCHAR(10) NOT NULL,
    `joinedDate` DATETIME(3) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `addressLine01` VARCHAR(255) NOT NULL,
    `addressLine02` VARCHAR(255) NULL,
    `addressLine03` VARCHAR(255) NULL,
    `addressLine04` VARCHAR(255) NULL,
    `addressLine05` VARCHAR(255) NULL,
    `postalCode` VARCHAR(20) NOT NULL,
    `contactNo` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Supplier_email_key`(`email`),
    PRIMARY KEY (`supplierID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `employeeID` VARCHAR(50) NOT NULL,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `designation` VARCHAR(100) NOT NULL,
    `gender` VARCHAR(10) NOT NULL,
    `joinedDate` DATETIME(3) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `addressLine01` VARCHAR(255) NOT NULL,
    `addressLine02` VARCHAR(255) NULL,
    `addressLine03` VARCHAR(255) NULL,
    `addressLine04` VARCHAR(255) NULL,
    `addressLine05` VARCHAR(255) NULL,
    `postalCode` VARCHAR(20) NOT NULL,
    `contactNo` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    PRIMARY KEY (`employeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RawMaterialStock` (
    `stockID` INTEGER NOT NULL AUTO_INCREMENT,
    `supplierID` VARCHAR(191) NOT NULL,
    `quantityInKg` DECIMAL(10, 2) NOT NULL,
    `dateReceived` DATETIME(3) NOT NULL,

    PRIMARY KEY (`stockID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Production` (
    `productionID` INTEGER NOT NULL AUTO_INCREMENT,
    `stockID` INTEGER NOT NULL,
    `processDate` DATETIME(3) NOT NULL,
    `processedQuantity` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`productionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `productID` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `type` VARCHAR(50) NULL,
    `pricePerKg` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`productID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RawMaterialStock` ADD CONSTRAINT `RawMaterialStock_supplierID_fkey` FOREIGN KEY (`supplierID`) REFERENCES `Supplier`(`supplierID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Production` ADD CONSTRAINT `Production_stockID_fkey` FOREIGN KEY (`stockID`) REFERENCES `RawMaterialStock`(`stockID`) ON DELETE RESTRICT ON UPDATE CASCADE;
