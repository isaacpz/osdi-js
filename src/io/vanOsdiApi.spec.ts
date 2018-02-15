import * as chai from "chai";
import "mocha";
import { OsdiApiClient } from "./osdiApiClient";
import { VanOsdiApi } from "./vanOsdiApi";
import { Person } from "../models/person/person";

before(() => {
  chai.should();
  chai.use(require("chai-things"));
  chai.use(require("chai-as-promised"));
});
const expect = chai.expect;

describe("Generic OSDI API", async () => {
  let client: OsdiApiClient;
  it("should be created", () => {
    expect(function() {
      client = new VanOsdiApi("84606d9f-e019-59a1-f817-88f8b69806d4");
    }).to.not.throw();
  });

  it('should find "Robert" as the user with id 5', async () => {
    (await client.getPersonById(5)).should.deep.include({
      given_name: "Robert",
    });
  });
});
