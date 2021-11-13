import Head from "next/head";
import { useState } from "react";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

const Registration = ({data}) => {

  const [formData, setFormData] = useState({})

  return (
    <>
      <Head>
        <title>Ételrendelés | Regisztráció</title>
        <meta name="keywords" content="Etelrendeles, Regisztracio" />
      </Head>
      <div>
        <h1>Regisztráció</h1>
      </div>
      <div>
        <h1>Regisztrált felhasználóink: </h1>
        <ul>
          {data.map(item =>(
            <li key="item.id">{item.nev}</li>
          ))}
        </ul>
            
        {/*<form onSubmit={saveMovie}>
                    <input type="text" placeholder="Title" name="title" onChange={e => setFormData({ ...formData, title: e.target.value })}/>
                    <input type="text" placeholder="Year" name="year" onChange={e => setFormData({ ...formData, year: +e.target.value })} />
                    <textarea name="description" id="" cols="30" rows="10" placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
                    <input type="text" placeholder="Slug" name="slug" onChange={e => setFormData({ ...formData, slug: e.target.value })} />
                    <button type="submit">Add movie</button>
          </form> */}
      </div>
    </>
  )
}

export default Registration;

export async function getServerSideProps(){

  const users = await prisma.felhasznalo.findMany();

  return{
    props: {
      data: users
    }
  }
}


