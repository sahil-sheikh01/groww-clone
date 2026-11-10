import './Hero.css'
import citySpace from '../../assets/cityScape.svg'

const Hero = () => {
  return (
    <div className='hero-section'>
        <h1>Groww your wealth</h1>
        <button>Get started</button>
        <img src={citySpace} />
    </div>
  )
}

export default Hero