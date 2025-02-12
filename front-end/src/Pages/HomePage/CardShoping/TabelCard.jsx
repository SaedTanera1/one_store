import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Cler, removeItem } from "../../../Api/Redux/slice/Cart_slice";
import Swal from "sweetalert2";
import CartDrop from "../CartDrop";

export default function TabelCard({ store }) {
  function must() {
    return (
      <Typography
        variant="body2"
        color={"error"}
        sx={{
          border: "1px solid red ",
          p: 1,
        }}
      >
        must up One
      </Typography>
    );
  }
  const cart = useSelector((state) => state.cart.product);
  const [quantity, setquantity] = useState(1);
  const totilprice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const dispatch = useDispatch();
  const RemoveItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(removeItem(item));
      }
    });
  };

  const clearr = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(Cler());
      }
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        {store.length + 0 ? (
          <Button
            sx={{ my: 4, mx: 3 }}
            onClick={() => {
              clearr();
            }}
            color="error"
            variant="contained"
          >
            clear
          </Button>
        ) : null}
        <span>({totilprice.toFixed(2)} $) </span>{" "}
      </TableContainer>{" "}
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ justifyContent: "center" }}>
            <TableCell align="start">product</TableCell>
            <TableCell align="center">price</TableCell>
            <TableCell align="center">quantity</TableCell>
            <TableCell align="center">subtotle</TableCell>
            <TableCell align="center">Acion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:first-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Stack direction={"row"} gap={2}>
                  <img
                    style={{ height: "33px", width: "33px" }}
                    src={`http://localhost:1337${item.img}`}
                  />
                  <Typography>{item.title}</Typography>
                </Stack>
              </TableCell>

              <TableCell align="center">$ {item.price}</TableCell>

              <TableCell align="center">
                <ButtonGroup
                  sx={{
                    px: 4,
                  }}
                  variant="text"
                >
                  <Button
                    onClick={() => {
                      item.quantity = item.quantity + 1;
                      setquantity((e) => e + 1);
                    }}
                    variant="outlined"
                  >
                    +
                  </Button>
                  <Button
                    disabled={item.quantity === 1 ? true : false}
                    p={1}
                    variant="outlined"
                  >
                    {item.quantity}
                  </Button>
                  <Button
                    aria-required={true}
                    onClick={() => {
                      item.quantity = item.quantity - 1;
                      setquantity((e) => e - 1);
                    }}
                    variant="outlined"
                    disabled={item.quantity === 1 ? true : false}
                  >
                    -
                  </Button>
                </ButtonGroup>
              </TableCell>
              <TableCell align="center">
                $ {item.quantity.toFixed(2) * item.price.toFixed(2)}
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => {
                    RemoveItem(item.id);
                  }}
                  color="error"
                  variant="contained"
                >
                  removeItem
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
