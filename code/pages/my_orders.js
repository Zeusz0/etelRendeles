import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { HStack } from "@chakra-ui/layout";

const prisma = new PrismaClient();

const My_orders = ({ rendeles, aruk }) => {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState("");
  if (session) {
    return (
      <>
        <h1>Rendeléseim</h1>
        <p>
          {rendeles
            .filter((item) => item.partner_id === session.id)
            .map((item) => (
              <>
                <HStack justifyContent="space-between" key={item.id}>
                  <p>| Étterem: {item.etterem}</p>
                  <p>| Fizetett összeg: {item.osszeg} Ft</p>
                  <p>| Rendelés dátuma: {item.datum.toString()}</p>
                  <p>| Rendelt ételek: </p>
                  {item.aruk.map((kaja) => (
                    <HStack justifyContent="space-between" key={kaja}>
                      {aruk
                        .filter((termek) => termek.id === kaja)
                        .map((termek) => (
                          <>
                            <p>{termek.nev}</p>
                            <p>|</p>
                          </>
                        ))}
                    </HStack>
                  ))}
                </HStack>
              </>
            ))}
        </p>
      </>
    );
  }
  return (
    <>
      <div>
        <h1>Kérlek jelentkezz be</h1>
      </div>
    </>
  );
};

export default My_orders;

export async function getServerSideProps() {
  const rendeles = await prisma.rendeles.findMany();
  const aruk = await prisma.aru.findMany();

  return {
    props: {
      rendeles,
      aruk,
    },
  };
}
