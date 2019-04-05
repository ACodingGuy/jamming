const clientId = "e8a6dfc39e414bba9305968c384ee73b";
const redirectUri = "http://localhost:3000/";

let accessToken;

const Spotify = {
  getAcessToken() {
    if(accessToken) {
      return accessToken;
    }
const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch)  {
      accessToken = accessTokenMatch[1];
      expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
  } else {
    let accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  }
},



export default Spotify;
