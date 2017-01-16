const api = {
  getBio(username) {
    const url = `https://api.github.com/users/${username.toLowerCase().trim()}`;
    return fetch(url).then( res => res.json() );
  },

  getRepos(username) {
    const url = `https://api.github.com/users/${username.toLowerCase().trim()}/repos`;
    return fetch(url).then( res => res.json() );
  }
};

export default api;
