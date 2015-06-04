var URLS = {
  projects: 'http://0.0.0.0:3000/api/v1/projects'
};

var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json())
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  getProjects(authentication) {
    console.log('Auth',authentication);
    return fetch(URLS.projects,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':authentication
      }
    }).then((response) => response.json())
  }
};

module.exports = api;
