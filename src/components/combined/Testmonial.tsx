import { Stack } from "@mui/material";
import { TestmonialsData, TestmonialsImage } from "../ui";


const Testmonial = () => {
  return (
    <>
      <Stack direction={"row"} spacing={5}>
        <TestmonialsImage />
        <TestmonialsData />
      </Stack>
    </>
  )
}

export default Testmonial
