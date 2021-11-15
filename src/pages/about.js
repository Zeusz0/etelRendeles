import Head from "next/head";
import prisma from "../prisma";

const About = ({ numOfUsers }) => {
  return (
    <>
      <Head>
        <title>Ételrendelés | Rólunk</title>
        <meta name="keywords" content="Etelrendeles, Rólunk" />
      </Head>
      <div>
        <h1>Rólunk</h1>
        <p>
          A mai rohanó világban cégünk szeretné megkönnyíteni az éhes emberek
          számára, hogy éttermi partnereinknél könnyedén találjanak nagyszerű,
          sokszínű ételeket, amelyeket a futárszolgálatunk tagjai időben
          kiszállítanak.
        </p>
        <p>
          Kapcsolatot építünk ki éttermek és kiskereskedők között, akik éleleket
          szeretnének készíteni és eladni, a futárok között, akik keresni
          szeretnének ezen termékek kiszállításával, és az ügyfelek között, akik
          időt és energiát szeretnének spórolni, hogy az élet fontosabb dolgaira
          összpontosíthassanak. Így városainkat is jobb hellyé tehetjük. Ezalatt
          pedig boldogabb embereket értünk. Boldogabb kisvállalkozásokat,
          amelyek több üzlettel rendelkeznek, és több embert tudnak
          foglalkoztatni, boldogabb futárokat, akiknek rugalmas módja van
          keresni, amikor úgy döntenek, boldogabb ügyfeleket, akik most könnyen
          hozzáférhetnek nagyszerű ételekhez.
        </p>
        <p>Aktív felhasználóink száma: {numOfUsers}</p>
      </div>
    </>
  );
};

const getServerSideProps = async () => {
  const numOfUsers = await prisma.user.count();

  console.log(numOfUsers);

  return {
    props: {
      numOfUsers,
    },
  };
};

export { getServerSideProps };
export default About;
