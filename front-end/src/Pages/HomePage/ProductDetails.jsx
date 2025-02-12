/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useState } from "react";
import { addToCart } from "../../Api/Redux/slice/Cart_slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ProductPage from "./ProductPage";

const ProductDetails = ({ clickedProduct, data, onClose }) => {
  console.log(clickedProduct)
  const [selectedImg, setselectedImg] = useState(0);
  const [quantity, setquantity] = useState(1);
  const Dispatch = useDispatch();
  const go = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
      <img
          width={360}
          src={` http://localhost:1337${clickedProduct.productImg[selectedImg].url} `}
          alt=""
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{clickedProduct.title}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.price}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.description[0].children[0].text}
        </Typography>
        <Stack
          sx={{
            justifyContent: { xs: "center", sm: "left" },
          }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              flexWrap: "wrap",
              gap: 2,
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.productImg.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",

                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => {
                      setselectedImg(index);
                    }}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    src={`http://localhost:1337${item.url}`}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
            disabled={quantity === 0 ? true : false}
            onClick={() => {
              Dispatch(
                addToCart({
                  id: clickedProduct.id,
                  title: clickedProduct.title,
                  price: clickedProduct.price,
                  img: clickedProduct.productImg[0].url,
                  quantity,
                })
              );
              go("/");
              onClose();

              Swal.fire(
                "Good job!",
                "Item placed successfully! (^ _ *)",
                "success"
              );
            }}
            sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
            variant="contained"
          >
            <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
            Add to Card
          </Button>

          <ButtonGroup
            sx={{
              px: 4,
            }}
            variant="text"
          >
            <Button
              aria-required={true}
              onClick={() => {
                setquantity((e) => e - 1);
              }}
              variant="outlined"
              disabled={quantity === 1}
            >
              -
            </Button>
            <Box p={1}>{quantity}</Box>
            <Button
              onClick={() => {
                setquantity((e) => e + 1);
              }}
              variant="outlined"
            >
              +
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductDetails;
