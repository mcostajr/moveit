import { Profile } from '../components/Profile'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/pages/Leaderboard.module.css'

export default function Leaderboard() {
    return (
        <div className={styles.container}>

            <aside>
                <Sidebar/>
            </aside>

            <div className={styles.containerLeaderboard}>
                <h1>Leaderboard</h1>
                <div className={styles.containerRanking}>
                    <div className={styles.headerRanking}>
                        <div><span>POSIÇÃO</span></div>
                        <div><span>USUÁRIO</span></div>
                        <div><span>DESAFIOS</span></div>
                        <div><span>EXPERIÊNCIA</span></div>
                    </div>
                    <div className={styles.bodyRanking}>
                        <div className={styles.containerProfile}>
                            <div><span>1</span></div>
                            <div><Profile/></div>
                            <div><strong>10</strong>completados</div>
                            <div><strong>33</strong>xp</div>
                        </div>
                        <div className={styles.containerProfile}>
                            <div><span>2</span></div>
                            <div><span>João</span></div>
                            <div><strong>10</strong>completados</div>
                            <div><strong>22</strong>xp</div>
                        </div>
                        <div className={styles.containerProfile}>
                            <div><span>3</span></div>
                            <div><span>Luan</span></div>
                            <div><strong>2</strong>completados</div>
                            <div><strong>10</strong>xp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}