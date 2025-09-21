import type { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

// handler(req, res, next)
export const HandlerFnSchema = z.function({
  input: [z.custom<Request>(), z.custom<Response>(), z.custom<NextFunction>()],
  output: z.union([z.void(), z.promise(z.void())]),
});

export type HandlerFn = z.infer<typeof HandlerFnSchema>;
export type RawHandlerFn = z.input<typeof HandlerFnSchema>;
export type ParsedHandlerFn = z.output<typeof HandlerFnSchema>;
