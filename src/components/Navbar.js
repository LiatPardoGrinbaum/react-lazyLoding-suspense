import * as React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const LinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  //up - if its sm or bigger than it
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export default function ButtonAppBar() {
  console.log("navbar");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h6" component="div">
            Code Splitting in React
          </Typography>
          <LinksBox>
            <NavLink to="/">
              <p className="link">Home</p>
            </NavLink>
            <NavLink to="/about">
              <p className="link">About</p>
            </NavLink>
            <NavLink to="/login">
              <p className="link">Login</p>
            </NavLink>
          </LinksBox>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
