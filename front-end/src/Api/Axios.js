import axios from "axios";
import { beseURL } from "./Api";
import Cookies from "universal-cookie";
const Cookiess = new Cookies();
const token = Cookiess.get("Bearer");
// مختصر عشان ما نكتر الاكواد تعت التوكين
export const Axios = axios.create({
  baseURL: beseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
