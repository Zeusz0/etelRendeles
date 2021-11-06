import Head from "next/head"
import Image from "next/image"
import Navbar from "../comps/Navbar"
import Footer from "../comps/Footer"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ételrendelés | Főoldal</title>
        <meta name="keywords" content="Etelrendeles, Főoldal" />
      </Head>
      <div>
        <h1 className="title">Kezdolap</h1> {/* styles.title stílus beállítása */}
        <p>
          Halihó!
          Megéheztél? Vagy csak egy kis desszertre vágysz délután? Esetleg az esti bulihoz kéne egy hatalmas adag pizza?
          Bármilyen napszakban állnak rendelkezésedre partnereink, válogass kedvedre és élvezd az ételt a saját otthonodban.
        </p>
      </div>
    </>
  )
}
