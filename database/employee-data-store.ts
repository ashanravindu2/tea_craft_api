import {PrismaClient} from "@prisma/client";
import Employee from "../model/Employee";



const prisma = new PrismaClient();

export async function addEmployee(employee:Employee) {
    try {
       return await  prisma.employee.create({
            data: {
                employeeID: employee.employeeID,
                firstName: employee.firstName,
                lastName: employee.lastName,
                designation: employee.designation,
                gender: employee.gender,
                joinedDate: new Date(), // ✅ Set to current date
                dob: new Date(), // ✅ Convert to Date
                addressLine01: employee.addressLine01,
                addressLine02: employee.addressLine02,
                addressLine03: employee.addressLine03,
                addressLine04: employee.addressLine04,
                addressLine05: employee.addressLine05,
                postalCode: employee.postalCode,
                contactNo: employee.contactNo,
                email: employee.email
            }
        });
    } catch (error) {
        console.error(`Error adding employee: ${error}`);
        throw error;
    }
}

export async function deleteEmployee(id: string) {
    try {
        return await prisma.employee.delete({
           where:{
                employeeID: id
           }
        });
    } catch (error) {
        console.error(`Error deleting employee: ${error}`);
        throw error;
    }
}

export async function updateEmployee(id: string, employee: Employee) {
    try {
        return await prisma.employee.update({
            where: {
                employeeID: id
            },
            data: {
                firstName: employee.firstName,
                lastName: employee.lastName,
                designation: employee.designation,
                gender: employee.gender,
                joinedDate: employee.joinedDate,
                dob: employee.dob,
                addressLine01: employee.addressLine01,
                addressLine02: employee.addressLine02,
                addressLine03: employee.addressLine03,
                addressLine04: employee.addressLine04,
                addressLine05: employee.addressLine05,
                postalCode: employee.postalCode,
                contactNo: employee.contactNo,
                email: employee.email,
            }
        });
    } catch (error) {
        console.error(`Error updating employee: ${error}`);
        throw error;
    }
}

export async function getEmployees() {
    try {
        return await prisma.employee.findMany();
    } catch (error) {
        console.error(`Error getting employee: ${error}`);
        throw error;
    }
}

export async function getEmployee(id: string) {
    try {
        return await prisma.employee.findUnique({
            where: {
                employeeID: id
            }
        });
    } catch (error) {
        console.error(`Error getting employee: ${error}`);
        throw error;
    }
}
