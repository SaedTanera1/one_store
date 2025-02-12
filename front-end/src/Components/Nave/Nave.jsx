import React, { useContext, useEffect, useState } from "react";
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
import "./Nave.css";

import logo from "./logo.png";

import Navetow from "./Navetow";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { CREATE, USERS, beseURL } from "../../Api/Api";
import { User } from "../../Pages/Context/Context";
import { GolfCourse } from "@mui/icons-material";
import { Axios } from "../../Api/Axios";
import NaveThree from "./NaveThree";
import { Transactions } from "../Dashbord/Admin/page/DashboardADmin/data";
import  Pay from "../../Pages/Pay";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Nave = ({ mode, setmode }) => {
  const go = useNavigate();
  const Cookiees = new Cookies();
  const token = Cookiees.get("Bearer");
  const useer = useContext(User);

  async function handeloguot() {
    try {
      await axios.post(`${beseURL}` / `logout`);
      Cookiees.remove("Bearer");
      go("/login");
    } catch (loguot) {
      console.log(loguot.message);
    }
  }
  const theme = useTheme();

  return (
    <>
      <div style={{ position: "relative" }}>
        <Box>
          <AppBar
            sx={{
              position: "static",
              bgcolor: theme.palette.mode === "dark" ? "#54545" : "#803735",
              transition: "1s",
            }}
          >
            <StyleToolbar className="container">
              <Box
                sx={{
                  display: { md: "flex", sm: "flex" },
                  maxWidth: { lg: "16%", md: "20%" },
                }}
              >
                <img style={{ maxWidth: "50%" }} src={logo} />
              </Box>

              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Link to="/ ">
                  <Button sx={{ color: "white" }}>Home</Button>
                </Link>
                <Link to="/Login">
                  <Button onClick={handeloguot} sx={{ color: "white" }}>
                    loguot
                  </Button>
                </Link>
                <Link to ="/Pay">
                  <Button sx={{ color: "white" }}>Checkout</Button>
                </Link>
                {!token && (
                  <>
                    <Link to="/Login">
                      <Button sx={{ color: "white" }}>Login</Button>
                    </Link>
                    <Link to="/Register">
                      <Button sx={{ color: "white" }}>Register</Button>
                    </Link>
                  </>
                )}
              </Box>
            </StyleToolbar>
            <Divider />
            <Box>
              <Navetow />
            </Box>
            <Divider />
            <NaveThree />
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Nave;
