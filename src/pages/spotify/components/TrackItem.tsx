import axios from "axios";
import { Track } from "~/pages/spotify/utils/types";

interface TrackItemProps {
  track: Track;
  token: string;
  deviceId: string | null;
  onPlay: (track: Track) => void; // Notify parent about the currently playing track
}

export const TrackItem = ({
  track,
  token,
  deviceId,
  onPlay,
}: TrackItemProps) => {
  const playTrack = async () => {
    if (!deviceId) {
      console.error("No active device available for playback.");
      return;
    }

    try {
      await axios.put(
        `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        {
          uris: [track.uri], // Specify the track URI to start playback
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      onPlay(track); // Notify parent about the selected track
    } catch (error) {
      console.error("Error playing track:", error);
    }
  };

  return (
    <div
      className="my-4 flex cursor-pointer items-center space-x-4 rounded-md p-4 hover:bg-black hover:bg-opacity-5 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-5"
      onClick={playTrack} // Click to play the track
    >
      <img
        src={track.album.images[0]?.url || ""}
        alt={track.name}
        className="h-16 w-16"
      />
      <div>
        <p className="font-medium">{track?.name || "Unknown Track"}</p>
        <p className="text-gray-500 text-sm">
          {track?.artists?.[0]?.name || "Unknown Artist"}
        </p>
      </div>
    </div>
  );
};
