import { Box,Typography,InputLabel,MenuItem,FormControl, Grid2, Avatar, TextField, InputAdornment, OutlinedInput, IconButton } from "@mui/material"
import Select,{SelectChangeEvent} from "@mui/material/Select"
import { useState } from "react"
import imagePaths from "../../config/imagePaths"

const Header = () => {
    const [country,setCountry] = useState<string>()

    const handleChange = (event:SelectChangeEvent) => {
        setCountry(event.target.value as string)
    }
  return (
    <Box>
        <Grid2 container display={"flex"} justifyContent={"space-between"} sx={{py:2}}>
            <Grid2 size={6} display={"flex"} alignItems={"center"}>
                <Box sx={{minWidth:250,ml:3}}>
                    <FormControl sx={{minWidth:200}} size="small">
                        <InputLabel id="select-countries" sx={{color:"#0067F2"}}>All Countries</InputLabel>
                        <Select labelId="select-countries" id="countries" value={country} label="All Countries" onChange={handleChange} 
                            sx={{
                                color: "#0067F2",
                                '.MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0067F2',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0067F2',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0067F2',
                                },
                                '.MuiSvgIcon-root ': {
                                fill: "#0067F2 !important",
                                }
                            }}>
                            {
                                countryList.map((country,index)=>{
                                    return <MenuItem value={country.value} key={index}>{country.label}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Grid2>
            <Grid2 size={6} display={"flex"}>
                <FormControl sx={{ m: 1, width: '30ch'}} variant="outlined">
                    <OutlinedInput
                        id="country"
                        startAdornment={<InputAdornment position="start">
                            <Box component="img" src={imagePaths.search_logo} alt="search-logo" sx={{maxHeight:20,maxWidth:20}}/>
                        </InputAdornment>}
                        inputProps={{
                        'aria-label': 'country',
                        }}
                        placeholder="Search"
                        sx={{borderRadius:5,bgcolor:"#fff"}}
                        size="small"
                    />
                </FormControl>
                <Box component="img" src={imagePaths.australia_flag} alt="search-logo" sx={{maxHeight:40,maxWidth:50,m:1}}/>
                <Box component="img" src={imagePaths.notification_image} alt="search-logo" sx={{maxHeight:40,maxWidth:50,m:1}}/>
            </Grid2>
        </Grid2>
    </Box>
  )
}

const countryList = [
    {value:1,label:"Australia"},
    {value:2,label:"Europe"},
    {value:3,label:"India"},
    {value:4,label:"USA"},
]

export default Header