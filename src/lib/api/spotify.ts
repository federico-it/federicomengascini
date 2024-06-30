// lib/spotify.ts

import axios from "axios";

const client_id = process.env.CLIENTID;
const client_secret = process.env.CLIENTSECRET;
const refresh_token = process.env.REFRESHTOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

const getAccessToken = async () => {
  const response = await axios.post(
    TOKEN_ENDPOINT,
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${client_id}:${client_secret}`
        ).toString("base64")}`,
      },
    }
  );

  return response.data.access_token;
};

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  const response = await axios.get(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  const song = response.data;
  return {
    artist: song.item.artists.map((artist: any) => artist.name).join(", "),
    title: song.item.name,
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
    timePlayed: song.progress_ms,
    timeTotal: song.item.duration_ms,
  };
};
