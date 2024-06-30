// lib/spotify.ts

import axios from "axios";

const client_id = "b276cb278b3044d2a04673e0b54ea5a9";
const client_secret = "7cecb47ad9944855bd1d408b592032ea";
const refresh_token =
  "AQCx5OXaVV3ChLtShDPkX-Y1_i-rTMb4casKrefgYuImGS0ISMZRRWbu_3HBriWyRZ9A28quPg8xpYXyoz_tonS-9SojpC-c2vFdhH3wBSN4rL8caKAkafuPYglh6fZJe1U";

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
