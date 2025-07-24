import { Box, Typography } from "@mui/material"
import imagePaths from "../../config/imagePaths"

const Sidebar = () => {

  return (
    <Box sx={{pl:5,py:3}}>
        <Box component="img" src={imagePaths.back2u_logo} alt="Back2U_Logo" sx={{maxHeight:100,maxWidth:100,my:4}}/>
        <Box>
            <Typography className="sidebar-heading" sx={{fontWeight:"bold",color:"#252525"}}>Welcome Allison Supreme!</Typography>
        </Box>
    </Box>
  )
}

export default Sidebar