import Layout from "../comps/Layout"
import "../config/firebase.config"
import "../styles/globals.css"
import { AuthProvider } from "../hook/auth"
import AuthStateChanged from "../layout/AuthStateChanged"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AuthProvider>
        <AuthStateChanged>
          <Component {...pageProps} />
        </AuthStateChanged>
      </AuthProvider>
    </Layout>
  )
}

export default MyApp
