import React, { useState } from "react"
import { motion } from "framer-motion"
import "../index.css"

const Character = ({ character }) => {
  const [flipped, setFlip] = useState(false)

  return (
    <motion.div
      className='card'
      onHoverStart={() => setFlip(true)}
      onHoverEnd={() => setFlip(false)}
      whileHover={{
        rotateY: 180,
        perspective: 1000,
        transformStyle: "preserve-3d",
        transition: { ease: "easeOut", duration: 1 },
      }}
    >
      <div className='card-inner'>
        {flipped ? (
          <div className={"card-back" + flipped ? "is-flipped" : null}>
            <p>Gender: {character.gender}</p>
            <p>Hair Color: {character.hairColor}</p>
            <p>Occupation: {character.occupation}</p>
            <p>Voiced by: {character.voicedBy}</p>
            <p>First Episode: {character.firstEpisode}</p>
          </div>
        ) : (
          <div className='card-front'>
            <img src={character.image} />
            <h1>{character.name}</h1>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Character
