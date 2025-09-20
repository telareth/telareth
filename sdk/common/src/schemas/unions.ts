import { z } from 'zod';

export const StringOrArraySchema = z.union([z.string(), z.array(z.string())]);
export const StringOrRegExpSchema = z.union([z.string(), z.instanceof(RegExp)]);
