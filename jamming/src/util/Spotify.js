

let accessToken;

const Spotify = {
  getAcessToken() {
    if(accessToken) {
      return accessToken;
    }
const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
const expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expirationTimeMatch)  {
      accessToken = accessTokenMatch[1];
      expirationTime = Number(expirationTimeMatch[1]);
      window.setTimeout(() => accessToken = '', expirationTime * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
  } else {
    let accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  }
},



export default Spotify;
