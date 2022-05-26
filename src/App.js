import { useEffect } from "react"
import Character from "./components/Character"
import Navbar from "./components/Navbar"
import useStore from "./store"
import "./index.css"

function App() {
  const setData = useStore((state) => state.setData)
  const data = useStore((state) => state.data)

  useEffect(() => {
    const url = "https://bobsburgers-api.herokuapp.com/characters?orderBy=name"
    const fetchData = async () => {
      const resp = await fetch(url)
      const body = await resp.json()
      console.log(body)
      setData(body)
    }
    fetchData()
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <div className='card-container'>
        {data.map((obj, index) => (
          <Character key={index} character={data[index]} />
        ))}
      </div>
    </div>
  )
}

export default App
