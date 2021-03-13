import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabens</strong>
                <p>Voce alcancou um novo level</p>
            
                <button type='button' onClick={closeLevelUpModal}>
                    <img src="icons/close.svg" alt="Close Modal"/>
                </button>
            </div>
            <button className={styles.containerButton}>
                <span>Compartilhar no Twitter</span>
                <img src="./icons/twitter.svg" alt="twitter"/>
            </button>
        </div>
    )
}