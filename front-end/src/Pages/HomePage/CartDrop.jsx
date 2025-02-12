import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import {
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DownloadOutlined, LockOpenOutlined } from "@mui/icons-material";
import { Cler, removeItem } from "../../Api/Redux/slice/Cart_slice";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TemporaryDrawer({ toggleDrawer, open }) {
  const dispatch = useDispatch();

  const store = useSelector((store) => store.cart.product);
  const totilprice = store.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const theme = useTheme();
  const go = useNavigate();
  const DrawerList = (
    <Container>
      <Box sx={{ width: 290 }} role="presentation">
        <Typography
          color={
            theme.palette.mode === "light" ? "dark" : "rgba(255, 255, 255, 0.7)"
          }
          fontWeight={"bold"}
          textAlign={"center"}
          variant="h5"
          py={2}
        >
          product in your cart
        </Typography>
        {store.map((item, index) => {
          return (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Stack p={1} gap={2} direction={"row"} alignItems={"center"}>
                  <img
                    width={80}
                    height={80}
                    src={`http://localhost:1337${item.img}`}
                    alt="title img"
                  />
                  <Stack gap={2} direction={"column"}>
                    <Typography
                      color={
                        theme.palette.mode === "light"
                          ? "dark"
                          : "rgba(255, 255, 255, 0.7)"
                      }
                    >
                      women hat
                    </Typography>
                    <Box>
                      <Typography
                        flexWrap={"nowrap"}
                        weight={"auto"}
                        color={
                          theme.palette.mode === "light"
                            ? "dark"
                            : "rgba(255, 255, 255, 0.7)"
                        }
                        variant="body1"
                      >
                        {item.title}
                      </Typography>
                      <Typography>
                        {item.quantity} * ${item.price}
                      </Typography>
                    </Box>
                  </Stack>
                  <Button
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                  >
                    <DeleteIcon color="error" />
                  </Button>
                </Stack>
              </Box>

              <Divider />
            </Box>
          );
        })}
        <Stack direction={"row"} justifyContent={"space-between"} p={2}>
          <Typography>SUBTOTAL</Typography>
          <span>$ {totilprice.toFixed(2)} </span>
        </Stack>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            p: 1,
          }}
          onClick={() => {
            go(`/Card`);
          }}
        >
          PROCEED TO CHECKOUT
        </Button>
        <Divider />
        <Button
          onClick={() => {
            dispatch(Cler());
          }}
          sx={{ my: 2 }}
          variant="text"
          color="error"
        >
          Reset Cart
        </Button>
      </Box>
    </Container>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
