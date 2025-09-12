import { Option } from 'commander';

export const separator = new Option(
  '-s, --separator [string]',
  'the character that separates the generated words'
).default(' ');
