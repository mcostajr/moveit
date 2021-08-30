import { Sidebar } from '../components/Sidebar'
import styles from '../styles/pages/Leaderboard.module.css'
import { GetStaticProps } from 'next'
import { api } from '../services/api'
import { connectToDatabase } from '../utils/mongodb'

interface LeaderBoard {
    id: string;
    name: string;
    image: string;
    level: number;
    challengesCompleted: number;
    currentExperience: number;
}

interface LeaderboardProps {
    leaderboardList: LeaderBoard[];
}

export default function Leaderboard({leaderboardList}: LeaderboardProps) {

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
                        {leaderboardList?.map((player, idx) => {
                            return (
                                <div key={player.name} className={styles.containerProfile}>
                                    <div><span>{idx+1}</span></div>
                                    <div className={styles.profileContainer}>
                                        <img src={player.image} alt={player.id}/>
                                        <div>
                                            <strong>{player.name}</strong>
                                            <p>
                                                <img src="icons/level.svg" alt="Level"/>
                                                Level {player.level}
                                            </p>
                                        </div>
                                    </div>
                                    <div><strong>{player.challengesCompleted}</strong>completados</div>
                                    <div><strong>{player.currentExperience}</strong>xp</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const { db } = await connectToDatabase();
    const collection = await db.collection('userUsers')
    .find()
    .sort({level: -1})
    .toArray()


    const leaderboardList = JSON.parse(JSON.stringify(collection))

    return {
      revalidate: 60,
  
      props: {
        leaderboardList
      }
    }

}