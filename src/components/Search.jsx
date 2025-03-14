import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, InputAdornment, Divider, IconButton } from "@mui/material";
import './Search.css'



{/* Search Container */ }
export default function SearchBox() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Prompt',
        },
    });
    return (
        <div className="logo-search-container">
            <ThemeProvider theme={theme}>
                <div className="search-container">
                    <Box sx={{ width: 500, maxWidth: '100%' }}>
                        <TextField
                            id="outlined-search"
                            fullWidth
                            label="ค้นหาภาพถ่ายใน KKU Stock Photo"
                            type="search"

                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {/* เส้นคั่น Divider */}
                                        <Divider sx={{ height: 40, mx: 1 }} orientation="vertical" />
                                        {/* ไอคอนค้นหา */}
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
        </div>
    )
}