import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    await prisma.rendeles.create({
      data: {
        osszeg: req.body.osszeg,
        partner_id: req.body.partner_id,
        aruk: req.body.aru,
      },
    });
    console.log(req.body);
  }

  res.status(200).send();
};
