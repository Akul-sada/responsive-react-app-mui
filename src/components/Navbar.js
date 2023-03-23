import styled from '@emotion/styled';
import { Attractions } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { theme } from '../theme';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});
const Search = styled("div")(({theme})=>({
  backgroundColor:"white"
}));
const Icons = styled(Box)(({theme})=>({
  backgroundColor:"white"
}))

const Navbar = () => {
  return (

    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Akul Dev</Typography>
      {/* Attractions is an icon */}
      <Attractions sx={{display:{xs:"block", sm:"none"}}}/>
      <Search>search</Search>
      <Icons>icons</Icons>
       
      </StyledToolbar>
    </AppBar>
  

  )
}

export default Navbar