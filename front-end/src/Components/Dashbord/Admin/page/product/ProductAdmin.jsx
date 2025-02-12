import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { setDoc, collection, getDocs, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../Api/firbace";

function ProductAdmin() {
  const addUser = async () => {
    await setDoc(doc(db, "products"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };
  const [title, settitle] = useState("");
  console.log(title);
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [Rating, setRating] = useState("");
  const [Category, setCategory] = useState("");
  const [click, setclick] = useState("");
  const theme = useTheme();
  /*   useEffect(() => {}, []); */
  async function handleSubmit(e) {
    const querySnapshot = getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  return (
    <Container>
      <Box>
        {title.Rating}
        <Typography
          textAlign="center"
          color={theme.palette.mode === "dark" ? "white" : "red"}
          sx={{ fontWeight: "bold", fontSize: { md: 22, sm: 33 } }}
        >
          welcome to update Product
        </Typography>
        <Button
          onClick={() => {
            addUser();
          }}
        >
          doc
        </Button>
      </Box>
    </Container>
  );
}

export default ProductAdmin;
