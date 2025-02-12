import { Box } from "@mui/material";
import React from "react";
import Line from "./Line";
import Header from "../../Header";

const LineChart = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;
