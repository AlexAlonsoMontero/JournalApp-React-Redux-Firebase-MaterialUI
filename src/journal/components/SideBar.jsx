import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Typography, } from "@mui/material"
import { useSelector } from "react-redux"
import { SiteBarItem } from "./SiteBarItem";

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar  >
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>

                    {
                        notes.map(note => (
                            <SiteBarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
