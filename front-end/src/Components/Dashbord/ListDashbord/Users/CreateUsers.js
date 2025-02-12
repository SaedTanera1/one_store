import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { User } from "../../../../Pages/Context/Context";
import { beseURL, create } from "../../../../Api/Api";
import { MenuItem, Select } from "@mui/material";
export default function CreateUsers() {
  // usestate
  const [name, setname] = React.useState("");
  const [hotmil, sethotmil] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [role, setrole] = React.useState("");
  const [click, setclick] = React.useState(false);
  const [emailerror, setemailerror] = React.useState("");
  const context = React.useContext(User);
  const go = useNavigate();

  const token = context.auth.tokeen;

  async function handleSubmit(e) {
    let flage = true;
    e.preventDefault();
    setclick(true);
    if (name.length < 8 || password.length < 8 || password !== passwordR) {
      flage = false;
    } else flage = true;
    try {
      if (flage) {
        await axios.post(
          `${beseURL}/${create}`,
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
      }
    } catch (err) {
      setemailerror(err.response.status);
      console.log(err.response.status);
    }
  }

  return (
    <>
      <Box className="Regester">
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ mt: 8, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mb: 14 }}
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
              {name.length < 8 && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  name must be more then 8 char
                </Typography>
              )}

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

              {emailerror === 422 && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  الايميل مكرر
                </Typography>
              )}
              <TextField
                margin="normal"
                fullWidth
                name="password_confirmation"
                label="password_confirmation"
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                CreateUsers
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
