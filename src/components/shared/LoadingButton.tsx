import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import React from 'react';
type loadingtext = string

interface Loadingtext {
  LoadingText: loadingtext
}

const LoadindButton: React.FC<Loadingtext> = ({LoadingText}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography mr={1}>{LoadingText}</Typography>
      <CircularProgress size={20}/>
    </Box>
  );
}
export default LoadindButton