import { Box, Container, Grid2, Paper, Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Dashboard from "../dashboard/Dashboard"

const Layout = () => {
  return (
    
        <Box sx={{ bgcolor: '#FAFCFF', height: '100vh' }}>
            <Grid2 container sx={{height:"100vh"}}>
                <Grid2 size={2}>
                    <Sidebar/>
                </Grid2>
                <Grid2 size={10}>
                    <Header/>
                    <Paper elevation={3} sx={{mx:4}}>
                        <Box sx={{p:2}}>
                            <Dashboard/>
                        </Box>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
      
  )
}

export default Layout