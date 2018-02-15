import { OsdiApiClient } from "./osdiApiClient";
import * as WebRequest from "web-request";
import { Person } from "../models/person/person";
import OsdiErrorCodes from "./OsdiErrorCodes";

export class GenericOsdiApi implements OsdiApiClient {
  readonly url: string;
  readonly apiToken: string;

  constructor(url: string, apiToken: string) {
    this.url = url;
    this.apiToken = apiToken;
  }

  getPersonById(id: number): Promise<Person> {
    return WebRequest.json(this.url + "/api/v1/people/" + id + "/", {
      headers: {
        "OSDI-API-Token": this.apiToken,
        "Content-type": "application/hal+json"
      },
    }).then((response: any) => {
      if (response["osdi:status"]) {
        if (response["osdi:status"].status == 500) {
          throw Error(response["osdi:status"].description);
        } else if (OsdiErrorCodes[response["osdi:status"].status]) {
          throw Error(OsdiErrorCodes[response["osdi:status"].status]);
        } else {
          throw Error(response["osdi:status"]);
        }
      }
      return <Person>response;
    });
  }
}
