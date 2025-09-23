import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

/**
 * Generate a random name.
 * @param lenght The number of words to generate.
 * @returns A unique name.
 */
export function generateRandomName(lenght = 1) {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    separator: '-',
    length: lenght,
  });
}
