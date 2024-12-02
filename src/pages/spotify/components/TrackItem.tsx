import { useState } from "react";
import axios from "axios";
import { Track } from "~/pages/spotify/utils/types";

interface TrackItemProps {
  track: Track;
  token: string;
  deviceId: string | null;
}

export const TrackItem = ({ track, token, deviceId }: TrackItemProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const pauseTrack = async () => {
    try {
      await axios.put(
        "https://api.spotify.com/v1/me/player/pause",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsPlaying(false);
    } catch (error) {
      console.error("Error pausing track:", error);
    }
  };

  const resumeTrack = async () => {
    if (!deviceId) {
      console.error("No active device available for playback.");
      return;
    }

    try {
      await axios.put(
        "https://api.spotify.com/v1/me/player/play",
        {}, // No `uris` parameter ensures playback resumes from the current position.
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      setIsPlaying(true);
    } catch (error) {
      console.error("Error resuming track:", error);
    }
  };

  return (
    <div className="my-4 flex items-center space-x-4">
      <img
        src={track.album.images[0]?.url || ""}
        alt={track.name}
        className="h-16 w-16"
      />
      <div>
        <p>{track?.name || "Unknown Track"}</p>
        <p className="text-gray-500 text-sm">
          {track?.artists?.[0]?.name || "Unknown Artist"}
        </p>
      </div>
      <button
        onClick={isPlaying ? pauseTrack : resumeTrack}
        className="rounded bg-blue-500 px-3 py-1 text-white"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
