import Login from "./Login";
import Player from "./Player";
import "./App.css";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    const fetchData = async () => {
      try {
        if (_token) {
          dispatch({
            type: "SET_TOKEN",
            token: _token,
          });

          spotify.setAccessToken(_token);

          const user = await spotify.getMe();
          dispatch({
            type: "SET_USER",
            user: user,
          });

          const playlists = await spotify.getUserPlaylists();
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });

          spotify.getPlaylist("37i9dQZEVXcVKD4e5V19n7").then((response) =>
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            })
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
