import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  await prisma.aru.create({
    data: req.body,
  });

  res.status(200).send();
};
