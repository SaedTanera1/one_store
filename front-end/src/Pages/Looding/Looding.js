/* import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Looding() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100%",
        width: "100%",
        pt: "50%",
      }}
    >
      <CircularProgress disableShrink />
    </Box>
  );
}
 */
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import imagloooding from "./logo.png";
import "./Loodung.css";
import { Outlet } from "react-router-dom";
export default function Looding() {
  const [looding, setlooding] = useState(false);
  const [endimg, setendimg] = useState(false);
  useEffect(() => {
    setlooding(true);
    setendimg(true);
    setTimeout(() => {
      setlooding(false);
    }, 4000);
    setTimeout(() => {
      setendimg(false);
    }, 3700);
  }, []);

  return (
    <>
      {looding ? (
        <Box>
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="inherit" sx={{ color: "#665D5A" }} />
          </Box>
          <Box className="alllogding">
            <Box className="imglogdin animate__bounceInUp">
              <Box
                sx={{
                  opacity: endimg ? 1 : 0,
                  transition: "1.1s",
                  position: "relative",
                }}
              >
                <img width="30%" src={imagloooding} sx={{ display: "flex",
    alignItems: "center",}} />
              </Box>
            </Box>
            <Box className="lodbac"></Box>
          </Box>
        </Box>
      ) : (
        <Outlet />
      )}
    </>
  );
}
