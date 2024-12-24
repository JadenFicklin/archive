import { useEffect, useState } from "react";
import {
  getTokenFromUrl,
  loadToken,
  saveToken,
  clearToken,
} from "~/pages/spotify/utils/spotify";
import { AuthButton } from "~/pages/spotify/components/AuthButton";
import { Search } from "~/pages/spotify/components/Search";
import { TrackList } from "~/pages/spotify/components/TrackList";
import { Track } from "~/pages/spotify/utils/types";
import axios from "axios";

export const Spotify = () => {
  const [token, setToken] = useState<string | null>(null);
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    const tokenFromUrl = getTokenFromUrl();
    if (tokenFromUrl.token) {
      saveToken(tokenFromUrl.token, tokenFromUrl.expiresIn);
      setToken(tokenFromUrl.token);
      window.location.hash = "";
    } else {
      const loadedToken = loadToken();
      setToken(loadedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify!.Player({
          name: "Spotify React Player",
          getOAuthToken: (cb: (token: string) => void) => cb(token),
        });

        player.addListener("ready", ({ device_id }: { device_id: string }) => {
          console.log("Ready with Device ID", device_id);
          setDeviceId(device_id);
        });

        player.addListener(
          "not_ready",
          ({ device_id }: { device_id: string }) => {
            console.log("Device ID has gone offline", device_id);
          },
        );

        player.connect();
      };
    }
  }, [token]);

  const logout = () => {
    setToken(null);
    clearToken();
  };

  const searchTracks = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: { Authorization: `Bearer ${token}` },
        params: { q: searchKey, type: "track" },
      });
      setTracks(data.tracks.items);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  return (
    <>
      <div className="relative p-3">
        <AuthButton token={token} onLogout={logout} />
        {token && (
          <>
            <Search
              searchKey={searchKey}
              onSearchChange={setSearchKey}
              onSearchSubmit={searchTracks}
            />
            <TrackList
              tracks={tracks}
              token={token}
              deviceId={deviceId}
              onPlay={(track) => setCurrentTrack(track)}
            />
            {/* <input
              placeholder="search songs/artists"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mx-2 rounded-md border border-blue-500 p-1"
            />
            <div className="my-2 h-96 w-full overflow-y-auto rounded-md border border-blue-500"></div> */}
          </>
        )}
      </div>
      {/* <div className="absolute bottom-0 h-16 w-full border-t border-blue-500"></div> */}
    </>
  );
};
