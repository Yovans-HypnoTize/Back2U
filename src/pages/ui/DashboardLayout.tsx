import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import Header from './Header';
import imagePaths from '../../config/imagePaths';
import Paper from '@mui/material/Paper';
import { LuLayoutDashboard } from "react-icons/lu";
import Register from '../../components/Register';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const DashboardLayout = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [activeItem,setActiveItem] = useState<number>(0)
    const [activePathName,setActivePathName] = useState<string>()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (index:number,text:string) => {
        setActiveItem(index)
        console.log(text);
        const pathName = text.toLowerCase()
        console.log(pathName);
        setActivePathName(pathName)
    }

    useEffect(()=>{},[])
    return (
        <Box sx={{ display: 'flex',bgcolor:"#FAFCFF",height:"100vh" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ bgcolor: "#FAFCFF", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton
                        // color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        btn
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Header />
                    {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography> */}
                </Toolbar>
            </AppBar>
            <Drawer
            PaperProps={{sx:{
                backgroundColor:"#FAFCFF"
            }}}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        border: "none"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#FAFCFF" }}>
                    <Box component="img" src={imagePaths.back2u_logo} alt="Back2U_Logo" sx={{ maxHeight: 100, maxWidth: 100, m: 3 }} />

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <Box component="img" src={imagePaths.menu} alt="menu-logo" sx={{ maxHeight: 35, maxWidth: 35 }} />
                            : "rightbtn"}
                    </IconButton>
                </DrawerHeader>
                <List>
                    <Box sx={{ pl: 3, pb: 3, bgcolor: "#FAFCFF" }}>
                        <Box>
                            <Typography className="sidebar-heading" sx={{ fontWeight: "bold", color: "#252525" }}>Welcome Allison Supreme!</Typography>
                        </Box>
                    </Box>
                    {['Dashboard', 'Admin', 'Agent', 'User', "Documents Found"].map((text, index) => (
                        <ListItem key={text} disablePadding disableGutters>
                            <ListItemButton onClick={() => handleListItemClick(index,text)} sx={{ml:2,borderRadius:2,bgcolor:activeItem === index ? "#0067F2":"transparent",'&:hover':{bgcolor:activeItem === index ? "#0067F2" : "#f0f0f0"},color:activeItem === index ? "#fff":"#000"}}>
                                <ListItemIcon sx={{ m: 0, p: 0 }}>
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    <LuLayoutDashboard color={activeItem === index ? "#fff":"#000"}/>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open} sx={{ bgcolor: "#FAFCFF" }}>
                <DrawerHeader />
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Register />
                </Paper>
            </Main>
        </Box>
    )
}

export default DashboardLayout