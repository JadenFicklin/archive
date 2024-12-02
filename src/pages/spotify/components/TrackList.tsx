import { TrackItem } from "~/pages/spotify/components/TrackItem";
import { Track } from "~/pages/spotify/utils/types";

interface TrackListProps {
  tracks: Track[];
  onPlay: (trackUri: string) => void;
}

export const TrackList = ({ tracks, onPlay }: TrackListProps) => {
  return (
    <div>
      {tracks.map((track) => (
        <TrackItem key={track.id} track={track} onPlay={onPlay} />
      ))}
    </div>
  );
};
