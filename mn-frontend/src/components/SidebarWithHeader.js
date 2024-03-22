import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';

const drawerWidth = 240;

export default function SidebarWithHeader({ pageName, children }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };


    //   Sidebar component
    const drawer = (
        <div>
            <Toolbar>
                {/* App name */}
                <Typography variant="h6" noWrap component="div">
                    Meeting Notes
                </Typography>
            </Toolbar>
            <Divider />

            {/* Sidebar List 1 */}
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        href="/"
                        selected={pageName === "Dashboard"}
                    >
                        <ListItemIcon> <SpaceDashboardOutlinedIcon /> </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        href="/meetings"
                        selected={pageName === "Meetings"}
                    >
                        <ListItemIcon> <CommentOutlinedIcon /> </ListItemIcon>
                        <ListItemText primary="Meetings" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

            {/* Sidebar List 2 (to be implemented)*/}
            <List>

                <ListItem disablePadding>
                    <ListItemButton
                        href="/calendar"
                        selected={pageName === "Calendar"}
                    >
                        <ListItemIcon> <CalendarMonthOutlinedIcon /> </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        href="/people"
                        selected={pageName === "People"}
                    >
                        <ListItemIcon> <PeopleAltOutlinedIcon /> </ListItemIcon>
                        <ListItemText primary="People" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        href="/flagged"
                        selected={pageName === "Flagged Meetings"}
                    >
                        <ListItemIcon> <OutlinedFlagIcon /> </ListItemIcon>
                        <ListItemText primary="Flagged Meetings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Header */}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {pageName}
                    </Typography>

                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                {/* Sidebar for mobile */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                {/* Sidebar for PC */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* Body */}
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {children}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}


