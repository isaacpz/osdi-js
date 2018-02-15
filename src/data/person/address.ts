export interface Address extends PrimaryField {
  /**
   * The type of address. One of “Home”, “Work”, or “Mailing”.
   */
  address_lines: string[];

  /**
   * A city or other local administrative area.
   */
  locality: string;

  /**
   * State or subdivision codes according to ISO 3166-2 (Final 2 alpha digits).
   */
  region: string;

  /**
   * The region specific postal code, such as a zip code.
   */
  postal_code: string;
}
