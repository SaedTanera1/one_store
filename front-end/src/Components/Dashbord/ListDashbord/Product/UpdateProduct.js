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
import { DoorSliding } from "@mui/icons-material";

export default function UpdateProduct() {
  let Params = useParams();
  const [title, settitle] = React.useState("");
  const [Description, setdescription] = React.useState("");
  const [image, setimage] = React.useState("");

  const [click, setclick] = React.useState(false);
  const [emailerror, setemailerror] = React.useState("");
  const context = React.useContext(User);
  const token = context.auth.tokeen;
  // طريقة اخرى لجلب الا اي دي
  const id = window.location.pathname.split("/").slice(-1)[0];
  const go = useNavigate();
  const fromdata = new FormData();
  fromdata.append(`title`, title);
  fromdata.append(`description`, Description);
  fromdata.append(`image`, image);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/showbyid/${Params.id}`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((response) => response.json())
      .then((res) => {
        settitle(res[0].title);
        setdescription(res[0].description);
      });
  }, []);

  async function handleSubmit(e) {
    let flage = true;
    e.preventDefault();
    setclick(true);
    if (title.length < 8 || Description.length < 8) {
      flage = false;
    } else flage = true;
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/product/update/${Params.id}`,
        fromdata,
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
          go("/Dashbord/Products");
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
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
            {title.length < 8 && click && (
              <Typography sx={{ color: "red", ml: "10px" }}>
                name must be more then 8 char
              </Typography>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="text"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={Description}
              onChange={(e) => setdescription(e.target.value)}
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
              type="file"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setimage(e.target.files.item(0))}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              UdateUser
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
