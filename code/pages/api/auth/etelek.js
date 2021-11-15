import { PrismaClient } from ".prisma/client";
import { async } from "@firebase/util";

const prisma = new PrismaClient()

export default async(req,res) => {
    const data = JSON.parse(req.body)

    const createdEtelek = await prisma.aru.create({
        data
    })

    req.json(createdEtelek)

}