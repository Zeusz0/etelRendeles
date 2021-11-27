import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ételrendelés | Főoldal</title>
        <meta name="keywords" content="Etelrendeles, Főoldal" />
      </Head>
      <div>
        <h1 className={styles.title}>Kezdőlap</h1>
        <p>
          Halihó! Megéheztél? Vagy csak egy kicsi desszertre vágysz délután?
          Esetleg az esti bulihoz kéne egy hatalmas adag pizza? Bármilyen
          napszakban állnak rendelkezésedre partnereink, válogass kedvedre és
          élvezd az ételt a saját otthonodban.
        </p>
        <img src="diagrammok_kepernyokep/étel.jpg" alt="Étel" width="500" height="600"></img>
      </div>
    </>
  );
}
