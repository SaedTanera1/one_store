import react, { useState } from "react";
import TabelCard from "./TabelCard";
import { Box, Container } from "@mui/material";
import { Nave } from "../../../Comopnees";
import { useSelector } from "react-redux";
export default function CardShoping() {
  const store = useSelector((store) => store.cart.product);

  return (
    <>
      <Nave />
      <Container className="pb-5">
        <Box py={5}>
          <TabelCard store={store} />
        </Box>
      </Container>
    </>
  );
}
