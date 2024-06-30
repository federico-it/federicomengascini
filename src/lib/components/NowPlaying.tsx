// components/NowPlaying.tsx

import { useEffect, useState } from "react";
import useSWR from "swr";
import {
  Box,
  Button,
  Card,
  DarkMode,
  Icon,
  background,
  useColorMode,
} from "@chakra-ui/react";
import { RiSpotifyFill } from "react-icons/ri";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NowPlaying() {
  const { data, error, mutate } = useSWR("/api/now-playing", fetcher);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [percentage, setPercentage] = useState(0);
  const { colorMode } = useColorMode();
  let hide = true;
  useEffect(() => {
    if (data?.isPlaying) {
      setIsPlaying(true);

      const startTimestamp = Date.now() - data.timePlayed;
      setElapsedTime(Date.now() - startTimestamp);

      const interval = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTimestamp;
        setElapsedTime(elapsed);

        // Calcolo della percentuale
        const percent = (elapsed / data.timeTotal) * 100;
        setPercentage(percent > 100 ? 100 : percent);

        // Se il tempo trascorso supera di un secondo il tempo totale della canzone
        if (elapsed >= data.timeTotal + 1000) {
          clearInterval(interval);
          setIsPlaying(false);
          mutate(); // Aggiorna l'API per ottenere la nuova canzone
        }
      }, 1000);

      setTimer(interval);
    } else {
      setIsPlaying(false);
      setElapsedTime(null);
      setPercentage(0);
      setTimer(null);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [data, mutate]);

  if (error)
    return (
      <div>
        Errore durante il recupero delle informazioni dalla API di Spotify.
      </div>
    );

  if (!isPlaying)
    return (
      <div className="flex justify-center items-center gap-x-1">
        <Icon color={"green"} as={RiSpotifyFill}></Icon>Not Playing - Spotify
      </div>
    );

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <Box className=" flex flex-col justify-center ">
      <div className="flex items-center justify-center  ml-1">
        <Icon color={"green"} as={RiSpotifyFill}></Icon>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1"
        >
          {data.title}
        </a>
        -<div className="mx-1">{data.artist}</div>
      </div>

      <div
        className="h-1 bg-green-500"
        style={{ width: percentage.toFixed(2) + "%" }}
      ></div>
    </Box>
  );
}
