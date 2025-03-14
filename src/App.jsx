import { Button } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import FilterSearch from './components/FilterSearch'
import SearchBox from './components/Search'
import SithanKKU1 from './images/Sithan KKU Festival 1.png'
import SithanKKU2 from './images/Sithan KKU Festival 2.png'
import SithanKKU3 from './images/Sithan KKU Festival 3.png'
import SithanKKU4 from './images/Sithan KKU Festival 4.png'
import SithanKKU5 from './images/Sithan KKU Festival 5.png'

function App() {

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <img src="/src/assets/mainlogo.png" alt="Background" className="hero-image" />
        <SearchBox />
      </section>

      {/* Content Section */}
      <main className="content">
        <section>
          <FilterSearch />

          <div className="news-container">
            <div className="whats-new">
              <p className="whats">what’s</p>
              <p className="new">
                <h1>NEW!</h1>
              </p>
            </div>

            <img src="/src/images/Sithan KKU Festival.png" alt="" className="news-image" />

            <div className="news-title">
              <a href="#" className="hover-underline-animation">
                Sithan KKU Festival ตระการตาวิถีแห่งอีสาน สีฐานมูเตลู
              </a>
            </div>
            <div className="sithan-kku-festival-parent">
              <img alt="image" src={SithanKKU1} />
              <img alt="image" src={SithanKKU2} />
              <img alt="image" src={SithanKKU3} />
              <img alt="image" src={SithanKKU4} />
              <img alt="image" src={SithanKKU5} />
            </div>
            <div className="view-more-container">
              <a href="#" className="hover-underline-animation">ดูเพิ่มเติม →</a>
            </div>
          </div>

          <div className="album-container">
            <div className="album-search">
              <p className="album-uptext">ค้นหาภาพถ่ายโดย</p>
              <p className="album-title">
                <h1>ALBUM!</h1>
              </p>
            </div>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>
          <Button>Click me !</Button>
        </section>
      </main>



      <Footer />
    </>
  )
}

export default App
