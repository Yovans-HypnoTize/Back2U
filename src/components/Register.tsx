import { Box, Typography } from "@mui/material"

const Register = () => {
    const user_type = "Add admin"
  return (
    <Box>
        <Typography variant="h6" sx={{fontWeight:"bold",color:"#0067F2"}}>{user_type}</Typography>
        <Box sx={{my:2}}>
            <hr />
        </Box>
    </Box>
  )
}

export default Register