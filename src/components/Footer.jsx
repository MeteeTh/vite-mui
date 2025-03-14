import { useCallback } from 'react';
import LogoColor from '../assets/CadLogoColor.png';
import CadIcon from '../assets/Cad-Icon.png';
import KKUIcon from '../assets/KKU-Icon.png';
import './Footer.css';

export default function Footer() {

  const onKkuIconImageClick = useCallback(() => {
    window.open("https://www.kku.ac.th/");
  }, []);
  const onCadIconImageClick = useCallback(() => {
    window.open("https://cad.kku.ac.th/");
  }, []);

  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <b className="kku-stock-photos">KKU STOCK PHOTOS</b>
            <img className="kku-logo" alt="KKU-LOGO" src={LogoColor} />
            <div className="footer-text">
              <p>สำนักงานอธิการบดี มหาวิทยาลัยขอนแก่น</p>
              <p>เลขที่ 123 หมู่ 16 ถนนมิตรภาพ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40002</p>
              <p>หมายเลขโทรศัพท์ 0 4320 2204 แฟกซ์ 0 4320 2469</p>
            </div>
          </div>
          <div className="logoicon">
            <img className="kku-icon" alt="kkuicon" src={KKUIcon} onClick={onKkuIconImageClick} />
            <img className="cad-icon" alt="cadicon" src={CadIcon} onClick={onCadIconImageClick} />
          </div>
        </div>
        <div className="container-child"></div>
      </footer>
    </>
  )
}

