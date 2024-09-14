  /**
   * Converts a number to the "k" format.
   *
   * @param number - The number to convert.
   * @returns The number in "k" format.
   */
  export function toKFormat(number: number): string {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(2)}k`;
    } else {
      return number.toString();
    }
  }

