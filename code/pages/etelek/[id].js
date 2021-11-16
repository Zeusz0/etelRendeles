import Head from "next/head";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Etel({ etel, partner }) {
  const deleteFood = async (e, value) => {
    const response = await fetch("/api/deletefood", {
      method: "POST",
      body: JSON.stringify(value),
    });

    return await response.json();
  };

  return (
    <>
      <div>
        <Link href={`../forms/AddFood`}>
          <a>
            <h1>Hozzá adnál Valami finomat?</h1>
          </a>
        </Link>
      </div>
      <div>
        <Head>
          <title>{partner.name}</title>
          <meta name="keywords" content="Etelrendeles, Etel" />
        </Head>

        <main>
          {etel.map((item) => (
            <>
              <div key="item.id">
                <button onClick={(e) => deleteFood(e, item.id)}>TÖRLÉS</button>
                <h2>{item.nev}</h2>
                <p>{item.ar}Ft</p>
                <p>{item.leiras}</p>
              </div>
            </>
          ))}
        </main>
      </div>
    </>
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
