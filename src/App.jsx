import { HashRouter as Router , Routes , Route , Link } from 'react-router-dom'
import Head from './Head' 
import Homepage from './Homepage' 
import Contact from './Contact' 
import About from './About'
import Works from './Works' 
import Bgimg from "../src/assets/Bg.png"

const App = () => {
  return (
    <div
    style={{backgroundImage:`url(${Bgimg})`}} 
    className='text-white bg-blue-950'
    >
      <Router>
        <div>
          <Head></Head> 
          <Routes>
            <Route path='/' element={<Homepage/>} /> 
            <Route path='/about' element={<About/>} /> 
            <Route path='/contact' element={<Contact/>} /> 
            <Route path='/works' element={<Works/>} /> 
            <Route path='*' element ={<Homepage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App