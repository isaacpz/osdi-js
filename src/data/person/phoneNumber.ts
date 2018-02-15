export interface PhoneNumber extends PrimaryField {
  /**
   * The phone number of the person. Must including country code and must be numeric characters only.
   */
  number: string;

  /**
   * An optional associated extension for the number.
   */
  extension: string;
}
