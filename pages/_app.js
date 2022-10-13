import '../styles/globals.css'
import StoreProvider from "../store/store-context";
import Sidebar from "../components/sidebar/sidebar";

function MyApp({ Component, pageProps }) {

  return (
    <StoreProvider>
      <div>
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  )
}

export default MyApp
