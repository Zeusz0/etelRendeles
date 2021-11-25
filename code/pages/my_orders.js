import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const prisma = new PrismaClient();

const My_orders = ({ data }) => {
    const { data: session } = useSession();
    const [searchTerm, setSearchTerm] = useState("");
    if (session) {
        return (
            <>
                <Head>
                    <title>Ételrendelés | Rendeléseim</title>
                    <meta name="keywords" content="Etelrendeles, Rendeléseim" />
                </Head>
                <div>
                    <h1>Rendeléseim</h1>
                </div>
                <main>
                    <h2>Termékek</h2>
                    <h2>Szállítási cím</h2>
                    <h2>Kiszállítási díj</h2>
                    <h2>Borravaló</h2>
                    <h2>Végösszeg</h2>
                </main>
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

    return {
        props: {
            data: rendeles,
        },
    };
}