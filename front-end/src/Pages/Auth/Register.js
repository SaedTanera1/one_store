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
import Cookies from "universal-cookie";
import { User } from "../Context/Context";
import { useTheme } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Api/firbace";

export default function Register() {
  // usestate
  const [name, setname] = React.useState("");
  const [hotmil, sethotmil] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [click, setclick] = React.useState(false);
  const [emailerror, setemailerror] = React.useState("");
  const user = React.useContext(User);
  const go = useNavigate();
  const Coookies = new Cookies();
  const theme = useTheme();
  console.log(Coookies);
  async function handleSubmit(e) {
    let flage = true;
    e.preventDefault();
    setclick(true);
    if (password.length < 3 || password !== passwordR) {
      flage = false;
    } else flage = true;
    try {
      if (flage) {


        
        createUserWithEmailAndPassword(auth, hotmil, password)
  .then((userCredential) => {
    go("/Login")
    // Signed up 
    const user = userCredential.user;
    // ...
  })


      }
    } catch (err) {
      setemailerror(err.response.status);
      console.log(err.response.status);
      
    }
  }

  return (
    <>
      <Box sx={{ py: 4.6 }}>
        <Container maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#54545" : "#803735",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="name "
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                error={click && name.length < 8}
                helperText={
                  name.length < 3 && click
                    ? "name must be more then 8 char"
                    : ""
                }
                onChange={(e) => setname(e.target.value)}
              />

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
                error={click && !hotmil}
                value={hotmil}
                helperText={
                  emailerror === 422 && click ? "   الايميل مكرر" : ""
                }
                onChange={(e) => sethotmil(e.target.value)}
              />

              <TextField
                margin="normal"
                fullWidth
                name="password_confirmation"
                label="password_confirmation"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                error={click && !password}
                helperText={
                  !password && click
                    ? "password must be more then 8 char "
                    : "do not share password with anyone"
                }
                onChange={(e) => setpassword(e.target.value)}
              />
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
                error={
                  (click && password !== passwordR) || (click && !password)
                }
                helperText={
                  password !== passwordR && click ? "كلمه السر غير متطابقة" : ""
                }
                onChange={(e) => setpasswordR(e.target.value)}
              />
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
                Register
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/Login" variant="body2">
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
