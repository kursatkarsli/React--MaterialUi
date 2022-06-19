import { Add as AddIcon } from '@mui/icons-material'
import {
  Fab,
  Tooltip,
  Modal,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  TextField,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import profile_picture from '../assets/resim.jpg'
export const Add = () => {
  const [open, setIsOpen] = useState(false)
  const StyledModal = styled(Modal)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }))
  const UserBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  }))
  return (
    <>
      <Tooltip
        title='Add'
        sx={{
          position: 'fixed',
          bottom: { xs: '10px', md: '30px' },
          left: { md: '1%', xs: '80%' },
        }}
        onClick={() => setIsOpen(true)}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setIsOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        bgcolor={'background.default'}
        color={'text.primary'}
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={'background.default'}
          color={'text.primary'}
        >
          <Typography variant='h6' component={'h2'}>
            Add New Post
          </Typography>
          <UserBox>
            <Avatar src={profile_picture} />
            <Typography variant='h6' component={'h5'} marginLeft={1}>
              Kursat Karsli
            </Typography>
          </UserBox>
          <TextField
            id='standard-multiline-static'
            label='What are you thinking'
            multiline
            rows={4}
            placeholder='Tell us what is in your brain'
            variant='standard'
            fullWidth
            sx={{ marginTop: '20px' }}
          />
          <Button
            variant='outlined'
            size='large'
            sx={{ float: 'right', margin: '10px' }}
            onClick={() => setIsOpen(false)}
          >
            Add to your board
          </Button>{' '}
        </Box>
      </StyledModal>
    </>
  )
}
