'use client' //anything that uses interactivity like state, event listeners, and browser APIs should run in the browser instead of server {run on the client side}

import { useState } from "react";

export default function Home() {
  const [heroName, setHeroName] = useState('') // heroName state initially an empty string

  return (
    <main>
      <h1>Welcome to GainForge</h1>
      <input 
        type="text" 
        placeholder="Enter your hero name..." 
        value={heroName}  //makes the input a controlled input so the displayed value is always whatever heroName is currently
        onChange={(name) => setHeroName(name.target.value)} //name-event object, name.target-input element, name.target.value-text in the box
        style={{padding: 10, fontSize: 16, marginRight: 10}}
      />
      {heroName && <p> Greetings, <strong>{heroName}</strong>! Your quest begins.</p>} {/*if heroName is not an empty string*/}
    </main>
  );
}
