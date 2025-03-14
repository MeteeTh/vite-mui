import { Button } from '@mui/material'
import logoWhite from '../assets/CadLogoWhite.png'
import logoKKU from '../assets/KKU-Icon.png'
import './Header.css'
import { useState, useEffect } from 'react';


export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {  // กำหนดระยะห่างจากด้านบนที่ต้องการให้ header ย่อขนาด
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#" className="logo-link">
            <img src={logoWhite} alt="Logo" className="logo-white" />
          </a>
          <div className="navbar-container">
            <nav className="navbar">
              <ul>
                <li><a href="#">หน้าหลัก</a></li>
                <li><a href="#">เกี่ยวกับ</a></li>
                <li><a href="#">เงื่อนไขการให้บริการ</a></li>
              </ul>
            </nav>
            <Button className="login-btn" startIcon={<img src={logoKKU} alt="KKU Logo" className="login-icon" />}>KKU Login</Button>
          </div>
        </div>
      </header>
    </>
  )
}
