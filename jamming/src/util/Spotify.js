

let accessToken;

const Spotify = {
  getAcessToken() {
    if(accessToken) {
      return accessToken;
    }
  }
}



export default Spotify;
