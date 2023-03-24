import { Article, Home, ModeNight, People, Person, Portrait, Settings } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
    <List>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <Home/>
      </ListItemIcon>
      <ListItemText primary="Homepage"/>
      </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <Article/>
      </ListItemIcon>
      <ListItemText primary="Pages"/>
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>

      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <People/>
      </ListItemIcon>
      <ListItemText primary="Groups"/>
      </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <People/>
      </ListItemIcon>
      <ListItemText primary="MarketPlace"/>
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <Person/>
      </ListItemIcon>
      <ListItemText primary="Friends"/>
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <Settings/>
      </ListItemIcon>
      <ListItemText primary="Settings"/>
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <Portrait/>
      </ListItemIcon>
      <ListItemText primary="Profile"/>
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
      <ListItemIcon>
        <ModeNight/>
      </ListItemIcon>
      <Switch/>
      </ListItemButton>
      </ListItem>
    </List>
    </Box>
  );
}

export default Sidebar