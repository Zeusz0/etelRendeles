import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const createdFood = await prisma.aru.create({
    data,
  });

  res.json(createdFood);
};
