import readline from 'readline';

/**
 * Creates a Readline interface for user input.
 * @returns The readline interface.
 */
export function createReadlineInterface(): readline.Interface {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}
