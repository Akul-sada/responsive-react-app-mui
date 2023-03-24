import styled from "@emotion/styled";
import { Attractions, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
 
}));
const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
 
 
}));

const Navbar = () => {
  const [open,setOpen] =useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Akul Dev
        </Typography>
        {/* Attractions is an icon */}
        <Attractions sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/11131486/pexels-photo-11131486.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" onClick={e=>setOpen(true)}/>
        </Icons>
          <UserBox>
          <Avatar sx={{width:30,height:30}} src="https://images.pexels.com/photos/11131486/pexels-photo-11131486.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" onClick={e=>setOpen(true)}/>
          <Typography variant="span">Rachel</Typography>
          </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
