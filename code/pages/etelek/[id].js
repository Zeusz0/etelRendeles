import Head from "next/head";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Stack, HStack, VStack, Text, Heading } from "@chakra-ui/react";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const prisma = new PrismaClient();

export default function Etel({ etel, partner }) {
  const { data: session } = useSession();
  const router = useRouter();

  const etelObject = useMemo(
    () => Object.fromEntries(etel.map(({ id, ...rest }) => [id, rest])),
    [etel]
  );

  const [cart, setCart] = useState({});

  const filteredCartEntries = useMemo(
    () => Object.entries(cart).filter(([, quantity]) => quantity > 0),
    [cart]
  );

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

  useEffect(() => {
    if (session !== undefined && session === null) {
      router.push("/");
    }
  }, [router, session]);

  async function megrendeles() {
    const resp = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        osszeg: filteredCartEntries.reduce(
          (acc, [id, quantity]) => acc + etelObject[id].ar * quantity,
          0
        ),
        partner_id: session.id,
        aru: filteredCartEntries.map(([id]) => +id),
        etterem: partner.name,
      }),
    });

    if (resp.ok) {
      router.push("/my_orders");
    }
  }

  return (
    <>
      <div>
        <h1>Üdvözlünk {partner.name} étterem oldalán</h1>

        {session?.id === partner.id && (
          <Link href={`../forms/AddFood`}>
            <a>
              <h1>Hozzá adnál Valami finomat?</h1>
            </a>
          </Link>
        )}
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
                  <button
                    onClick={() =>
                      setCart((prev) => ({
                        ...prev,
                        [item.id]: (prev[item.id] ?? 0) + 1,
                      }))
                    }
                  >
                    HOZZÁAD
                  </button>
                  {session?.id === partner.id && (
                    <Button onClick={(e) => deleteFood(e, item.id)}>
                      TÖRLÉS
                    </Button>
                  )}
                </HStack>
              </HStack>
            </>
          ))}

          {filteredCartEntries.length > 0 && (
            <HStack justifyContent="space-between">
              <Heading as="h2">Kosár tartalma</Heading>
              <Button onClick={() => setCart({})}>Kosár ürítése</Button>
            </HStack>
          )}
          {filteredCartEntries.map(([id, quantity]) => (
            <HStack justifyContent="space-between" key={id}>
              <Text>{etelObject[id].nev}</Text>
              <HStack>
                <Text>
                  {quantity}db ({etelObject[id].ar * quantity} Ft)
                </Text>
                <IconButton
                  icon={<MinusIcon p={3} />}
                  onClick={() =>
                    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }))
                  }
                />
              </HStack>
            </HStack>
          ))}
          {filteredCartEntries.length > 0 && (
            <HStack justifyContent="space-between">
              <Text>
                Összesen:{" "}
                {filteredCartEntries.reduce(
                  (acc, [id, quantity]) => acc + etelObject[id].ar * quantity,
                  0
                )}{" "}
                Ft
              </Text>
              <Button onClick={megrendeles}>Megrendelem</Button>
            </HStack>
          )}
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
