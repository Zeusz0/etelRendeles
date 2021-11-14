import Layout from "../comps/Layout"
import "../config/firebase.config"
import "../styles/globals.css"
import { AuthProvider } from "../hook/auth"
import AuthStateChanged from "../layout/AuthStateChanged"
import AppLayout from "../layout/AppLayout"

function MyApp({ Component, pageProps }) {
  return (

    <AuthProvider>
      <Layout>
        <AppLayout>
          <AuthStateChanged>
            <Component {...pageProps} />
          </AuthStateChanged>
        </AppLayout>
      </Layout>
    </AuthProvider>

  )
}

export default MyApp
