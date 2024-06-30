// pages/api/now-playing.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../api/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nowPlaying = await getNowPlaying();

  if (!nowPlaying) {
    return res.status(200).json({ isPlaying: false });
  }

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({ isPlaying: true, ...nowPlaying });
}
