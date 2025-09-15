import readline from 'readline';

/**
 * Creates and returns a Node.js readline interface for reading input
 * from the standard input (stdin) and writing output to standard output (stdout).
 * @returns A readline.Interface instance for handling user input.
 */
export function createReadlineInterface(): readline.Interface {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}
