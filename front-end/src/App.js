import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  CardHome,
  CreateUsers,
  Dashbord,
  Footer,
  Hero,
  Login,
  Looding,
  Nave,
  NewProduct,
  NotFound,
  Products,
  Register,
  ScrollToTop,
  UpdateProduct,
  UpdateUser,
  Users,
  ProductPage,
} from "./Comopnees";
import  Footer2 from "./Pages/Footer/Footer2";
import  Pay from "./Pages/Pay";
import  Support from "./Pages/Support";

import "./App.css";
import { ThemeProvider } from "@mui/material";

import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import CardShoping from "./Pages/HomePage/CardShoping/CardShoping";
import Admin from "./Components/Dashbord/Admin/Admin";
import TopBar from "./Components/Dashbord/Admin/TopBar";
import SideBar from "./Components/Dashbord/Admin/SideBar";
import Team from "./Components/Dashbord/Admin/page/team/Team";
import Geography from "./Components/Dashbord/Admin/page/geography/Geography";
import FAQ from "./Components/Dashbord/Admin/page/faq/FAQ";
import Invoices from "./Components/Dashbord/Admin/page/invoices/Invoices";
import PieChart from "./Components/Dashbord/Admin/page/pieChart/PieChart";
import BarChart from "./Components/Dashbord/Admin/page/barChart/BarChart";
import DashboardADmin from "./Components/Dashbord/Admin/page/DashboardADmin/DashboardADmin";
import Form from "./Components/Dashbord/Admin/page/form/Form";
import ProductAdmin from "./Components/Dashbord/Admin/page/product/ProductAdmin";
/* 
import Contacts from "./Components/Dashbord/Admin/page/contacts/Contacts";
import LineChart from "./Components/Dashbord/Admin/page/lineChart/LineChart";
import Calendar from "./Components/Dashbord/Admin/page/calendar/Calendar";
*/

function App() {
  const [mytheme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={mytheme}>
          <CssBaseline />
          <BrowserRouter basename={"/one_store"}>
            <Routes>
              <Route element={<Looding />}>
                <Route
                  element={
                    <>
                      <Nave />
                      <Hero />
                      <CardHome />
                      <ScrollToTop />
                      <Footer2 />
                      <Footer />
                    </>
                  }
                  path="/"
                />
                <Route
                  element={
                    <>
                      <Nave />
                      <ProductPage />
                      <Footer2 />
                      <Footer />

                    </>
                  }
                  path="/ProductPage/:id"
                />
                <Route
                  path="*"
                  element={
                    <>
                      <NotFound />
                    </>
                  }
                />
                <Route
                  path="/Card"
                  element={
                    <>
                      <CardShoping />
                      <Footer2 />

                      <Footer />
                    </>
                  }
                />

                <Route
                 path="/Pay"
                  element={
                    <>
                      <Nave />
                      <Pay />
                      <Footer2 />
                      <Footer />

                    </>
                  }
                 
                />


                <Route
                 path="/Support/:id"
                  element={
                    <>
                      <Nave />
                      <Support />
                      <Footer2 />
                      <Footer />

                    </>
                  }
                />

                {/* Dashbord */}

                {/*   <Route element={<PersistLogin />}>
                // ممنوع الدخول هذه الصفحات الا من خلال التوكين وبالتحديد الادمن
                <Route element={<RequireAuth adminoruser={[1995, 1996]} />}> */}
                <Route element={<Dashbord />} path="/Dashbord">
                  <Route element={<Users />} path="Users" />
                  <Route element={<CreateUsers />} path="User/create" />
                  <Route element={<UpdateUser />} path="Users/:id" />
                  <Route element={<Products />} path="Products" />
                  <Route element={<NewProduct />} path="Product/create" />
                  <Route element={<UpdateProduct />} path="Products/:id" />
                </Route>
                {/* user */}
                <Route
                  element={
                    <>
                      <Login /> <Footer />
                    </>
                  }
                  path="/Login"
                />

                <Route
                  element={
                    <>
                      <Register /> <Footer />
                    </>
                  }
                  path="/Register"
                />
                {/* DAshbord new */}

                <Route element={<Admin />} path="/Admin">
                  <Route element={<TopBar />} />
                  <Route element={<SideBar />} />
                  <Route element={<Team />} path="/Admin/team" />
                  <Route
                    element={<ProductAdmin />}
                    path="/Admin/ProductAdmin"
                  />
                  <Route element={<Geography />} path="/Admin/geography" />
                  <Route element={<Invoices />} path="/Admin/invoices" />
                  <Route element={<Form />} path="/Admin/form" />
                  <Route element={<FAQ />} path="/Admin/faq" />
                  <Route element={<PieChart />} path="/Admin/pie" />
                  <Route
                    index
                    element={<DashboardADmin />}
                    path="/Admin/admin"
                  />
                  <Route element={<BarChart />} path="/Admin/bar" />

                  {/*   <Route element={<LineChart />} path="/Admin/line" />
                  <Route element={<Contacts />} path="/contacts" />*/}
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
