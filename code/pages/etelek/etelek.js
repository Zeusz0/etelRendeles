import Head from "next/head";
import React, {useState} from "react";
import {PrismaClient} from "@prisma/client";
import { async } from "@firebase/util";
import Link from "next/link";

const prisma = new PrismaClient();

export default function Etelek({ data }) {
    const [formData, setFormData] = useState({});
    const [etelek, setEtelek] = useState(data)

    async function addEtel(e) {
        e.preventDefault();
        setEtelek([...etelek, formData])
        const response = await fetch('/api/etelek', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        return await response.json()

    }

    
    return (
        <div>
            <Head>
                <title>Ételrendelés | Kínálatunk</title>
                <meta name="keywords" content="Etelrendeles, Kinalatunk"/>
            </Head>

            <main>
                <ul>
                    {etelek.map(item => (
                        <li key="item.id">
                            <span><strong>{item.nev}</strong></span>
                            <span>{item.leiras}</span>
                            <span>{item.ar}</span>
                            <Link href={`/etelek/${item.id}`}>
                                <a>Tudj meg többet erről az ételről</a>
                            </Link>
                        </li>
                    ))}
                </ul>

                <form onSubmit={addEtel}>
                    <input type="text" placeholder="Megnevezés" name="nev" onChange={e => setFormData({ ...formData, nev: e.target.value })}/>
                    <textarea name="leiras" id="" cols="30" rows="10" placeholder="Leírás" onChange={e => setFormData({ ...formData, leiras: e.target.value })} />
                    <input type="text" placeholder="Ár" name="ar" onChange={e => setFormData({ ...formData, ar: e.target.value })} />
                    <button type="submit">Étel hozzáadása a kínálathoz</button>
                </form>

            </main>
        </div>
    );
}

export async function getServerSideProps(){

    const etelek = await prisma.aru.findMany()

    return {
        props: {
            data : etelek
        }
    }

}