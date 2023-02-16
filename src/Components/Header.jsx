import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { createTheme } from '@mui/system'
import CameraIcon from '@mui/icons-material/PhotoCamera';
import React from 'react'

function Header() {
    const theme=createTheme();
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar position="relative">
        <Toolbar >
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header