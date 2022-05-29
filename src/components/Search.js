import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { apiState, filteredState, searchState } from "../atoms"
import logo from "../assets/logo.png"

import "../index.css"

const Search = () => {
  const [charList, setCharlist] = useRecoilState(apiState)
  const [input, setInput] = useRecoilState(searchState)
  const [filter, setFilter] = useRecoilState(filteredState)

  useEffect(() => {
    setFilter(
      charList.filter((char) => {
        return char.name.toLowerCase().includes(input.toLowerCase())
      })
    )
  }, [input])

  return (
    <div className='search'>
      <img src={logo} alt='logo' />
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a Character, Episode, etc... '
      />
    </div>
  )
}

export default Search
