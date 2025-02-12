import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Deletproduct, Deletuser } from "../../../../Api/Api";
import { User } from "../../../../Pages/Context/Context";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Looding from "./../../../../Pages/Looding/Looding";
export default function Products() {
  const Cookis = new Cookies();

  const tokeen = Cookis.get("Bearer");
  const [product, setproduct] = React.useState([]);
  const [deletrun, setdeletrun] = React.useState(0);
  const [looding, setlooding] = React.useState(true);
  const go = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/product/show", {
        headers: {
          Authorization: "Bearer " + tokeen,
        },
      })
      .then((json) => setproduct(json.data))
      .then(setlooding(false));
  }, [deletrun]);
  async function deletproduct(id) {
    try {
      await axios.delete(`${Deletproduct}/${id}`, {
        headers: {
          Authorization: "Bearer " + tokeen,
        },
      });
      setdeletrun((e) => e + 1);
    } catch (e) {
      console.log("err delet", e);
    }
  }
  const Editproduct = (id) => {
    go(`/Dashbord/products/${id}`);
  };

  return (
    <>
      <TableContainer component={Paper}>
        {looding ? (
          <Looding />
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">id</TableCell>
                <TableCell align="center">title</TableCell>
                <TableCell align="center">description</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((products, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <>
                      <TableCell align="center" component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        {products.title.slice(0, 23)}
                      </TableCell>
                      <TableCell align="center">
                        {" "}
                        {products.description.slice(0, 23)}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() => {
                            deletproduct(products.id);
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                        <Button
                          onClick={() => {
                            Editproduct(products.id);
                          }}
                        >
                          <CreateIcon />
                        </Button>
                      </TableCell>
                    </>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </>
  );
}
