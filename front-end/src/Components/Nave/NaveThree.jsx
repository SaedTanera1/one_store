import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  styled,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NaveThree() {
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });
  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };
  const [active, setActive] = useState(false);
  const theme = useTheme();
  return (
    <StyleToolbar
      sx={{
        borderTop: "0.1px solid #f8f6f450",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          justifyContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        sm: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      className="container"
    >
      <Box>
        <Link to="/">
          <Button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={active ? "active" : "box"}
            sx={{ color: "white" }}
          >
            Home
          </Button>
        </Link>
        <Link to="/Admin">
          <Button sx={{ color: "white" }}>Dashboard</Button>
        </Link>
        <Link to="/Card">
          <Button sx={{ color: "white" }}>Card</Button>
        </Link>
        <Button sx={{ color: "white" }}>Login</Button>
        <Button sx={{ color: "white" }}>Checkout</Button>
      </Box>
    </StyleToolbar>
  );
}

export default NaveThree;
