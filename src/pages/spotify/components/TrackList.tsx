import { TrackItem } from "~/pages/spotify/components/TrackItem";
import { Track } from "~/pages/spotify/utils/types";

interface TrackListProps {
  tracks: Track[];
  token: string;
  deviceId: string | null;
}

export const TrackList = ({ tracks, token, deviceId }: TrackListProps) => {
  return (
    <div>
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          token={token}
          deviceId={deviceId}
        />
      ))}
    </div>
  );
};
