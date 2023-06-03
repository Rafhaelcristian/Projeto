import axios from "axios";

export const api = axios.create({
  baseURL: "https://v3.football.api-sports.io/",
  timeout: 10000,
  headers: {
    "x-rapidapi-host": "v3.football.api-sports .io",
    "x-rapidapi-key": `${"190f2b32d24c6aea53c026bbad9dc56b"}`,
  },
});
