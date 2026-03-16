'use client' //anything that uses interactivity like state, event listeners, and browser APIs should run in the browser instead of server {run on the client side}

import { useState } from "react";
import { HERO_CLASSES, HeroClass } from "@/lib/data";

//the shape of the hero's data
type Hero = {
  heroName: string
  heroClass: HeroClass
}

export default function Home() {
  // the current onboarding step the user is on
  const [step, setStep] = useState<number>(1)

  // heroName state initially an empty string
  const [heroName, setHeroName] = useState('') 

  // the user's hero class
  const [selectedClass, setSelectedClass] = useState<HeroClass | null>(null)

  // user's hero state
  const [hero, setHero] = useState<Hero | null> (null)

  function onFinish(){
    if(!heroName.trim() || !selectedClass){
      return
    }

    setHero({heroName: heroName.trim(), heroClass: selectedClass})
  }

  // when the onboarding is completed, show the dashboard placeholder
  if(hero){
    return (
      <main style={{padding:40}}>
        <h1>Welcome, {hero.heroName}!</h1>
        <p>Class: {hero.heroClass.icon} {hero.heroClass.name}</p>
        <p>Dashboard coming soon...</p>
      </main>
    )
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    }}>
      {/* ENTER NAME */}
      {step === 1 && (
        <div style={{textAlign: 'center', maxWidth: 400, width: '100%'}}>
          <h1 style={{fontSize: 48, marginBottom: 8}}>⚔️</h1>
          <h2 style={{fontSize: 28, marginBottom: 8}}>Name Your Hero</h2>
          <p style={{color: '#a09ab8', marginBottom: 32}}>What shall the world call you?</p>

          <input 
            type="text"
            placeholder="Enter your name..."
            value={heroName}
            onChange={(name) => setHeroName(name.target.value)}
            style={{
              width: '100%',
              padding: '14px 18px',
              borderRadius: 12,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#e2d9f3',
              fontSize: 18,
              marginBottom: 24,
              outline: 'none',
            }}
          />

          <button
            onClick={() => setStep(2)}
            disabled={!heroName.trim()}
            style={{
              padding: '14px 40px',
              borderRadius: 12,
              border: 'none',
              background: heroName.trim() ? '#7c3aed' : 'rgba(255, 255, 255, 0.05)',
              color: heroName.trim() ? '#fff' : '#555',
              fontSize: 16,
              cursor: heroName.trim() ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s'
            }}
          > 
            Continue → 
          </button>
        </div>
      )}
      

      {/* CHOOSE CLASS */}
      {step === 2 && (
        <div style={{maxWidth: 400, width: '100%'}}>
          <h2 style={{fontSize: 28, marginBottom: 8, textAlign: 'center'}}>
            Choose Your Class
          </h2>

          <p style={{color: '#a09ab8', marginBottom: 32, textAlign: 'center'}}>
            Your class shapes your stat growth
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32}}>
            {HERO_CLASSES.map((hero_class) => (
              <div
                key={hero_class.id}
                onClick={() => setSelectedClass(hero_class)}
                style={{
                  padding: '20px 24px',
                  borderRadius: 16,
                  border: `2px solid ${selectedClass?.id === hero_class.id ? hero_class.color: 'rgba(2555, 255, 255, 0.08)'}`,
                  background: selectedClass?.id === hero_class.id ? `${hero_class.color}18`: 'rgba(255, 255, 255, 0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  transition: 'all 0.2s',
                }}
              >
                <span style={{fontSize: 32}}>{hero_class.icon}</span>
                <div>
                  <div style={{fontWeight: 700, fontSize: 16}}>{hero_class.name}</div>
                  <div style={{color: '#a09ab8', fontSize: 13, marginTop: 2}}>{hero_class.description}</div>
                </div>

                {/* Checkmark appears when this class is selected */}
                {selectedClass?.id === hero_class.id && (
                  <span style={{marginLeft: 'auto', color: hero_class.color, fontSize: 20}}>✓</span>
                )}
              </div>
            ))}
          </div>

          <div style={{display: 'flex', gap: 12}}>
            {/* BACK */}
            <button
              onClick={() => setStep(1)}
              style={{
                padding: '14px 24px',
                borderRadius: 12,
                border:'1px solid rgba(255, 255, 255, 0.1)',
                background: 'transparent',
                color: '#a09ab8',
                fontSize: 16,
                cursor: 'pointer',
              }}
            > 
              ← Back 
            </button>

            {/* FINISH */}
            <button
              onClick={onFinish}
              disabled={!selectedClass}
              style={{
                flex: 1,
                padding: '14px 24px',
                borderRadius: 12,
                border: 'none',
                background: selectedClass ? '#7c3aed' : 'rgba(255, 255, 255, 0.05)',
                color: selectedClass ? '#fff' : '#555',
                fontSize: 16,
                cursor: selectedClass ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
              }}
            > 
              Enter GainForge → 
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
