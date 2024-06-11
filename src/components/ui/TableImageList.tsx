import { Stack, Typography } from '@mui/material'

export const ImageList = ({ images }: { images: string[] }) => {
  return (
    <Stack direction={'row'} gap={1}>
      {Array.isArray(images) && images.length > 0 ? (
        images.map((image: string, index) => (
          <img
            key={index}
            src={image}
            alt='Room Image'
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              borderRadius: '5px',
            }}
          />
        ))
      ) : (
        <Typography variant='body2'>No Images</Typography>
      )}
    </Stack>
  )
}
