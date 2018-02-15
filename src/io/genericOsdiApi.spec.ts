import * as chai from "chai";
import "mocha";
import { OsdiApiClient } from "./osdiApiClient";
import { GenericOsdiApi } from "./genericOsdiApi";
import { Person } from "../models/person/person";

before(() => {
  chai.should();
  chai.use(require("chai-things"));
  chai.use(require("chai-as-promised"));
});
const expect = chai.expect;

describe("Generic OSDI API", () => {
  let client: OsdiApiClient;
  it("should be created", () => {
    expect(function() {
      client = new GenericOsdiApi("http://api.opensupporter.org/", "foobar");
    }).to.not.throw();
  });

  it('should find "Peter Pan" as the user with id 42', async () => {
    (await client.getPersonById(42)).should.deep.include({
      given_name: "Peter",
      family_name: "Pan"
    });
  });
});
