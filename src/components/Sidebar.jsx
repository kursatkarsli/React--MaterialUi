import React from 'react'
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material'
import {
  Home,
  Article,
  Group,
  Storefront,
  Person,
  Settings,
  AccountBox,
} from '@mui/icons-material'
import ModeNightIcon from '@mui/icons-material/ModeNight'

export const Sidebar = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position={'fixed'}>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
        >
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='HomePage' />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary='Pages' />
          </ListItemButton>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary='Groups' />
          </ListItemButton>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary='Marketplace' />
          </ListItemButton>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary='Friends' />
          </ListItemButton>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItemButton>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
            />{' '}
          </ListItemButton>
        </List>
      </Box>
    </Box>
  )
}
