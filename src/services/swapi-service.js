export default class StarWarsService {

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