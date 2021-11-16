import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const deleteFood = await prisma.aru.delete({
    where: {
      id: parseInt(data),
    },
  });

  res.json(deleteFood);
};
