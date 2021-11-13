import Head from "next/head";
import {useState} from "react";
import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();


const Registration = ({data}) => {
    const [formData, setFormData] = useState({});


    async function registration(e) {
        e.preventDefault()
        const response = await fetch('/api/felhasznalok', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        console.log(formData);
    }

    return (
        <>
            <Head>
                <title>Ételrendelés | Regisztráció</title>
                <meta name="keywords" content="Etelrendeles, Regisztracio"/>
            </Head>
            <div>
                <h1>Regisztráció</h1>
            </div>
            <div>
                <form onSubmit={registration}>
                    <input type="text" placeholder="Név" name="nev"
                           onChange={e => setFormData({...formData, nev: e.target.value})}/>
                    <input type="email" placeholder="E-mail cím" name="email"
                           onChange={e => setFormData({...formData, email: e.target.value})}/>

                    {/*TODO kellene jelszó az adatbázisba F*/}
                    {/*<input type="jelszo" placeholder="Jelszó" name="jelszo"*/}
                    {/*       onChange={e => setFormData({...formData, jelszo: e.target.value})}/>*/}
                    {/*<input type="jelszo_ujra" placeholder="Jelszó mégegyszer" name="jelszo_ujra"*/}
                    {/*       onChange={e => setFormData({...formData, jelszo_ujra: e.target.value})}/>*/}

                    <input type="tel" placeholder="Telefonszám" name="telefonszam"
                           onChange={e => setFormData({...formData, telefonszam: e.target.value})}/>
                    <textarea name="cim" cols="30" rows="3" placeholder="Szállítási cím"
                              onChange={e => setFormData({...formData, cim: e.target.value})}/>
                    <textarea name="szmlazasicim" cols="30" rows="3" placeholder="Számlázási cím"
                              onChange={e => setFormData({...formData, szamlazasi_cim: e.target.value})}/>
                    <p>Miként regisztrál?</p>
                    <input type="radio" name="partner" value="false"
                           onChange={e => setFormData({...formData, partner: false})}/>
                    <label htmlFor="html">Felhasználó</label>
                    <input type="radio" name="partner" value="true"
                           onChange={e => setFormData({...formData, partner: true})}/>
                    <label htmlFor="html">Partner</label>

                    <button type="submit">Regisztráció</button>
                    <button type="submit">Mégse</button>
                </form>
            </div>
        </>
    )
        ;
};

export default Registration;

export async function getServerSideProps() {
    const users = await prisma.felhasznalok.findMany();

    return {
        props: {
            data: users,
        },
    };
}
