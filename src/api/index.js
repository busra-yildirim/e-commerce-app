import axios from "axios";
import { getToken } from "../utils";

const BASE_URL = "https://bootcampapi.techcs.io/api/fe/v1";

const token = getToken();

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});
