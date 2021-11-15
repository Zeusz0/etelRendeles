import Head from "next/head";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Etel({ etel, partner }) {
  return (
    <div>
      <Head>
        <title>{partner.name}</title>
        <meta name="keywords" content="Etelrendeles, Etel" />
      </Head>

      <main>
        {etel.map((item) => (
          <div key="item.id">
            <h2>{item.nev}</h2>
            <p>{item.leiras}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const partner = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  const etel = await prisma.aru.findMany({
    where: {
      partner_id: id,
    },
  });

  return {
    props: {
      etel,
      partner,
    },
  };
}
