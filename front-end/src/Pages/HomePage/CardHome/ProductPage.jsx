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
  const Search = styled("div")(({ theme }) => ({
    flexGrow: 0.4,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    "&:hover": {
      border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "266px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
    },
  }));

  const Stylees = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      display: "none",
    },
  }));

  return (
    <Container>
      <Box
        sx={{
          border: "#A5A6A5 1px  solid ",
          my: 4,
          display: "flex",
          justifyContent: "center",
          maxWidth: 1000,
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
