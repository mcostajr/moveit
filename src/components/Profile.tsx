import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    
    const username = 'mcostajr'
    const urlUser = `https://github.com/${username}.png`

    return(
        <div className={styles.profileContainer}>
            <img src={urlUser} alt={username}/>
            <div>
                <strong>{username}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}