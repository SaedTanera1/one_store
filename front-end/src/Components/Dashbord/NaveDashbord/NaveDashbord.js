import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "./logo.png";
import my from "./Screenshot_٢٠٢١٠٩٠٣-١٦١٢٠١_Instagram.jpg";
import { Avatar, Container, Icon, Stack } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

export default function NaveDashbord() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="">
        <Container maxWidth={""}>
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Stack direction={"row"} spacing={1}>
                  <Box>
                    <img src={logo} style={{ maxWidth: "10%" }} />
                    <IconButton>
                      <Link to="/">
                        <DensityMediumIcon />
                      </Link>
                    </IconButton>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Stack direction={"row"} spacing={1}>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                  <Stack direction={"row"} spacing={1}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        sx={{ width: 28, height: 28 }}
                        alt="Remy Sharp"
                        src={my}
                      />
                    </Box>
                    <Stack minWidth={"100%"} direction={"column"} spacing={0}>
                      <Typography variant="body">one store</Typography>
                      <Typography variant="body">web design</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
