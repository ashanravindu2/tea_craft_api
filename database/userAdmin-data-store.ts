import {PrismaClient} from "@prisma/client";
import UserAdmin from "../model/UserAdmin";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createUser(userAdmin : UserAdmin) {
    const hashedPassword = await bcrypt.hash(userAdmin.password, 10);

    const addedUser = await prisma.useradmin.create({
        data: {
            email : userAdmin.email,
            password: hashedPassword,
            role: userAdmin.role,
        },
    });
    console.log("User created:", addedUser);
}

export async function verifyUserCredentials(verifyUser : UserAdmin) {
    const user : any | null = await prisma.useradmin.findUnique({
        where : {
            email:verifyUser.email,
        }
    });
    if (!user) {
        return false;

    }


    console.log("verifyUserCredentials",verifyUser)
    return await bcrypt.compare(verifyUser.password, user.password);
}