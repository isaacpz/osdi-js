import { GenericOsdiApi } from "./genericOsdiApi";

export class VanOsdiApi extends GenericOsdiApi {
    constructor(apiToken: string) {
        super("https://osdi.ngpvan.com/", apiToken + "|0");
    }
}