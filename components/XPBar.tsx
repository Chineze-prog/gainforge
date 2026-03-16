type Props = {
    xp: number
    level: number
}

export default function XPBar({xp, level}: Props){
    // the XP needed to reach the next level
    const xpNeeded = level * 100

    // pecentage of the way to the next level
    const percentage = Math.min((xp / xpNeeded) * 100, 100)

    return (
        <div>
            {/* XP label row */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 6,
            }}>
                <span style={{
                    fontSize: 11, 
                    color: '#a09ab8', 
                    textTransform: 'uppercase', 
                    letterSpacing: 1.5
                }}>
                    XP to Level {level + 1}
                </span>
                
                <span style={{
                    fontSize: 12, 
                    color: '#f5c542', 
                    fontWeight: 700
                }}>
                    {xp} / {xpNeeded}
                </span>
            </div>

            {/* Track the level (gray bar) */}
            <div style={{
                height: 8,
                background: 'rgba(255, 255, 255, 0.07)',
                borderRadius: 999,
                overflow: 'hidden',
            }}>
                {/* Fill the bar (coloured progress bar) */}
                <div style={{
                    height: '100%',
                    width: `${percentage}%`,
                    background: 'linear-gradient(90deg, #f5a623, #f5c542)',
                    borderRadius: 999,
                    transition: 'width 1s ease',
                }}/>
            </div>
        </div>
    )
}