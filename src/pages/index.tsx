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
import { getSession,  } from 'next-auth/client';

export default function Home({user}) {
    
    return (
        <main className={styles.container}>
            <Head>
                <title>Inicio | move.it</title>
            </Head>
        
            <ChallengesProvider user={user}>
                <div className={styles.containerChallenge}>
                    <ExperienceBar />
                    <CountdownProvider>
                        <section>
                        <div>
                            <Profile/>
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
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const session = await getSession(ctx)

    if(!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const user = session.user

    return {
        props: {
            user
        }
    }
}