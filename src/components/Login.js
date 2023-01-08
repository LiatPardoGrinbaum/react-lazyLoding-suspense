import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, styled, Typography } from "@mui/material";

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",

  alignSelf: "center",
  // flexDirection: "column",
  width: "20rem",
  margin: "1rem",
  padding: "2rem",
  border: "1px solid lightgray",
  borderRadius: "7px",
}));

const Login = () => {
  return (
    <BoxContainer component="div" flexDirection="column">
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Log In
      </Typography>
      <Box
        component="form"
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          "& > :not(style)": { m: 1, width: "18rem" },
        }}
        noValidate
        autoComplete="off">
        <TextField id="standard-basic" label="Username" variant="filled" />
        <TextField id="standard-basic" label="Password" variant="filled" />
        <Button variant="contained">LOG IN</Button>
      </Box>
    </BoxContainer>
  );
};

export default Login;
