import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import image from "./NotFound.jpg";
export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Box sx={{ px: { lg: 32, md: 20 }, py: { lg: 0, sm: 2 } }}>
          <img src={image} style={{ maxWidth: "100%" }} />
        </Box>
        <ButtonGroup
          variant="outlined"
          sx={{
            gap: 2,
            display: "flex",
            justifyContent: "center",
            pb: 2,
            alignItems: "center",
          }}
        >
          <Link to="/Login">
            <Button>Login</Button>
          </Link>
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/Register">
            <Button>Register</Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
