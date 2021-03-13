import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengenBox } from '../components/ChallengeBox';
import { Sidebar } from '../components/Sidebar';

import { ChallengesProvider } from '../context/ChallengesContext';
import { CountdownProvider } from '../context/CountdownContext';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
    username: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inicio | move.it</title>
            </Head>
            <aside>
                <Sidebar />
            </aside>
        
            <ChallengesProvider
                level={props.level}
                currentExperience={props.currentExperience}
                challengesCompleted={props.challengesCompleted}
            >
                <div className={styles.containerChallenge}>
                

                <ExperienceBar />

                <CountdownProvider>
                    <section>
                    <div>
                        <Profile username={props.username}/>
                        <CompletedChallenges />
                        <Countdown />
                    </div>
                    <div>
                        <ChallengenBox />
                    </div>
                    </section>
                </CountdownProvider>
                </div>
            </ChallengesProvider>
            </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { username, level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
    return {
        props: {
            username: String(username),
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}