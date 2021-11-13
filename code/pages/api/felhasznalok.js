import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


export default async(req, res) => {
    const data = JSON.parse(req.body)

    const createdUser = await prisma.felhasznalok.create({
        data
    })

    res.json(createdUser)
}