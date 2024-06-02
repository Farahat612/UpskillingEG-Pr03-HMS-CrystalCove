import { styled } from '@mui/material'
import { TextField } from '@mui/material'

export const AuthFormTextField = styled(TextField)({
  '& .MuiFilledInput-root': {
    backgroundColor: 'rgba(245, 246, 248, 1)',
    borderRadius: '8px',

    '&:before': {
      border: 'none',
    },

    '&:after': {
      borderColor: 'primary.main',
      borderWidth: '3px',
    },

    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'secondary.main',
        borderWidth: '3px',
      },
    },
    '&:hover:not(.Mui-focused)': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ccc',
      },
      '&:before': {
        border: 'none',
      },
    },
  },

  // '& .MuiFormLabel-root': {
  //   color: '#283593',
  //   fontWeight: 'bold',
  // },

  '& .MuiInputLabel-filled': {
    color: 'primary.main',
    fontWeight: 'bold',
    top: '-1.8rem',
    transform: 'translate(0, 0) scale(1)',
  },
})
