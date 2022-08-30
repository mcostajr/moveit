import "../styles/global.css";
import styles from "../styles/global.module.css";
import { Provider } from "next-auth/client";
import { Sidebar } from "../components/Sidebar";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className={styles.container}>
      <Provider session={pageProps.session}>
        {router.pathname != "/login" && <Sidebar />}
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
