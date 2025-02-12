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
import { beseURL, newproduct } from "../../../../Api/Api";
import { User } from "../../../../Pages/Context/Context";
export function NewProduct() {
  // usestate
  const [title, settitle] = React.useState("");
  const [Description, setdescription] = React.useState("");
  const [image, setimage] = React.useState("");
  const [click, setclick] = React.useState(false);
  const go = useNavigate();
  const auth = React.useContext(User);
  const token = auth.auth.tokeen;

  async function handleSubmit(e) {
    let flage = true;
    e.preventDefault();
    setclick(true);
    if (title.length < 8 || Description.length < 8) {
      flage = false;
    } else flage = true;
    try {
      const fromdata = new FormData();
      fromdata.append(`title`, title);
      fromdata.append(`description`, Description);
      fromdata.append(`image`, image);
      if (flage) {
        await axios.post("http://127.0.0.1:8000/api/product/create", fromdata, {
          headers: { Authorization: "Bearer " + token },
        });
        go("/Dashbord/Products");
      }
    } catch (err) {
      console.log(err.response.data);
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
                id="title"
                label="title "
                name="title"
                autoComplete="title"
                autoFocus
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
              {title.length < 8 && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  title must be more then 8 char
                </Typography>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                type="text"
                label="description "
                name="description"
                autoComplete="description"
                autoFocus
                value={Description}
                onChange={(e) => setdescription(e.target.value)}
              />
              {Description.length < 8 && click && (
                <Typography sx={{ color: "red", ml: "10px" }}>
                  description must be more then 8 char
                </Typography>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="file"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setimage(e.target.files.item(0))}
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
