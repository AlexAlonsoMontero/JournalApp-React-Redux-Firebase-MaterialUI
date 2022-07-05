import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material'
import React from 'react'



export const NavBar = ({ drawerWidth }) => {

    return (
        <AppBar
            position='fixed'
            sx={{
                width: "100%",
                maxWidth: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sn: `${drawerWidth}` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr:2, display: {sm: 'none'} }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography variant='h6' noWrap component='div' >Journal App</Typography>
                  <IconButton color='error'>
                        <LogoutOutlined/>
                  </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}
