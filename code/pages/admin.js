//EZ EGY TESZTELŐ OLDAL!

import React from "react";
import { withProtected } from "../hook/route"


function Admin({auth}){


  return(
    <div>
      <h1>BE AVGY JELENTKEZVE CSAK OKOSAN !!!</h1>
        <h1>EZ EGY TESZTELŐ OLDAL!</h1>
    </div>
  )
}

export default withProtected(Admin);