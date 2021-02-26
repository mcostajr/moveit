import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import Styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const purcentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel;
    
    return (
        <header className={Styles.experienceBar} >
            <span>0 xp</span>
            <div>
                <div style={{ width: `${purcentToNextLevel}%` }}/>
                <span className={Styles.currentExpecience} style={{ left: `${purcentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}