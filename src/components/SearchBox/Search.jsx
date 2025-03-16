import { useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, InputAdornment, Divider, IconButton } from "@mui/material";
import './Search.css';
import useScreenSize from '../../Hooks/Responsive';

function SearchBox() {
    const PromptTheme = createTheme({
        typography: {
            fontFamily: 'Prompt',
        },
    });
    
    // ตรวจสอบขนาดหน้าจอ
    const { isMobile, isTablet, isDesktop, isUltraWide } = useScreenSize();
   

    // กำหนดขนาดของกล่องค้นหาตามอุปกรณ์
    let searchWidth;
    if (isMobile) {
        searchWidth = '70%'; // มือถือ
    } else if (isTablet) {
        searchWidth = '70%'; // แท็บเล็ต
    } else if (isDesktop) {
        searchWidth = '50%'; // เดสก์ท็อป
    } else if (isUltraWide) {
        searchWidth = '100%'; // หน้าจอใหญ่พิเศษ
    }

    return (
        <ThemeProvider theme={PromptTheme}>
            <div className="search-container">
                <Box sx={{ width: searchWidth, maxWidth: 500 }}>
                    <TextField
                        id="outlined-search"
                        fullWidth
                        label={isMobile ? "ค้นหาภาพถ่าย" : "ค้นหาภาพถ่ายใน KKU Stock Photo"}
                        type="search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Divider sx={{ height: 40, mx: 1 }} orientation="vertical" />
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default SearchBox;
