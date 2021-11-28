import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, telefonszam, cim, szamlazasi_cim } = req.body;
    await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        name: req.body.name,
        email: req.body.email[0],
        telefonszam: req.body.telefonszam[0],
        cim: req.body.cim[0],
        szamlazasi_cim: req.body.szamlazasi_cim[0],
      },
    });
  }
  if (req.method === "DELETE") {
    await prisma.user.delete({
      where: {
        id: req.body.id,
      },
    });
  }
  res.status(200).send();
};
