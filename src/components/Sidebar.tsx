import { FaAward } from 'react-icons/fa';
import { AiOutlineHome  } from 'react-icons/ai';

import styles from '../styles/components/Sidebar.module.css'

export function Sidebar() {

    return (
        <div className={styles.container}>
            <a href="/">
                <img src="./logo-sidebar.svg" alt="logo-sidebar"/>
            </a>
            <main className={styles.containerNavigation}>
                <a href="/home" className={styles.navigationButton}>
                    <AiOutlineHome size={35}/>
                </a>
                <a href="/leaderboard" className={styles.navigationButton}>
                    <FaAward size={35}/>
                </a>
            </main>
        </div>
    );
}