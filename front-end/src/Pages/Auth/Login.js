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
import Cookies from "universal-cookie";
import { LOGIN, beseURL } from "./../../Api/Api";
import { User } from "../Context/Context";
import Swal from "sweetalert2";
import Navetow from "../../Components/Nave/Navetow";
import { useTheme } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../Api/firbace";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  
  const user = React.useContext(User);
  const go = useNavigate();
  const theme = useTheme();
  // usestate
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [click, setclick] = React.useState(false);
  const [emailerror, setemailerror] = React.useState("");

  async function handleSubmit(e) {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "./one_store-";

     
    })
   
  }

   
  

  return (
    <>
      <Box sx={{ py: 16.5 }}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
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
                required
                fullWidth
                id="email"
                type="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                error={
                  (click && !email) ||
                  (emailerror === 422 && click) ||
                  (emailerror === 401 && click)
                }
                helperText={
                  click && !email
                    ? "الرجاء كتابة الاميل"
                    : "" || (emailerror === 422 && click)
                    ? "الايميل مكرر"
                    : "" || (emailerror === 401 && click)
                    ? " الاميل الذي ادخلته غير مسجل"
                    : ""
                }
                onChange={(e) => setemail(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                error={password.length < 8 && click}
                helperText={
                  password.length < 8 && click
                    ? "password must be more then 8 char"
                    : ""
                }
                onChange={(e) => setpassword(e.target.value)}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#90CAF9" : "#4C5462",
                  },
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#757575" : "#803735",
                }}
              >
                Sign In
              </Button>
              <Grid container pt={2}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/Register" variant="body2">
                    Register
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
