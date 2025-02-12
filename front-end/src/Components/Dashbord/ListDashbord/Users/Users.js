import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Deletuser, USERSS, userShow } from "../../../../Api/Api";
import { User } from "../../../../Pages/Context/Context";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { Button, Skeleton, Typography } from "@mui/material";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Axios } from "./../../../../Api/Axios";
export default function Users() {
  const Cookis = new Cookies();

  const tokeen = Cookis.get("Bearer");
  const [Users, setUsers] = React.useState([]);
  const [deletrun, setdeletrun] = React.useState(0);
  const [currentuser, setcurrentuser] = React.useState("");
  const [nousers, setnousers] = React.useState(false);
  const go = useNavigate();

  /* show users */
  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/show", {
        headers: {
          Authorization: "Bearer " + tokeen,
        },
      })
      .then((json) => setUsers(json.data))
      .then(() => setnousers(true))
      /* بدل ما يظهرلي غلط 404 برجعني ع صفحه الدخول لمن احذف كل المستخدمين */
      .catch(() => go("/login", { replace: true }));
  }, [deletrun]);
  console.log(Users);

  /* اخفاء مستخدم الادمن الي هو انا وفلتره من باقي المستخدمين حتى لا يتم حذفه */
  /* show user admin */
  React.useEffect(() => {
    Axios.get(`/${userShow}`)
      .then((data) => setcurrentuser(data.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [deletrun]);
  console.log(currentuser);
  /* fillter user */
  const userfilter = Users.filter((user) => user.id !== currentuser.id);
  console.log(userfilter);

  async function deletuser(id) {
    try {
      await axios.delete(`${Deletuser}/${id}`, {
        headers: {
          Authorization: "Bearer " + tokeen,
        },
      });
      setdeletrun((prev) => !prev);
      /* او ممكن هاد الطريقة 
      setdeletrun((prev) => prev + 1);*/

      setdeletrun((e) => e + 1);
    } catch (e) {
      console.log("err delet", e);
    }
  }
  const Edituser = (id) => {
    go(`/Dashbord/Users/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        {Users.length === 0 ? (
          <TableHead>
            <TableRow>
              <TableCell>
                <Skeleton height={55} />
              </TableCell>
              <TableCell>
                <Skeleton height={55} />
              </TableCell>
              <TableCell>
                <Skeleton height={55} />
              </TableCell>
              <TableCell>
                <Skeleton height={55} />
              </TableCell>
              <TableCell>
                <Skeleton height={55} />
              </TableCell>
            </TableRow>
          </TableHead>
        ) : Users.length <= 1 && nousers ? (
          <TableRow width={"100%"}>
            <TableCell>
              <Typography sx={{ display: "flex", justifyContent: "center" }}>
                لا يوجد مستخدم
              </Typography>
            </TableCell>
          </TableRow>
        ) : (
          <TableBody>
            {userfilter.map((product, index) => {
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
                      {product.name.slice(0, 12)}
                    </TableCell>
                    <TableCell align="center">
                      {product.email.slice(0, 23)}...
                    </TableCell>
                    <TableCell align="center">
                      {product.role === "1995"
                        ? " admin"
                        : product.role === "2001"
                        ? "user"
                        : "Wrliter"}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          deletuser(product.id);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                      <Button
                        onClick={() => {
                          Edituser(product.id);
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
        )}
      </Table>
    </TableContainer>
  );
}
