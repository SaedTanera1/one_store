import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { User } from "../Context/Context";
import axios from "axios";
import { beseURL } from "../../Api/Api";
import Looding from "./../Looding/Looding";
import { useState } from "react";
import Cookies from "universal-cookie";

function PersistLogin() {
  const context = useContext(User);
  const tokeen = context.auth.tokeen;

  const [Loooding, setLoooding] = useState(true);
  const cookis = new Cookies();
  const tokenCookies = cookis.get("Bearer");

  useEffect(() => {
    async function refrech() {
      try {
        await axios
          .post(`${beseURL}/refresh`, null, {
            headers: {
              Authorization: "Bearer " + tokenCookies,
            },
          })
          .then((data) => {
            cookis.set("Bearer", data.data.token);
            context.setauth(() => {
              return {
                users: data.data.user,
                tokeen: data.data.token,
              };
            });
          });
      } catch (e) {
        console.log(e);
      } finally {
        setLoooding(false);
      }
    }

    !tokeen ? refrech() : setLoooding(false);
  }, []);
  return Loooding ? <Looding /> : <Outlet />;
}

export default PersistLogin;
