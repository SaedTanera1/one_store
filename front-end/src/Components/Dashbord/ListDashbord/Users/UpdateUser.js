import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { User } from "./../../../../Pages/Context/Context";
import Swal from "sweetalert2";
import Looding from "../../../../Pages/Looding/Looding";
import { TextFields } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
export default function UpdateUser() {
  let Params = useParams();
  const [name, setname] = React.useState("");
  const [hotmil, sethotmil] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [role, setrole] = React.useState("");
  const [disabel, setdisabel] = React.useState(true);
  const [looding, setlooding] = React.useState(true);
  const [click, setclick] = React.useState(false);
  const [emailerror, setemailerror] = React.useState("");
  const context = React.useContext(User);
  const token = context.auth.tokeen;
  // طريقة اخرى لجلب الا اي دي
  /*   const id = window.location.pathname.split("/").slice(-1)[0];
  const idd = Number(window.location.pathname.replace("dashbodrrr/users/", ""));
   */ const go = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${Params.id}`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((response) => response.json())
      .then((res) => {
        setname(res[0].name);
        sethotmil(res[0].email);
        setrole(res[0].role);
      })
      .then(() => {
        setdisabel(false);
        setlooding(false);
      });
  }, []);
  console.log(role);
  async function handleSubmit(e) {
    let flage = true;
    e.preventDefault();
    setclick(true);
    if (name.length < 4 || password.length < 8 || password !== passwordR) {
      flage = false;
    } else flage = true;
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/user/update/${Params.id}`,
        {
          name,
          password,
          role,
          email: hotmil,
          password_confirmation: passwordR,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      let timerInterval;
      Swal.fire({
        title: "Welcome!",
        html: " to one store",
        timer: 2000,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          go("/Dashbord/Users");
        }
      });
    } catch (err) {
      setemailerror(err.response.status);
      console.log(err.response.status);
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {looding ? (
          <Looding />
        ) : (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src="/broken-image.jpg" />
            <Typography sx={{ mt: "5px" }} component="h1" variant="h5">
              UdateUser
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="name "
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              {name.length < 4 && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  name must be more then 8 char
                </Typography>
              )}
              <TextField
                margin="normal"
                fullWidth
                value={role}
                onChange={(e) => setrole(e.target.value)}
              />

              <Select
                value={role}
                label="role"
                onChange={(e) => setrole(e.target.value)}
              >
                <MenuItem value={"2001"}>user</MenuItem>
                <MenuItem value={"1995"}>admin</MenuItem>
                <MenuItem value={"1996"}>writer</MenuItem>
              </Select>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={hotmil}
                onChange={(e) => sethotmil(e.target.value)}
              />
              {emailerror && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  لابد من تغيير الهوتميل
                </Typography>
              )}
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              {password.length < 8 && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  password must be more then 8 char
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="passwordR"
                label="Repeat password"
                type="password"
                id="passwordR"
                autoComplete="current-passwordR"
                value={passwordR}
                onChange={(e) => setpasswordR(e.target.value)}
              />
              {password !== passwordR && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  password dose not match
                </Typography>
              )}
              <Button
                type="submit"
                disabled={disabel}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                UdateUser
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}
