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
                    <div className="news-latest">
                        <p className="uptext">what’s</p>
                        <p className="title">
                            <h1>NEWS!</h1>
                        </p>
                    </div>

                    {/* รูปและหัวข้อข่าว ดึงข่าวจากฐานข้อมูล 'อัลบั้ม' ที่สร้างล่าสุด */}
                    {/* ปกอัลบั้ม */}
                    <div className="news-image-cover">
                        <img src="/images/Sithan KKU Festival.png" alt="album-cover" className="news-image" />
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
                <section id="albums-container">
                    {/* Headline */}
                    <div className="albums-latest">
                        <p className="uptext">ค้นหาภาพถ่ายโดย</p>
                        <p className="title">
                            <h1>ALBUMS!</h1>
                        </p>
                    </div>

                    {/* รายการอัลบั้ม 3 รายการล่าสุด */}
                    <div className="albums">
                        <div className="the-album">
                            <div className="album-thumb">
                                <img className="album-cover" alt="album-cover" src="https://placehold.co/320x220" />
                            </div>
                            <div className="album-about">
                                <div className="album-qty">จำนวน 72 รายการ</div>
                                <div className="album-title">Sithan Festival Day 3 ตระการตาวิถีแห่งอีสานสีฐานมูเตลู</div>
                            </div>
                        </div>
                        <div className="the-album">
                            <div className="album-thumb">
                                <img className="album-cover" alt="album-cover" src="https://placehold.co/320x220" />
                            </div>
                            <div className="album-about">
                                <div className="album-qty">จำนวน 124 รายการ</div>
                                <div className="album-title">Sithan Festival Day 2 KKU Carnival ค่ำคืนแห่งมหาสนุก</div>
                            </div>
                        </div>
                        <div className="the-album">
                            <div className="album-thumb">
                                <img className="album-cover" alt="album-cover" src="https://placehold.co/320x220" />
                            </div>
                            <div className="album-about">
                                <div className="album-qty">จำนวน 97 รายการ</div>
                                <div className="album-title">Sithan Festival Day 1 ขบวนแห่พระบรมสารีริกธาตุ</div>
                            </div>
                        </div>

                        <div className="the-album">
                            <div className="album-thumb">
                                <img className="album-cover" alt="album-cover" src="https://placehold.co/320x220" />
                            </div>
                            <div className="album-about">
                                <div className="album-qty">จำนวน 58 รายการ</div>
                                <div className="album-title">Fin Fun Festival</div>
                            </div>
                        </div>

                    </div>

                    {/* ปุ่มดูเพิ่มเติม ลิงก์ไปหน้าอัลบั้มรูป */}
                    <div className="view-more-container">
                        <a href="#" className="hover-underline-animation">ดูเพิ่มเติม →</a>
                    </div>
                </section>

                <section id="categories-container">
                    {/* Headline */}
                    <div className="categories-latest">
                        <p className="uptext">ค้นหาภาพถ่ายโดย</p>
                        <p className="title">
                            <h1>CATAGORIES!</h1>
                        </p>
                    </div>

                    <div className="catagories">
                        <div className="the-catagory">
                            {/* <div className="catagory-bg" /> */}
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">สภาพแวดล้อม และพื้นที่ส่วนกลาง</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">สิ่งอำนวยความสะดวกและการใช้ชีวิตในมหาวิทยาลัยขอนแก่น</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">บรรยากาศ การเรียนการสอน</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">การวิจัยและนวัตกรรม</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">เทรนด์ดิจิทัลโลกแห่งอนาคต</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">ผู้บริหาร</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">ศิลปวัฒนธรรมและศิลปสร้างสรรค์</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">กิจกรรมช่วยเหลือชุมชน</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">กิจกรรม นักศึกษานานาชาติ</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">พิธีปริญญาบัตร และรัฐพิธีสำคัญ</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">กีฬา และนันทนาการ</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">สภาพแวดล้อมมุมสูง</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-title">วิทยาศาสตร์และวิทยาศาสตร์สุขภาพ</div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">คอนเสิร์ต และการแสดง</div>
                            </div>
                        </div>
                        <div className="the-catagory">
                            <div className="catagory-thumb">
                                <img className="category-cover" alt="category-cover" src="https://placehold.co/250x250" />
                            </div>
                            <div className="catagory-about">
                                <div className="catagory-title">สัญลักษณ์ มหาวิทยาลัยขอนแก่น</div>
                            </div>
                        </div>
                    </div>

                </section>

            </section>
        </section >
    )
}

export default Content