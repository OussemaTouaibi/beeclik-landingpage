import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Header() {
  return (
    <Grid
      position="static"
      sx={{
        background: 'rgba(237, 237, 237, 0.90)',
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ width: "100%", paddingTop: "60px", paddingBottom: "97px" }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "127px",
            borderRadius: 55,
            background: "#FB6D10",
            margin: "auto",
            maxWidth: "1642px",
            maxHeight: "127px",
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            width="242px"
            height="64px"
          />
        </Toolbar>
      </Container>
    </Grid>
  );
}

export default Header;
