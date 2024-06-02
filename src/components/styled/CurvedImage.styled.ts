import styled from '@emotion/styled'

const CurvedImage = styled.img`
  max-width: 100%;
  border-radius: 0.65rem;
`

const SQCurvedImage = styled(CurvedImage)`
  aspect-ratio: 1/1;
`

const RecVerticalCurvedImage = styled(CurvedImage)`
  aspect-ratio: 3/4;
  object-fit: cover;
`

export const HeroCurvedImage = styled(SQCurvedImage)`
  border-top-left-radius: 20%;
  box-shadow: 1rem 1rem 0px rgba(26, 188, 156, 1);
`

export const TestmonialCurvedImage = styled(RecVerticalCurvedImage)`
  border-bottom-right-radius: 23%;
  box-shadow: -1rem -1rem 0px rgba(255, 73, 139, 1);
`
