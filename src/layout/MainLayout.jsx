import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import Content from '../components/Content/Content'
import BackTop from '../components/back-top/back-top'
import './MainLayout.css'


function MainLayout() {

    return (
        <>
            <Header />
            <HeroSection />
            <Content />
            <BackTop />
            <Footer />
        </>
    )
}

export default MainLayout;
