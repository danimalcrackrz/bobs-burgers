import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { apiState, filteredState, loadingState } from "./atoms"
import Loading from "./components/Loading"
import Search from "./components/Search"
import Character from "./components/Character"
import { motion } from "framer-motion"
import "./index.css"

function App() {
  const [loading, setLoading] = useRecoilState(loadingState)
  const [charList, setCharList] = useRecoilState(apiState)
  const [filter, setFilter] = useRecoilState(filteredState)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    const url = "https://bobsburgers-api.herokuapp.com/characters?orderBy=name"
    const fetchChar = async () => {
      const resp = await fetch(url)
      const body = await resp.json()
      console.log(body)
      setCharList(body)
    }
    fetchChar()
  }, [])

  return (
    <div className='App'>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.8, ease: "easeIn", duration: 0.8 }}
        >
          <Search />
        </motion.div>
      )}
      {filter.length == 0 ? (
        <div className='results'>
          {charList.map((obj, index) => (
            <Character key={index} character={charList[index]} />
          ))}
        </div>
      ) : (
        <div className='results'>
          {filter.map((obj, index) => (
            <Character key={index} character={filter[index]} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
