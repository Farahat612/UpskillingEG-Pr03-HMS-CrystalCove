import { Box, Typography } from "@mui/material";

type AuthFormProps = {
  children: React.ReactNode;
  heading: string;
  paragraph: string;
  spanText: string;
};

const AuthForm = ({
  children,
  heading,
  paragraph,
  spanText,
}: AuthFormProps) => {
  return (
    <>
      <Box>
        <Typography variant="h5" component="h5">
          {heading}
        </Typography>
        <Typography>
          {paragraph}
          <span style={{ color: "red" }}> {spanText} </span>
        </Typography>
        {children}
      </Box>
    </>
  );
};

export default AuthForm;
