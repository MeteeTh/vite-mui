import { Button, Drawer, List, ListItem, ListItemText, ThemeProvider, createTheme} from '@mui/material';
import { useState, useEffect } from 'react';
import LogoCadWhite from '../../assets/LogoCad_White.png';
import LogoKKU from '../../assets/LogoKKU-Thai.png';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';



function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
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

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const PromptTheme = createTheme({
    typography: {
      fontFamily: 'Prompt',
    },
  });

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#">
          <img src={LogoCadWhite} alt="Logo" className="logo-white" />
        </a>
        <div className="navbar-container">
          <nav className="navbar">
            <ul>
              <li><a href="#">หน้าหลัก</a></li>
              <li><a href="#">เกี่ยวกับ</a></li>
              <li><a href="#">เงื่อนไขการให้บริการ</a></li>
            </ul>
          </nav>
          <Button className="login-btn" startIcon={<img src={LogoKKU} alt="KKU Logo" className="login-icon" />}>
            KKU Login
          </Button>
        </div>

      </div>

      {/* Hamburger Menu */}
      <Button className="login-btn-mobile" startIcon={<img src={LogoKKU} alt="KKU Logo" className="login-icon-mobile" />}>
        <span className="login-text">KKU Login</span>
      </Button>

      <Button onClick={() => toggleDrawer(true)} className="hamburger-button">
        <MenuIcon style={{ fontSize: 36, color: 'white' }} />
      </Button>


      {/* Drawer Component for Mobile */}
      <ThemeProvider theme={PromptTheme}>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
          className="drawer-list"
          sx={{
            fontFamily: 'Prompt',
            '& .MuiDrawer-paper': {
              width: '200px',
              backgroundColor: '#fff',
              padding: '20px',
              boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
            }
          }}
        >
          <List>
            <ListItem button sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, borderRadius: '8px' }}>
              <ListItemText primary="หน้าหลัก" sx={{ fontSize: '18px', fontWeight: 600 }} />
            </ListItem>
            <ListItem button sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, borderRadius: '8px' }}>
              <ListItemText primary="เกี่ยวกับ" sx={{ fontSize: '18px', fontWeight: 600 }} />
            </ListItem>
            <ListItem button sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, borderRadius: '8px' }}>
              <ListItemText primary="เงื่อนไขการให้บริการ" sx={{ fontSize: '18px', fontWeight: 600 }} />
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </header>
  );
}

export default Header;
