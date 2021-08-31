import { FaAward } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { HiLogout  } from 'react-icons/hi';

import styles from '../styles/components/Sidebar.module.css'
import { signOut, useSession } from 'next-auth/client';

export function Sidebar() {

    const [session, loading] = useSession()

    return (
        <aside className={styles.container}>
            <section className={styles.logo}>
                <img src="./logo-sidebar.svg" alt="logo-sidebar"/>
            </section>
            <section>
                <nav className={styles.containerNavigation}>
                    <a href="/" className={styles.navigationButton}>
                        <AiOutlineHome size={35}/>
                    </a>
                    <a href="/leaderboard" className={styles.navigationButton}>
                        <FaAward size={35}/>
                    </a>
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