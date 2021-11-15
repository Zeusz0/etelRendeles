import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Etel({ etel }) {
    return (
        <div>
            <Head>
                <title>{aru.nev}</title>
                <meta name="keywords" content="Etelrendeles, Etel"/>
            </Head>

            <main>
                <h2>{aru.nev}</h2>
                <p>{aru.leiras}</p>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const {id} = context.query

    const etel = await prisma.aru.findFirst({
        where: {
            id: id
        }
    })

    return {
        props: {
            etel
        }
    }
}