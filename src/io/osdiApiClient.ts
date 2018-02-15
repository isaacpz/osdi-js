import { Person } from "..";

export interface OsdiApiClient {
  getPersonById(id: number): Promise<Person>;
}
