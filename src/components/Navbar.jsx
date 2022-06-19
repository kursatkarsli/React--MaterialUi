import { Notifications, Pets } from '@mui/icons-material'
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'
import React, { useState } from 'react'
import { InputBase } from '@mui/material'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import picture from '../assets/resim.jpg'
export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  })
  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  }))
  const IconBox = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  }))
  const UserBox = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  }))

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          LAMA DEV
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='search...' fullWidth={true} />
        </Search>
        <Box>
          <IconBox sx={{ display: { xs: 'none', md: 'flex' } }}>
            {' '}
            <Badge badgeContent={4} color='error'>
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color='error'>
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt='MyPicture'
              src={picture}
            />
          </IconBox>
          <UserBox
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => {
              setOpen(true)
            }}
          >
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt='MyPicture'
              src={picture}
            />
            <Typography variant='span'>Kursat Karsli</Typography>
          </UserBox>
        </Box>
      </StyledToolbar>

      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
