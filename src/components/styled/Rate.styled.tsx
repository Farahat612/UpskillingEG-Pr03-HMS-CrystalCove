import styled from '@emotion/styled'
import { Grid } from '@mui/material'

export const RateComponent = styled(Grid)({
  borderRight: '1px solid',
  borderColor: 'primary.main',
  paddingRight: 50,
  '@media (max-width: 900px)': {
    paddingRight: 0,
    borderRight: 'none',
    borderBottom: '1px solid',
    borderColor: 'primary.main',
    paddingBottom: 30,
    marginBottom: 20,
  },
})
