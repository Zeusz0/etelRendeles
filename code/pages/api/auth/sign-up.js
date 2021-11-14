// import {PrismaClient} from "@prisma/client";
// const prisma = new PrismaClient();
import authService from "../../../service/AuthService"


export default async(req, res) => {
    const data = JSON.parse(req.body)

    // const createdUser = await prisma.felhasznalok.create({
    //     data
    // })
    const createdUser = await authService.signUpUser(data);
    res.json(createdUser)
}