
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import HeroSection from './components/herosection/HeroSection'
import Skills from './components/skills/Skills'

function App() {


  return (
    <>

      <Header />
      <div className='appfile'>




        <HeroSection />


        <About />
        <Skills />
        <h1>Services</h1>
        <h1>Portfolio</h1>
        <h1>Contact</h1>
      </div>
    </>


  )
}

export default App
