import Link from 'next/link'

const NotFound = () => {
    return ( <div>
        <h1>Na basszus......</h1>
        <h2>Ez az oldal nem nagyon létezik ám</h2>
        <p>Inkább menj vissza a <Link href="/"><a><i>kezdőoldalra</i></a></Link></p>
    </div> 
    );
}
 
export default NotFound;