export default class APIService {
  httpLibrary: any;

  constructor(fetch: any) {
    this.httpLibrary = fetch;
  }

  makeGetRequest = (route: string) => {
    return this.httpLibrary.get(route);
  };
}
