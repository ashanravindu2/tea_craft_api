import {PrismaClient} from "@prisma/client";
import Product from "../model/Product";


const prisma = new PrismaClient();

export async function addProduct(product:Product) {
    try{
        return await prisma.product.create({
            data: {
                productID: product.productID,
                name: product.name,
                type: product.type,
                pricePerKg: product.pricePerKg
            }
        });
    }catch (error) {
        console.error(`Error adding product: ${error}`);
        throw error;
    }
}

export async function deleteProduct(id: any) {
    try{
        return await prisma.product.delete({
          where:{
              productID: id
          }
        });
    }catch (error) {
        console.error(`Error deleting product: ${error}`);
        throw error;
    }
}

export async function updateProduct(id: any, product: Product) {
    try{
        return await prisma.product.update({
            where: {
                productID: id
            },
            data: {
                name: product.name,
                type: product.type,
                pricePerKg: product.pricePerKg
            }
        });
    }catch (error) {
        console.error(`Error updating product: ${error}`);
        throw error;
    }
}

export async function getProducts() {
    try{
        return await prisma.product.findMany();
    }catch (error) {
        console.error(`Error getting products: ${error}`);
        throw error;
    }
}

export async function getProductById(id: number) {
    try{
        return await prisma.product.findUnique({
            where: {
                productID: id
            }
        });
    }catch (error) {
        console.error(`Error getting product: ${error}`);
        throw error;
    }
}
