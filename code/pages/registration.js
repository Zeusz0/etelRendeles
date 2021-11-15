import Head from "next/head";
import React, {useState} from "react";
import {PrismaClient} from "@prisma/client";
import { withPublic } from "../hook/route"


// const prisma = new PrismaClient();

function Registration({auth}, data){


    const [formData, setFormData] = useState({});



    async function registration(e) {
        if(formData.password === formData.password_again){
            e.preventDefault()
            const response = await fetch('/api/auth/sign-up', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            console.log(formData);
        }
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
                  <input type="text" placeholder="Név" name="name" required
                         onChange={e => setFormData({...formData, name: e.target.value})}/>
                  <input type="email" placeholder="E-mail cím" name="email" required
                         onChange={e => setFormData({...formData, email: e.target.value})}/>
                  <input type="password" placeholder="Jelszó" name="password" required
                         onChange={e => setFormData({...formData, password: e.target.value})}/>
                  <input type="password" placeholder="Jelszó mégegyszer" name="password_again" required
                         onChange={e => setFormData({...formData, password_again: e.target.value})}/>

                  <input type="tel" placeholder="Telefonszám" name="tel" required
                         onChange={e => setFormData({...formData, tel: e.target.value})}/>
                  <textarea name="cim" cols="30" rows="3" placeholder="Szállítási cím" required
                            onChange={e => setFormData({...formData, address: e.target.value})}/>
                  <textarea name="szmlazasicim" cols="30" rows="3" placeholder="Számlázási cím" required
                            onChange={e => setFormData({...formData, billingAddress: e.target.value})}/>
                  <p>Miként regisztrál?</p>
                  <input type="radio" name="partner" value="false" required
                         onChange={e => setFormData({...formData, partner: false})}/>
                  <label htmlFor="html">Felhasználó</label>
                  <input type="radio" name="partner" value="true"
                         onChange={e => setFormData({...formData, partner: true})}/>
                  <label htmlFor="html">Partner</label>

                  <button type="submit">Regisztráció</button>
                  <button type="reset">Mégse</button>
              </form>
          </div>
      </>
    )
      ;
}

export default withPublic(Registration);


// export async function getServerSideProps() {
//     const users = await prisma.felhasznalok.findMany();
//
//     return {
//         props: {
//             data: users,
//         },
//     };
// }
