import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import img from "./imgCard/1.jpg";
function ProductPage() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          border: "#A5A6A5 1px  solid ",
          my: 4,
          display: "flex",
          justifyContent: "center",
          maxWidth: 1000,
          textAlign: theme.breakpoints.down("md") ? "center" : "start",
        }}
      >
        <Stack
          sx={{
            [theme.breakpoints.down("md")]: {
              direction: "row",
            },
          }}
          divider={
            <Divider
              color={theme.palette.mode === "dark" ? "white" : "red"}
              orientation="vertical"
              flexItem
            />
          }
          alignItems={"center"}
          gap={2}
          justifyContent={"center"}
        >
          <Box>
            <img src={img} alt="" height={400} />
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", my: 2 }}>
              mens casual premium slim fit T-Shirts
            </Typography>
            <Button
              sx={{
                backgroundColor: "#FFE029",
                borderRadius: "28px 3px 3px 24px",
              }}
            >
              $22,3
            </Button>
            <Button
              sx={{
                bgcolor: "#1C2125",
                my: 2,
                justifyContent: "start",
              }}
            >
              <Box mx={1}>men fdde fe fe</Box>
            </Button>
            <Typography>
              disCraptionsdisCr aptionsdisCraptionsdisCraptionsdis
              CraptionsdisCraptionsdisCraptionsdisCrap
              tionsdisCraptionsdisCraptionsdisCraptionsdi
              sCraptionsdisCraptionsdisCraptionsdisCraptionsdisCra
              ptionsdisCraptionsdisCraptionsdisCraptionsdisCraptionsdisCraptionsdisC
              raptionsdisCraptionsdisCraptionsdisCraptionsdisCraptionsdisCraptions
            </Typography>
            <Button sx={{ my: 2 }} variant="contained">
              Add to Card
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default ProductPage;
