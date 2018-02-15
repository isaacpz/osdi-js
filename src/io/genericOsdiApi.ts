import { OsdiApiClient } from "./osdiApiClient";
import { Person } from "..";

class GenericOsdiApi implements OsdiApiClient {
  readonly url: string;
  readonly apiToken: string;

  constructor(url: string, apiToken: string) {
    this.url = url;
    this.apiToken = apiToken;
  }

  getPersonById(id: number): Person {
    let p: Person;
    throw new Error("Method not implemented.");
  }
}
