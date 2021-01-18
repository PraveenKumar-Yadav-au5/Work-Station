import React, {useState} from 'react'
import FavoPlanetList from './Components/FavoPlanetList'
import Planet from './Components/Planet'

function App() {
  let [state, setstate] = useState(5)
  return (
   <>
   <h1>home</h1>
   < Planet data={state} data2= "hi" />
   {/* < FavoPlanetList /> */}
   </>
  )
}

export default App;
