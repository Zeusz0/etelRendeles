import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    await prisma.user.update({
      where: {
        id: req.body,
      },
      data: {
        partner: true,
      },
    });
    console.log(req.body);
  }
  res.status(200).send();
};
