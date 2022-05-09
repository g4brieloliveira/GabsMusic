import axios from "axios";
import base64 from "react-native-base64";
import { CLIENT_ID, CLIENT_SECRET } from "@env";

const baseUrl = "https://accounts.spotify.com/api";
const Authorization = `Basic ${base64.encode(CLIENT_ID + ":" + CLIENT_SECRET)}`;

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
