import Link from "next/link"
import Head from "next/head"

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Ételrendelés | 404 Error</title>
        <meta name="keywords" content="Etelrendeles, 404" />
      </Head>
      <div>
        <h1>Na basszus......</h1>
        <h2>Ez az oldal nem nagyon létezik ám</h2>
        <p>Inkább menj vissza a <Link href="/"><a><i>kezdőoldalra</i></a></Link></p>
      </div>
    </>
  )
}

export default NotFound