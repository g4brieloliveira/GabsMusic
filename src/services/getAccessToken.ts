import axios from "axios";
import base64 from "react-native-base64";

const baseUrl = "https://accounts.spotify.com/api";

const client_id = "f1e010e2016140249d49bffa192e2779";
const client_secret = "9d740fa8573a48d4ba1727704396a8b5";
const Authorization = `Basic ${base64.encode(client_id + ":" + client_secret)}`;

export const getAccessToken = async () => {
  const data = await axios(`${baseUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: Authorization,
    },
    data: "grant_type=client_credentials",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
