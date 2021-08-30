import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import { api } from '../services/api';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface User {
    id: string;
    name: string;
    image: string;
}

interface ChallengeContextData {
    user: User;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
    user: any;
}

export const ChallengesContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({children,...rest}: ChallengesProviderProps) {
    const [user, setUser] = useState(rest.user ?? {});
    const [level, setLevel] = useState(rest.user.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.user.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.user.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
    const [isloading, setIsLoading] = useState(true)

    const experienceToNextLevel = Math.pow((level+1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        if(isloading)
            return setIsLoading(false);

        api.put(`/api/user/${rest.user.id}`, 
            { 
                level: level, 
                currentExperience: currentExperience, 
                challengesCompleted: challengesCompleted 
            })
        .then()

    }, [level, currentExperience, challengesCompleted])

    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio', {
                body: `Valendo  ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp(); 
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengesContext.Provider 
            value={{
                user,
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal,
            }}
        > 
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}