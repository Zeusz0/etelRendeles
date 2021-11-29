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
        <div id="indexkep">
          <Image
            alt=""
            className="bottom"
            src={"/etel.jpg"}
            width={1500}
            height={600}
          />
          <Image
            alt=""
            className="top"
            src={"/./logo.png"}
            width={1500}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
