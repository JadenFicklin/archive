declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady?: () => void;
    Spotify?: {
      Player: new (options: {
        name: string;
        getOAuthToken: (cb: (token: string) => void) => void;
      }) => {
        connect: () => Promise<boolean>;
        addListener: (
          event: string,
          callback: (args: { device_id: string }) => void,
        ) => void;
      };
    };
  }
}

export {};
