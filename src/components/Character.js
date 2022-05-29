import React, { useState } from "react"

const Character = ({ character }) => {
  const [flipped, setFlip] = useState(false)

  return (
    <div className='character-card' onClick={() => setFlip(!flipped)}>
      {!flipped ? (
        <div className='character-header'>
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
        </div>
      ) : (
        <div className='character-content'>
          <p>First Appearance: {character.firstEpisode}</p>
          <p>Voiced by: {character.voicedBy}</p>
        </div>
      )}
    </div>
  )
}

export default Character
