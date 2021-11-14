import React from "react";
import { withProtected } from "../hook/route"


function Admin({auth}){
  const {logout} = auth;

  return(
    <div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default withProtected(Admin);