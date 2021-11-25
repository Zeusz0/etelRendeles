import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method === "POST") {
        await prisma.User.create({
            data: req.body,
        });
    }
    if (req.method === "DELETE") {
        await prisma.User.delete({
            where: {
                id: req.body.id,
            },
        });
    }
    res.status(200).send();
};