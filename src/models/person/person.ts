import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phoneNumber";

export interface Person {
  /**
   * A unique number to identify this person
   */
  id: number;

  /**
   * A unique string array of identifiers in the format [system name]:[id].
   */
  identifiers?: string[];

  /**
   * The person’s first name.
   */
  given_name: string;

  /**
   * The person’s last name.
   */
  family_name?: string;

  /**
   * An additional name not included in family or given. Usually a middle name.
   */
  additional_name?: string; //probably middle name

  /**
   * An array of postal address objects associated with the person.
   */
  postal_addresses: Address[];

  /**
   * An array of email address objects associated with the person.
   */
  email_addresses: Email[];

  /**
   * An array of phone number objects associated with the person.
   */
  phone_numbers: PhoneNumber[];
}
