import { Option } from 'commander';

export const times = new Option(
  '-t, --times [number]',
  'number of names to generate'
).default(1);
