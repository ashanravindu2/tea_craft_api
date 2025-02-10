import {PrismaClient} from "@prisma/client";
import Supplier from "../model/Supplier";

const prisma = new PrismaClient();

export async function addSupplier(supplier:Supplier) {
    try {
        return await prisma.supplier.create({
            data: {
                supplierID: supplier.supplierId,
                firstName: supplier.firstName,
                lastName: supplier.lastName,
                gender: supplier.gender,
                joinedDate: supplier.joinedDate,
                dob: supplier.dob,
                addressLine01: supplier.addressLine01,
                addressLine02: supplier.addressLine02,
                addressLine03: supplier.addressLine03,
                addressLine04: supplier.addressLine04,
                addressLine05: supplier.addressLine05,
                postalCode: supplier.postalCode,
                contactNo: supplier.contactNo,
                email: supplier.email
            }
        });
    } catch (error) {
        console.error(`Error adding supplier: ${error}`);
        throw error;
    }
}

export async function deleteSupplier(id: string) {
    try {
        return await prisma.supplier.delete({
            where: {
                supplierID: id
            }
        });
    } catch (error) {
        console.error(`Error deleting supplier: ${error}`);
        throw error;
    }
}

export async function updateSupplier(id: string, supplier: Supplier) {
    try {
        return await prisma.supplier.update({
            where: {
                supplierID: id
            },
            data: {
                
                firstName: supplier.firstName,
                lastName: supplier.lastName,
                gender: supplier.gender,
                joinedDate: supplier.joinedDate,
                dob: supplier.dob,
                addressLine01: supplier.addressLine01,
                addressLine02: supplier.addressLine02,
                addressLine03: supplier.addressLine03,
                addressLine04: supplier.addressLine04,
                addressLine05: supplier.addressLine05,
                postalCode: supplier.postalCode,
                contactNo: supplier.contactNo,
                email: supplier.email,
            }
        });
    } catch (error) {
        console.error(`Error updating supplier: ${error}`);
        throw error;
    }
}

export async function getSuppliers() {
    try {
        return await prisma.supplier.findMany();
    } catch (error) {
        console.error(`Error getting suppliers: ${error}`);
        throw error;
    }
}

export async function getSupplier(id: string) {
    try {
        return await prisma.supplier.findUnique({
            where: {
                supplierID: id
            }
        });
    } catch (error) {
        console.error(`Error getting supplier: ${error}`);
        throw error;
    }
}
