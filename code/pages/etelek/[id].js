import Head from "next/head";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const prisma = new PrismaClient();

export default function Etel({ etel, partner }) {
  const { data: session } = useSession();
  const deleteFood = async (e, value) => {
    const response = await fetch("/api/food", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: value }),
    });

    if (response.ok) {
      location.reload();
    }
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
              <HStack justifyContent="space-between" key={item.id}>
                <h2> {item.nev} </h2>
                <p> {item.ar}Ft </p>
                <p> {item.leiras} </p>
                <HStack>
                  <button>MEGRENDELEM</button>
                  {session?.id === partner.id && (
                    <Button onClick={(e) => deleteFood(e, item.id)}>
                      TÖRLÉS
                    </Button>
                  )}
                </HStack>
              </HStack>
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
