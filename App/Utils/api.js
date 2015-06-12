var URLS = {
  projects: 'http://0.0.0.0:3000/api/v1/projects'
};

var api = {
  getProjects(authentication) {
    console.log('Auth',authentication);
    return fetch(URLS.projects,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':authentication
      }
    }).then((response) => response.json())
  },

  setTicketState(authentication, ticket,state) {
    return fetch(URLS.projects,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':authentication
      },
      method: 'PUT',
      body: JSON.stringify({state: state})
    }).then((response) => {
      console.log(response);
      response.json()
    })
  }
};

module.exports = api;
