type Props = {
    label: string
    value: number
    max?: number
    color: string
}

export default function StatBar({label, value, max = 50, color}: Props){
    const percentage = Math.min((value / max) * 100, 100)

    return (
        <div style={{marginBottom: 14}}>
            {/* Label row */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 6,
            }}>
                <span style={{
                    fontSize: 12, 
                    color: '#a09ab8', 
                    textTransform: 'uppercase', 
                    letterSpacing: 1.5, 
                    fontWeight: 600
                }}>
                    {label}
                </span>

                <span style={{
                    fontSize: 13, 
                    color: '#e2d9f3', 
                    fontWeight: 700
                }}>
                    {value}
                </span>
            </div>

            {/* Track */}
            <div style={{
                height: 6,
                background: 'rgba(255, 255, 255, 0.07)',
                borderRadius: 999,
                overflow: 'hidden',
            }}>
                {/* Fill */}
                <div style={{
                    height: '100%',
                    width: `${percentage}%`,
                    background: `linear-gradient(90deg, ${color}88, ${color})`,
                    borderRadius: 999,
                    transition: 'width 1s ease',
                }}/>
            </div>
        </div>
    )
}