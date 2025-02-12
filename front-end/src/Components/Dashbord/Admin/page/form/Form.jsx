import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Stack } from "@mui/material";
import Header from "../../Header";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../../Api/firbace";

const Form = () => {
  const [open, setOpen] = React.useState(false);
  const [imgFile, setimage] = React.useState();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [Rating, setRating] = useState("");
  const [Category, setCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let flage = true;
    try {
      const docRef = addDoc(collection(db, "products"), {
        title,
        description,
        price,
        Rating,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    if (description.length < 8) {
      flage = false;
    }
  }

  return (
    <>
      <Box>
        <Header title="CREATE PRODCUT" subTitle="Create a New product " />

        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Stack sx={{ gap: 2 }} direction={"row"}>
            <TextField
              sx={{ flex: 1 }}
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />

            <TextField
              sx={{ flex: 1 }}
              label="price"
              variant="outlined"
              type="number"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </Stack>

          <TextField
            label="description"
            variant="outlined"
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <TextField
            label="Rating"
            variant="outlined"
            value={Rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <TextField
            onChange={(e) => setimage([...e.target.files])}
            label="img"
            variant="outlined"
            type="file"
            multiple="true"
          />

          <TextField
            variant="outlined"
            id="outlined-select-currency"
            select
            label="Category"
            defaultValue="User"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"women"}>women</MenuItem>
            <MenuItem value={"man"}>man</MenuItem>
          </TextField>

          <Box sx={{ textAlign: "right" }}>
            <Button
              type="submit"
              sx={{ textTransform: "capitalize" }}
              variant="contained"
            >
              Create New User
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
