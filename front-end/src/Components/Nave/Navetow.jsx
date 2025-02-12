import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Badge,
  borderRadius,
  styled,
  InputBase,
  Stack,
  Autocomplete,
  Avatar,
  Button,
  Menu,
  MenuItem,
  ButtonGroup,
  Checkbox,
  Skeleton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ButtonBase,
  Divider,
  useTheme,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import MailIcon from "@mui/icons-material/Mail";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ShareIcon from "@mui/icons-material/Share";
import NightlightIcon from "@mui/icons-material/Nightlight";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LogoutIcon from "@mui/icons-material/Logout";

import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import IconDarkMode from "./IconDarkMode";
import { useSelector } from "react-redux";
import CartDrop from "../../Pages/HomePage/CartDrop";
const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "20px 20px  ",
  width: "40%",
}));
const Icoonnave = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
function Navetow() {
  const store = useSelector((store) => store.cart.product);
  const go = useNavigate();
  const theme = useTheme();
  const [openNve, setopenNve] = useState(false);

  const [product, setproduct] = useState([]);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div>
        <CartDrop open={open} toggleDrawer={toggleDrawer} />
        <Drawer open={openNve} onClose={() => setopenNve(false)}>
          <Box>
            <List>
              <ListItem>
                <ListItemButton component={Link} to="/">
                  <IconButton>
                    <HomeIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={Link} to="/">
                  <IconButton>
                    <ArticleIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <IconButton>
                    <PeopleIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <IconButton>
                    <StorefrontIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <IconButton>
                    <PersonAddIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <IconButton>
                    <AccountBoxIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <StyleToolbar
          sx={{ borderTop: "0.1px solid #f8f6f450" }}
          className="container"
        >
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
            }}
            variant="h6"
          >
            <span style={{ color: "yellow" }}>O</span>ne <span style={{ color: "yellow" }}>S</span>tore
          </Typography>
          <Box>
            <DensityMediumIcon
              onClick={() => setopenNve(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "white",
              }}
            />
          </Box>
          {/* Search */}
          <Search
            onFocus={() => {
              return console.log("object");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor:
                theme.palette.mode === "dark" ? "black" : "white",
              transition: "1s",
            }}
          >
            <SearchIcon
              sx={{
                display: { xs: "flex" },
                color: theme.palette.mode === "dark" ? "white" : "black",
              }}
            />
            <InputBase
              sx={{
                ".MuiInputBase-input": {
                  color: theme.palette.mode === "dark" ? "white" : "dark",
                },
              }}
              placeholder="searh ..."
            />
          </Search>
          <Icoonnave>
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
            >
              <Badge
                badgeContent={store.length === 0 ? "0" : store.length}
                color={"error"}
              >
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>

            <IconDarkMode />
          </Icoonnave>
        </StyleToolbar>
      </div>
    </>
  );
}

export default Navetow;
