interface AuthButtonProps {
  token: string | null;
  onLogout: () => void;
}

export const AuthButton = ({ token, onLogout }: AuthButtonProps) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
  const REDIRECT_URI = "http://localhost:3000/spotify";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPES = "streaming user-modify-playback-state";

  if (token) {
    return (
      <button onClick={onLogout} className="rounded bg-red-500 p-2 text-white">
        Logout
      </button>
    );
  }

  return (
    <a
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPES}`}
      className="rounded-md bg-blue-500 p-3 text-white"
    >
      Login to Spotify
    </a>
  );
};
