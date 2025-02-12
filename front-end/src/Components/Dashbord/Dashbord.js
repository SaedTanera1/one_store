import { Box, Stack } from "@mui/material";
import React from "react";
import NaveDashbord from "./NaveDashbord/NaveDashbord";
import ListDashbord from "./ListDashbord/ListDashbord";
import { Outlet } from "react-router-dom";
function Dashbord() {
  return (
    <Box>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="column">
        <NaveDashbord />
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
          <ListDashbord />
          <Outlet />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Dashbord;
