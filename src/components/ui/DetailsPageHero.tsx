import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { DetailsPageImage } from '../styled/img'
import useFetchDetails from '../../hooks/portal/useFetchDetails'
import { useParams } from 'react-router-dom'
import { LoadingPage } from '../shared'

const DetailsHero = () => {
  const { id } = useParams()
  const { data , loadingDone } = useFetchDetails(`rooms/${id}`, 'room')

  return (
    <>
      {!loadingDone ? (
        <Box mt={10}>
          <Grid
            container
            spacing={2}
          >
            {data.images.map((img, index) => {
              return (
                <Grid
                  key={index}
                  item
                  maxHeight={600}
                  md={data.images.length >= 2 ? 6 : 12}
                  sm={12}
                >
                  <DetailsPageImage
                    key={index + 1}
                    src={`${img}`}
                    alt='Main'
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      ) : (
        <LoadingPage />
      )}
    </>
  )
}

export default DetailsHero
