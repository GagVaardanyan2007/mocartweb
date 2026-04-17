import { herodata } from '../data/herdata'
import './App.css'
import Conteiners from './components/Conteiners'
import Hero from './components/homePage/Hero'


function App() {
  return (
    <div>
      <Hero data={herodata} />
      <Conteiners/>
    </div>
  )
}

export default App
