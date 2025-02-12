import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { Stripe, stripeApi } from "../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deletfromToCart } from "../../Api/Redux/slice/Cart_slice";
import "./CardHome.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Api/firbace";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyDate(newValue);
    }
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[Category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[Category][$eq]=women";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const [clickedProduct, setclickedProduct] = useState({});
  const [data, setdata] = useState();
  useEffect(() => {
    async function fetchData() {
      await axios.get(stripeApi + myDate).then((data) => setdata(data.data));
    }
    fetchData();
  }, [myDate]);

  try {
    if (data) {
      console.log(data)
      return (
        <Container sx={{ py: 9 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            gap={3}
          >
            <Box>
              <Typography variant="h6">Selected Products</Typography>
              <Typography fontWeight={300} variant="body1">
                All our new arrivals in a exclusive brand selection
              </Typography>
            </Box>

            <ToggleButtonGroup
              color="error"
              value={myDate}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              sx={{
                ".Mui-selected": {
                  border: "1px solid rgba(233, 69, 96, 0.5) !important",
                  color: "#e94560",
                  backgroundColor: "initial",
                },
              }}
            >
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="myButton"
                value={allProductsAPI}
                aria-label="left aligned"
              >
                All Products
              </ToggleButton>

              <ToggleButton
                sx={{
                  mx: "16px !important",
                  color: theme.palette.text.primary,
                }}
                className="myButton"
                value={menCategoryAPI}
                aria-label="centered"
              >
                MEN category
              </ToggleButton>

              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="myButton"
                value={womenCategoryAPI}
                aria-label="right aligned"
              >
                Women category
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={{ sm: "center", md: "center", lg: "space-between" }}
            gap={2}
          >
            <AnimatePresence>
              {data.data.map((item) => {
                
                return (
                  
                  <Card
                    component={motion.section}
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{
                      duration: 1.6,
                      type: "spring",
                      stiffness: 50,
                    }}
                    key={item.id}
                    sx={{
                      maxWidth: 333,
                      mt: 6,
                      ":hover .MuiCardMedia-root ": {
                        rotate: "1deg",
                        scale: "1.1",
                        transition: "0.35s",
                      },
                    }}
                  >
                    <CardMedia
                      sx={{ height: 277 }}
                      // @ts-ignore
                      
                      image={`${
                        Stripe +
                        item.productImg[0].url
                      }`}
                      title="green iguana"
                    />

                    <CardContent>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          {item.title}
                        </Typography>

                        <Typography variant="subtitle1" component="p">
                          ${item.price}
                        </Typography>
                      </Stack>

                      <Typography variant="body2" color="text.secondary">
                        {item.description[0].children[0].text}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <Button
                        onClick={() => {
                          handleClickOpen();
                          setclickedProduct(item);
                        }}
                        sx={{ textTransform: "capitalize" }}
                        size="large"
                      >
                        <AddShoppingCartOutlinedIcon
                          sx={{ mr: 1 }}
                          fontSize="small"
                        />
                        add to cart
                      </Button>
                      <Rating
                        precision={0.1}
                        name="read-only"
                        value={item.Rating}
                        readOnly
                      />
                    </CardActions>
                  </Card>
                );
              })}
            </AnimatePresence>
          </Stack>

          <Dialog
            sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <IconButton
              sx={{
                ":hover": {
                  color: "red",
                  rotate: "180deg",
                  transition: "0.3s",
                },
                position: "absolute",
                top: 0,
                right: 10,
              }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>

            <ProductDetails
              onClose={handleClose}
              clickedProduct={clickedProduct}
              data={data}
          
            />
          </Dialog>
        </Container>
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export default Main;
