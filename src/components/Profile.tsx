import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { user,level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src={user.image} alt={user.id}/>
            <div>
                <strong>{user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}