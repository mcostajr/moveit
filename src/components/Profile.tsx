import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
    username: string
}

export function Profile({username}: ProfileProps) {
    const { level } = useContext(ChallengesContext);
    
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