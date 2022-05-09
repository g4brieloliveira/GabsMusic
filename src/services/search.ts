import axios from "axios";
import { getAccessToken } from "./getAccessToken";

const baseUrl = "https://api.spotify.com/v1";

type Props = {
  offset: number;
  limit: number;
  value: string;
};

export const search = async ({ offset, limit, value }: Props) => {
  const { access_token } = await getAccessToken();

  const data = await axios(
    `${baseUrl}/search?type=track&limit=${limit}&offset=${offset}&q=${encodeURIComponent(
      value
    )}*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    }
  )
    .then((res) => {
      return res.data.tracks.items;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
