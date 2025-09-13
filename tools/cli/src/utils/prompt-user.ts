import { createReadlineInterface } from './create-readline-interface.js';

/**
 * Prompts the user for a yes/no response.
 * @param query The question to ask the user.
 * @returns A promise that resolves to true for 'yes' and false for 'no'.
 */
export async function promptUser(query: string): Promise<boolean> {
  const rl = createReadlineInterface();
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}
