'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HeroClass } from "@/lib/data";
import XPBar from "@/components/XPBar";
import StatBar from "@/components/StatBar";

type Hero = {
    heroName: string
    heroClass: HeroClass
}

type HeroStats = {
    level: number
    xp: number
    strength: number
    endurance: number
    agility: number
}

export default function Dashboard(){
    const router = useRouter()
    const [hero, setHero] = useState<Hero | null>(null)

    //Default Stats
    const stats: HeroStats = {
        level: 7,
        xp: 180,
        strength: 24,
        endurance: 31,
        agility: 18,
    }

    useEffect(() => {
        // Read from localStorage when the page loads
        const storedData = localStorage.getItem('gainforge_hero')

        if(!storedData){
            // No hero found - send the user back to onboarding
            router.push('/')
            return
        }

        // Parse the JSON string back into an object
        const parsed: Hero = JSON.parse(storedData)
        setHero(parsed)
    }, [])

    // Show nothing while we're chevking localStorage
    if(!hero) return null

    return (
      <main style={{padding: 24, maxWidth: 480, margin: '0 auto'}}>
        {/* Hero Header */}
        <div style={{marginBottom: 24}}>
          <div style={{
            fontSize: 12,
            color: '#a09ab8', 
            letterSpacing: 2, 
            textTransform: 'uppercase',
          }}>
            {hero.heroClass.icon} {hero.heroClass.name}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 4,
            marginBottom: 16,
          }}>
            
            <h1 style={{fontSize: 24, fontWeight: 900}}>
              {hero.heroName}
            </h1>

            <div style={{
              background: 'rgba(245, 197, 66, 0.1)',
              border: '1px solid rgba(245, 197, 66, 0.3)',
              borderRadius: 99,
              padding: '4px 16px',
              fontSize: 13,
              color: '#f5c542',
              fontWeight: 700,
            }}>
              LVL {stats.level}
            </div>
          </div>

          <XPBar xp={stats.xp} level={stats.level} />
        </div>
        
        {/* STATS */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          borderRadius: 20,
          padding: 24,
          border: '1px solid rgba(255, 255, 255, 0.07)',
          marginBottom: 24,
        }}>
            <div style={{
                fontSize: 11,
                color: '#a09ab8',
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 16,
            }}>
                Character Stats
            </div>

            <StatBar label="Strength" value={stats.strength} color="#e85d2a" />
            <StatBar label="Endurance" value={stats.endurance} color="#2a9e5a" />
            <StatBar label="Agility" value={stats.agility} color="#7c3aed" />
        </div>

        <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: 20,
            padding: 24,
            border: '1px solid rgba(255, 255, 255, 0.07)',
            color: '#a09ab8',
            textAlign: 'center',
            fontSize: 14,
        }}>
            AI Coach Coming Soon...
        </div>
      </main>
    )
  }
