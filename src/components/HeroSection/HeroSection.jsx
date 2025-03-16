import SearchBox from '../SearchBox/Search'
import './HeroSection.css'

function HeroSection() {
    return (

        <section className="hero-section">
            <img src="/src/assets/mainlogo.png" alt="Background" className="hero-image" />
            
            <SearchBox />
        </section>

    )
}

export default HeroSection;