import { useState } from 'react';
import './Browse.css';
import image1 from '../../images/_DSC3538.jpg';
import Divider from '@mui/material/Divider';

// ตัวอย่างข้อมูลรูปภาพ (ใช้ภาพจาก Unsplash)
const images = [
    { id: 1, title: 'ภาพที่ 1', category: ['recent', 'album'], imageUrl: image1 },
    { id: 2, title: 'ภาพที่ 2', category: ['recent', 'album', 'top-downloads'], imageUrl: image1 },
    { id: 3, title: 'ภาพที่ 3', category: ['recent', 'top-downloads'], imageUrl: image1 },
    { id: 4, title: 'ภาพที่ 4', category: ['recent', 'top-views'], imageUrl: image1 },
    { id: 5, title: 'ภาพที่ 5', category: ['recent', 'top-views'], imageUrl: image1 }
];

const Browse = () => {
    const [filteredImages, setFilteredImages] = useState(images);  // สถานะที่เก็บรูปภาพที่ถูกกรอง

    // ฟังก์ชันที่ใช้เมื่อคลิกที่แต่ละตัวกรอง
    const handleFilter = (filterType) => {
        let filtered = [];
        if (filterType === 'recent') {
            filtered = images.filter(image => image.category.includes('recent'));
        } else if (filterType === 'album') {
            filtered = images.filter(image => image.category.includes('album'));
        } else if (filterType === 'top-downloads') {
            filtered = images.filter(image => image.category.includes('top-downloads'));
        } else if (filterType === 'top-views') {
            filtered = images.filter(image => image.category.includes('top-views'));
        }
        setFilteredImages(filtered);  // อัพเดตสถานะรูปภาพที่กรองแล้ว
    };

    return (
        <div>
            <div className="browse-container">
                <div className="browse-item" onClick={() => handleFilter('recent')}>
                    <div className="browse-label">รูปภาพล่าสุดทั้งหมด</div>
                </div>
                <div className="browse-item" onClick={() => handleFilter('album')}>
                    <div className="browse-label">อัลบั้มทั้งหมด</div>
                </div>
                <div className="browse-item" onClick={() => handleFilter('top-downloads')}>
                    <div className="browse-label">ดาวน์โหลดสูงสุด</div>
                </div>
                <div className="browse-item" onClick={() => handleFilter('top-views')}>
                    <div className="browse-label">เข้าชมสูงสุด</div>
                </div>
            </div>
            <Divider sx={{ width: '50%', height: 'auto', mt: 2, mb: 2, mx: 'auto' }} variant="middle" />
            {/* แสดงรูปภาพที่กรองแล้ว */}
            {/* <div className="image-gallery">
                    {filteredImages.map(image => (
                        <div key={image.id} className="image-item">
                            <img src={image.imageUrl} alt={image.title} />
                            <p>{image.title}</p>
                        </div>
                    ))}
                </div> */}
        </div>
    );
};

export default Browse;
