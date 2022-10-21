import '../styles/globals.css'
import styles from '../styles/Home.module.css';
import StoreProvider from "../store/store-context";
import Sidebar from "../components/sidebar/sidebar";

function MyApp({ Component, pageProps }) {

  return (
    <StoreProvider>
        <Sidebar />
        <div className={styles.scrollable}>
          <Component {...pageProps} />
        </div>
    </StoreProvider>
  )
}

export default MyApp
