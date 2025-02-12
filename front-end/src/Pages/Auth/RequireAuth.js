import React, { useContext, useEffect, useState } from "react";
import { User } from "../Context/Context";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Looding from "../Looding/Looding";
import Cookies from "universal-cookie";
import axios from "axios";
import { beseURL } from "../../Api/Api";

export default function RequireAuth() {
  const Location = useLocation();
  const Userr = useContext(User);
  const cookis = new Cookies();

  const token = cookis.get("Bearer");
  const [user, setuser] = useState("");
  const go = useNavigate();
  /* اذا دخل على الابلكيشن وغير اسم التوكين او لعب بالاعدادات تعتهم برجعو لصفحه الدخول */

  useEffect(() => {
    axios
      .get(`${beseURL}/user`, {
        headers: { authorization: "Bearer " + token },
      })
      .then((data) => setuser(data.data))
      .catch(() => go("/login", { replace: true }));
  }, []);

  // اذا الاوث فيها التوكين والمعلومات اظهرلي الي داخل الريكوايرد الي هما محميين المسارات اما مش موجود ارجعلي ع صفحه اللوق ان
  return token ? (
    user === "" ? (
      <Looding />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
