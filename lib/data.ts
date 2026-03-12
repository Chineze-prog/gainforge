export const HERO_CLASSES = [
    {
        id: 'warrior',
        name: 'Warrior',
        icon: '⚔️',
        description: 'Excels at strength training',
        primaryStat: 'Strength',
        color: '#e85d2a'
    },
    {
        id: 'ranger',
        name: 'Ranger',
        icon: '🏹',
        description: 'Built for cardio and endurance',
        primaryStat: 'Endurance',
        color: '#2a9e5a'
    },
    {
        id: 'monk',
        name: 'Monk',
        icon: '🥋',
        description: 'Master of flexibility and ability',
        primaryStat: 'Agility',
        color: '#7c3aed'
    },
]

export type HeroClass = typeof HERO_CLASSES[number]