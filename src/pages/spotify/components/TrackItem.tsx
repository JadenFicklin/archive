import { Track } from "~/pages/spotify/utils/types";

interface TrackItemProps {
  track: Track;
  onPlay: (trackUri: string) => void;
}

export const TrackItem = ({ track, onPlay }: TrackItemProps) => (
  <div key={track.id} className="my-4 flex items-center space-x-4">
    <img
      src={track.album.images[0]?.url || ""}
      alt={track.name}
      className="h-16 w-16"
    />
    <div>
      <p>{track.name}</p>
      <p className="text-gray-500 text-sm">{track.artists[0]?.name}</p>
    </div>
    <button
      onClick={() => onPlay(track.uri)}
      className="rounded bg-blue-500 px-3 py-1 text-white"
    >
      Play
    </button>
  </div>
);
