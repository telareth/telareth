import type { HelmetOptions } from 'helmet';
import { default as helmet } from 'helmet';
import { z } from 'zod';

export { helmet };
export { type HelmetOptions };

// contentSecurityPolicy
const ContentSecurityPolicySchema = z.object({
  useDefaults: z.boolean().optional(),
  directives: z
    .record(z.string(), z.union([z.string(), z.array(z.string())]))
    .optional(),
  reportOnly: z.boolean().optional(),
});

// crossOriginEmbedderPolicy
const CrossOriginEmbedderPolicySchema = z.object({
  policy: z.enum(['require-corp', 'credentialless']).optional(),
});

// crossOriginOpenerPolicy
const CrossOriginOpenerPolicySchema = z.object({
  policy: z
    .enum(['same-origin', 'same-origin-allow-popups', 'unsafe-none'])
    .optional(),
});

// crossOriginResourcePolicy
const CrossOriginResourcePolicySchema = z.object({
  policy: z.enum(['same-origin', 'same-site', 'cross-origin']).optional(),
});

// dnsPrefetchControl
const DnsPrefetchControlSchema = z.object({
  allow: z.boolean().optional(),
});

// expectCt
const ExpectCtSchema = z.object({
  enforce: z.boolean().optional(),
  maxAge: z.number().optional(),
  reportUri: z.string().optional(),
});

// frameguard
const FrameguardSchema = z.object({
  action: z.enum(['deny', 'sameorigin']).optional(),
  domain: z.string().optional(),
});

// hsts
const HstsSchema = z.object({
  maxAge: z.number(),
  includeSubDomains: z.boolean().optional(),
  preload: z.boolean().optional(),
});

// permittedCrossDomainPolicies
const PermittedCrossDomainPoliciesSchema = z.object({
  permittedPolicies: z
    .enum(['none', 'master-only', 'by-content-type', 'all'])
    .optional(),
});

const ReferrerPolicyTokens = z.enum([
  'no-referrer',
  'no-referrer-when-downgrade',
  'same-origin',
  'origin',
  'strict-origin',
  'origin-when-cross-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
]);

const ReferrerPolicySchema = z.object({
  policy: z
    .union([ReferrerPolicyTokens, z.array(ReferrerPolicyTokens)])
    .optional(),
});

// hidePoweredBy, ieNoOpen, noSniff, originAgentCluster, xssFilter → boolean flags o strutture molto semplici
const HidePoweredBySchema = z.object({
  setTo: z.string().optional(),
});

const BooleanConfigSchema = z.boolean();

export const HelmetOptionsSchema = z.looseObject({
  contentSecurityPolicy: z
    .union([ContentSecurityPolicySchema, z.boolean()])
    .optional(),
  crossOriginEmbedderPolicy: z
    .union([CrossOriginEmbedderPolicySchema, z.boolean()])
    .optional(),
  crossOriginOpenerPolicy: z
    .union([CrossOriginOpenerPolicySchema, z.boolean()])
    .optional(),
  crossOriginResourcePolicy: z
    .union([CrossOriginResourcePolicySchema, z.boolean()])
    .optional(),
  dnsPrefetchControl: z
    .union([DnsPrefetchControlSchema, z.boolean()])
    .optional(),
  expectCt: z.union([ExpectCtSchema, z.boolean()]).optional(),
  frameguard: z.union([FrameguardSchema, z.boolean()]).optional(),
  hidePoweredBy: z.union([HidePoweredBySchema, z.boolean()]).optional(),
  hsts: z.union([HstsSchema, z.boolean()]).optional(),
  ieNoOpen: BooleanConfigSchema.optional(),
  noSniff: BooleanConfigSchema.optional(),
  originAgentCluster: BooleanConfigSchema.optional(),
  permittedCrossDomainPolicies: z
    .union([PermittedCrossDomainPoliciesSchema, z.boolean()])
    .optional(),
  referrerPolicy: z.union([ReferrerPolicySchema, z.boolean()]).optional(),
  xssFilter: BooleanConfigSchema.optional(),
});

export type RawHelmetOptions = z.input<typeof HelmetOptionsSchema>;
export type ParsedHelmetOptions = z.output<typeof HelmetOptionsSchema>;
