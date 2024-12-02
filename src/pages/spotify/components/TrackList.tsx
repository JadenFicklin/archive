import { TrackItem } from "~/pages/spotify/components/TrackItem";
import { Track } from "~/pages/spotify/utils/types";

interface TrackListProps {
  tracks: Track[];
  token: string;
  deviceId: string | null;
  onPlay: (track: Track) => void; // Callback to notify parent about the currently playing track
}

export const TrackList = ({
  tracks,
  token,
  deviceId,
  onPlay,
}: TrackListProps) => {
  return (
    <div>
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          token={token}
          deviceId={deviceId}
          onPlay={onPlay}
        />
      ))}
    </div>
  );
};
