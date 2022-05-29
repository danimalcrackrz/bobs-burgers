import React from "react"
import { TailSpin } from "react-loader-spinner"
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <motion.div
      className='loading'
      animate={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <TailSpin color={"var(--yellow-color)"} />
    </motion.div>
  )
}

export default Loading
