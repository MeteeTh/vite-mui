import SithanKKU1 from '../../images/Sithan KKU Festival 1.png'
import SithanKKU2 from '../../images/Sithan KKU Festival 2.png'
import SithanKKU3 from '../../images/Sithan KKU Festival 3.png'
import SithanKKU4 from '../../images/Sithan KKU Festival 4.png'
import SithanKKU5 from '../../images/Sithan KKU Festival 5.png'
import BrowseBy from '../Browse/Browse'
import './Content.css'

function Content() {
    return (

        <section id="content">
            <section id="content-container">

                <BrowseBy />

                <section id="news-container">

                    {/* Headline */}
                    <div className="whats-new">
                        <p className="uptext">what’s</p>
                        <p className="title">
                            <h1>NEW!</h1>
                        </p>
                    </div>

                    {/* รูปและหัวข้อข่าว ดึงข่าวจากฐานข้อมูล 'อัลบั้ม' ที่สร้างล่าสุด */}

                    {/* ปกอัลบั้ม */}
                    <div className="news-image-cover">
                        <img src="/public/images/Sithan KKU Festival.png" alt="album-cover" className="news-image" />
                    </div>

                    {/* ชื่ออัลบั้ม */}
                    <div className="news-title">
                        <a href="#" className="hover-underline-animation">
                            Sithan KKU Festival ตระการตาวิถีแห่งอีสาน สีฐานมูเตลู
                        </a>
                    </div>

                    {/* ตัวอย่าง 5 รูป */}
                    <div className="sithan-kku-festival-parent">
                        <img alt="image" src={SithanKKU1} />
                        <img alt="image" src={SithanKKU2} />
                        <img alt="image" src={SithanKKU3} />
                        <img alt="image" src={SithanKKU4} />
                        <img alt="image" src={SithanKKU5} />
                    </div>

                    {/* ปุ่มดูเพิ่มเติม ลิงก์ไปหน้าอัลบั้มรูป */}
                    <div className="view-more-container">
                        <a href="#" className="hover-underline-animation">ดูเพิ่มเติม →</a>
                    </div>
                </section>

                {/* ดึง 'อัลบั้ม' ที่สร้างล่าสุด */}
                <section id="album-container">
                    <div className="album-search">
                        <p className="uptext">ค้นหาภาพถ่ายโดย</p>
                        <p className="title">
                            <h1>ALBUM!</h1>
                        </p>
                    </div>

                </section>

                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo illo consequatur nisi, sapiente, facere soluta recusandae natus obcaecati atque nulla debitis dolores doloremque! Ea atque fugiat qui vero dolores.</p>

                </section>

            </section>
        </section>
    )
}

export default Content