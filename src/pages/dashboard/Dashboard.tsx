import { Box, Grid2, Typography,Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import imagePaths from '../../config/imagePaths'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  function createData(
    channel: string,
    users: number,
    subscribers: number,
    
  ) {
    return { channel, users, subscribers };
  }
  
  const rows = [
    createData('Direct', 3632, 2020),
    createData('Through Telecom', 1168, 1024),
  ];

  const percentage = 66;
  return (
    <>
      <Box sx={{m:2}}>
        <Grid2 container spacing={3}>
          <Grid2 size={3}>
            <Paper elevation={3}>
              <Box sx={{height:90}}>
                <Typography sx={{pl:2,pt:2,fontWeight:'bold',fontSize:12}}>Total Users</Typography>
                <Box sx={{p:2,display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                    <Typography variant='h6' sx={{fontWeight:"bold"}}>4800</Typography>
                    <Box component="img" src={imagePaths.menu} alt="search-logo" sx={{maxHeight:20,maxWidth:20}}/>
                </Box>
              </Box>
            </Paper>
          </Grid2>
          <Grid2 size={3}>
            <Paper elevation={3}>
                <Box sx={{height:90}}>
                  <Typography sx={{pl:2,pt:2,fontWeight:'bold',fontSize:12}}>Total Agents</Typography>
                  <Box sx={{p:2,display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                      <Typography variant='h6' sx={{fontWeight:"bold"}}>4800</Typography>
                      <Box component="img" src={imagePaths.menu} alt="search-logo" sx={{maxHeight:20,maxWidth:20}}/>
                  </Box>
                </Box>
            </Paper>
          </Grid2>
          <Grid2 size={3}>
            <Paper elevation={3}>
              <Box sx={{height:90}}>
                <Typography sx={{pl:2,pt:2,fontWeight:'bold',fontSize:12}}>Total Requested Documents</Typography>
                <Box sx={{p:2,display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                    <Typography variant='h6' sx={{fontWeight:"bold"}}>4800</Typography>
                    <Box component="img" src={imagePaths.menu} alt="search-logo" sx={{maxHeight:20,maxWidth:20}}/>
                </Box>
              </Box>
            </Paper>
          </Grid2>
          <Grid2 size={3}>
            <Paper elevation={3}>
              <Box sx={{height:90}}>
                <Typography sx={{pl:2,pt:2,fontWeight:'bold',fontSize:12}}>Total Found Documents</Typography>
                <Box sx={{p:2,display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                    <Typography variant='h6' sx={{fontWeight:"bold"}}>4800</Typography>
                    <Box component="img" src={imagePaths.menu} alt="search-logo" sx={{maxHeight:20,maxWidth:20}}/>
                </Box>
              </Box>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>

      <Box sx={{my:5,mx:2}}>
        <Grid2 container spacing={3}>
          <Grid2 size={7}>
            <Paper elevation={3}>
              <Box>
                <Box sx={{p:2,display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{p:1,fontWeight:'bold',fontSize:14}}>Users Around the world</Typography>
                </Box>
                <Box sx={{display:"flex",justifyContent:'center'}}>
                  <Box component="img" src={imagePaths.location_image} alt="location-logo" sx={{py:2,maxHeight:300,maxWidth:450}}/>
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} sx={{mt:5}}>
              <Box>
                <Typography sx={{p:3,pt:2,fontWeight:'bold',fontSize:12}}>Subscription Report</Typography>
                <Box sx={{px:5,py:6,display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                  <TableContainer component={Paper} >
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Channel</TableCell>
                          <TableCell align="center">Users</TableCell>
                          <TableCell align="center">Subscribers</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.channel}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.channel}
                            </TableCell>
                            <TableCell align='center'>{row.users}</TableCell>
                            <TableCell align='center'>{row.subscribers}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Paper>
          </Grid2>
          <Grid2 size={5}>
            <Paper elevation={3}>
                <Box>
                  <Typography sx={{pl:2,pt:2,fontWeight:'bold',fontSize:12}}>Success Rate</Typography>
                  <Box sx={{p:5,display:'flex',justifyContent:"center"}}>
                      <Box component="img" src={imagePaths.success_rate_img} alt="search-logo" sx={{maxHeight:200,maxWidth:200,pt:3}}/>
                  </Box>
                  <Box sx={{display:"flex",justifyContent:"center",pb:4}}>
                    <Typography sx={{fontSize:12,fontWeight:"bold"}}>Documents Found</Typography>
                  </Box>
                </Box>
              </Paper>
              <Paper elevation={3} sx={{mt:5}}>
                  <Box>
                    <Grid2 container spacing={2}>
                      <Grid2 size={6}>
                        <Typography sx={{ml:2,mt:3,p:2,fontWeight:'bold',fontSize:12,textAlign:"center",bgcolor:"#F5F9FF"}}>Success Rate</Typography>
                        <Box sx={{p:4,display:'flex',justifyContent:"center"}}>
                        <Box >
                          <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </Box>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"center",pb:4}}>
                          <Typography sx={{fontSize:12,fontWeight:"bold"}}>Documents Found</Typography>
                        </Box>
                      </Grid2>
                      <Grid2 size={6}>
                        <Typography sx={{mr:2,mt:3,p:2,fontWeight:'bold',fontSize:12,textAlign:"center",bgcolor:"#F5F9FF"}}>Success Rate</Typography>
                        <Box sx={{p:4,display:'flex',justifyContent:"center"}}>
                      
                        <Box>
                          <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        </Box>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"center",pb:4}}>
                          <Typography sx={{fontSize:12,fontWeight:"bold"}}>Documents Found</Typography>
                        </Box>
                      </Grid2>
                    </Grid2>
                    
                  </Box>
                </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default Dashboard