import { Box } from '@mui/system'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4}>

    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </Box>
  )
}

export default Feed