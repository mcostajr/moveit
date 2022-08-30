import { FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { HiLogout } from "react-icons/hi";

import styles from "../styles/components/Sidebar.module.css";
import { signOut } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";

export function Sidebar() {
  const router = useRouter();

  const currentRouter = router.pathname;

  return (
    <aside className={styles.container}>
      <section className={styles.logo}>
        <img src="./logo-sidebar.svg" alt="logo-sidebar" />
      </section>
      <section>
        <nav className={styles.containerNavigation}>
          <Link href="/">
            <a
              className={`${styles.navigationButton} ${
                currentRouter == "/" && styles.navigationButtonActive
              }`}
            >
              <AiOutlineHome size={35} />
            </a>
          </Link>
          <Link href="/leaderboard">
            <a
              className={`${styles.navigationButton} ${
                currentRouter == "/leaderboard" && styles.navigationButtonActive
              }`}
            >
              <FaAward size={35} />
            </a>
          </Link>
        </nav>
      </section>
      <section className={styles.logout}>
        <button onClick={() => signOut()} className={styles.logoutButton}>
          <HiLogout />
        </button>
      </section>
    </aside>
  );
}
