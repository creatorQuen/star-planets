console.log('Hello World');

class StarWarsService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Must not fetch ${url}`, `received ${res.status}`);
    }
  
    const body = await res.json();
    return body;
  };

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results
  };

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  };


  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results
  };

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  };


  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results
  };

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  };

}

const swApi = new StarWarsService();

swApi.getAllPeople().then((people) => {
  people.forEach((p) => {
    console.log(p.name);
  });
});

swApi.getPerson(7).then((person) => {
  console.log('\n', person.name);
})


////-------------------------------------
// const getResource = async (url) => {
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error(`N00000t fetch ${url}`, `received ${res.status}`);
//   }

//   const body = await res.json();
//   // arrayBuffer(), blob(), text(), formData() 
//   return body;
// };

// getResource('https://swapi.dev/api/people/123232323')
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.error('Not fetch', err);
//   });



////------------------------------------------
// fetch('https://swapi.dev/api/people/1')
//   .then((res) => {
//     console.log('Got Response', res.status);
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

