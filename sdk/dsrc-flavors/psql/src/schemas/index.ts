/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import { z } from 'zod';

import type { Prisma } from '../dsrc/client.js';
// JSON helper schemas (hoisted)
const jsonSchema = (() => {
  const JsonValueSchema: any = (() => {
    const recur: any = z.lazy(() =>
      z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.literal(null),
        z.record(
          z.string(),
          z.lazy(() => recur.optional())
        ),
        z.array(z.lazy(() => recur)),
      ])
    );
    return recur;
  })();
  return JsonValueSchema;
})();
// File: TransactionIsolationLevel.schema.ts

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export type TransactionIsolationLevel = z.infer<
  typeof TransactionIsolationLevelSchema
>;

// File: AccountScalarFieldEnum.schema.ts

export const AccountScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'isActive',
  'passwordId',
]);

export type AccountScalarFieldEnum = z.infer<
  typeof AccountScalarFieldEnumSchema
>;

// File: AccountEmailScalarFieldEnum.schema.ts

export const AccountEmailScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'email',
  'isPrimary',
  'accountId',
  'verificationId',
]);

export type AccountEmailScalarFieldEnum = z.infer<
  typeof AccountEmailScalarFieldEnumSchema
>;

// File: AccountEmailVerificationScalarFieldEnum.schema.ts

export const AccountEmailVerificationScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
]);

export type AccountEmailVerificationScalarFieldEnum = z.infer<
  typeof AccountEmailVerificationScalarFieldEnumSchema
>;

// File: AccountPasswordScalarFieldEnum.schema.ts

export const AccountPasswordScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'password',
]);

export type AccountPasswordScalarFieldEnum = z.infer<
  typeof AccountPasswordScalarFieldEnumSchema
>;

// File: HealthScalarFieldEnum.schema.ts

export const HealthScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'lastChecked',
  'metadata',
]);

export type HealthScalarFieldEnum = z.infer<typeof HealthScalarFieldEnumSchema>;

// File: SortOrder.schema.ts

export const SortOrderSchema = z.enum(['asc', 'desc']);

export type SortOrder = z.infer<typeof SortOrderSchema>;

// File: NullableJsonNullValueInput.schema.ts

export const NullableJsonNullValueInputSchema = z.enum(['DbNull', 'JsonNull']);

export type NullableJsonNullValueInput = z.infer<
  typeof NullableJsonNullValueInputSchema
>;

// File: QueryMode.schema.ts

export const QueryModeSchema = z.enum(['default', 'insensitive']);

export type QueryMode = z.infer<typeof QueryModeSchema>;

// File: NullsOrder.schema.ts

export const NullsOrderSchema = z.enum(['first', 'last']);

export type NullsOrder = z.infer<typeof NullsOrderSchema>;

// File: JsonNullValueFilter.schema.ts

export const JsonNullValueFilterSchema = z.enum([
  'DbNull',
  'JsonNull',
  'AnyNull',
]);

export type JsonNullValueFilter = z.infer<typeof JsonNullValueFilterSchema>;

// File: HealthStatus.schema.ts

export const HealthStatusSchema = z.enum(['OK', 'WARN', 'ERROR']);

export type HealthStatus = z.infer<typeof HealthStatusSchema>;

// File: AccountWhereInput.schema.ts

const accountwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountWhereInputObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountWhereInputObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    passwordId: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    emails: z.lazy(() => AccountEmailListRelationFilterObjectSchema).optional(),
    password: z
      .union([
        z.lazy(() => AccountPasswordScalarRelationFilterObjectSchema),
        z.lazy(() => AccountPasswordWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput> =
  accountwhereinputSchema as unknown as z.ZodType<Prisma.AccountWhereInput>;
export const AccountWhereInputObjectZodSchema = accountwhereinputSchema;

// File: AccountOrderByWithRelationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountOrderByWithRelationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      deletedAt: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      passwordId: SortOrderSchema.optional(),
      emails: z
        .lazy(() => AccountEmailOrderByRelationAggregateInputObjectSchema)
        .optional(),
      password: z
        .lazy(() => AccountPasswordOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> =
  __makeSchema_AccountOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.AccountOrderByWithRelationInput>;
export const AccountOrderByWithRelationInputObjectZodSchema =
  __makeSchema_AccountOrderByWithRelationInput_schema();

// File: AccountWhereUniqueInput.schema.ts

/**
 *
 */
const __makeSchema_AccountWhereUniqueInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      passwordId: z.string().optional(),
    })
    .strict()
    .superRefine((obj, ctx) => {
      /**
       * @param k
       */
      const presentTop = (k: string) => (obj as any)[k] != null;
      const singles: string[] = ['id', 'passwordId'] as string[];
      const groups: string[][] = [] as string[][];

      const anySingle =
        Array.isArray(singles) && singles.length > 0
          ? singles.some(presentTop)
          : false;

      let anyComposite = false;
      if (Array.isArray(groups) && groups.length > 0) {
        // Iterate over nested composite selectors (e.g., { composite_key_name: { a: ..., b: ... } })
        for (const [propKey, composite] of Object.entries(
          obj as Record<string, unknown>
        )) {
          if (!composite || typeof composite !== 'object') continue;
          for (const g of groups as string[][]) {
            if (!Array.isArray(g) || g.length === 0) continue;

            /**
             * @param k
             */
            const presentInComposite = (k: string) =>
              (composite as any)[k] != null;
            const provided = (g as string[]).filter(presentInComposite).length;
            if (provided > 0 && provided < g.length) {
              for (const f of g as string[]) {
                if (!presentInComposite(f)) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'All fields of composite unique must be provided',
                    path: [propKey, f],
                  });
                }
              }
            }
            if (provided === g.length && g.length > 0) {
              anyComposite = true;
            }
          }
        }
      }

      if (!anySingle && !anyComposite) {
        ctx.addIssue({
          code: 'custom',
          message: 'Provide at least one unique selector',
        });
      }
    });
export const AccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountWhereUniqueInput> =
  __makeSchema_AccountWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.AccountWhereUniqueInput>;
export const AccountWhereUniqueInputObjectZodSchema =
  __makeSchema_AccountWhereUniqueInput_schema();

// File: AccountOrderByWithAggregationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountOrderByWithAggregationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      deletedAt: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      passwordId: SortOrderSchema.optional(),
      _count: z
        .lazy(() => AccountCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => AccountMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => AccountMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> =
  __makeSchema_AccountOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.AccountOrderByWithAggregationInput>;
export const AccountOrderByWithAggregationInputObjectZodSchema =
  __makeSchema_AccountOrderByWithAggregationInput_schema();

// File: AccountScalarWhereWithAggregatesInput.schema.ts

const accountscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    passwordId: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const AccountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> =
  accountscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput>;
export const AccountScalarWhereWithAggregatesInputObjectZodSchema =
  accountscalarwherewithaggregatesinputSchema;

// File: AccountEmailWhereInput.schema.ts

const accountemailwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountEmailWhereInputObjectSchema),
        z.lazy(() => AccountEmailWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountEmailWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountEmailWhereInputObjectSchema),
        z.lazy(() => AccountEmailWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isPrimary: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    accountId: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    verificationId: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    account: z
      .union([
        z.lazy(() => AccountNullableScalarRelationFilterObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema),
      ])
      .optional(),
    verification: z
      .union([
        z.lazy(
          () => AccountEmailVerificationNullableScalarRelationFilterObjectSchema
        ),
        z.lazy(() => AccountEmailVerificationWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const AccountEmailWhereInputObjectSchema: z.ZodType<Prisma.AccountEmailWhereInput> =
  accountemailwhereinputSchema as unknown as z.ZodType<Prisma.AccountEmailWhereInput>;
export const AccountEmailWhereInputObjectZodSchema =
  accountemailwhereinputSchema;

// File: AccountEmailOrderByWithRelationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailOrderByWithRelationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      email: SortOrderSchema.optional(),
      isPrimary: SortOrderSchema.optional(),
      accountId: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      verificationId: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      account: z
        .lazy(() => AccountOrderByWithRelationInputObjectSchema)
        .optional(),
      verification: z
        .lazy(
          () => AccountEmailVerificationOrderByWithRelationInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountEmailOrderByWithRelationInput> =
  __makeSchema_AccountEmailOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailOrderByWithRelationInput>;
export const AccountEmailOrderByWithRelationInputObjectZodSchema =
  __makeSchema_AccountEmailOrderByWithRelationInput_schema();

// File: AccountEmailWhereUniqueInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailWhereUniqueInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      email: z.string().optional(),
      verificationId: z.string().optional(),
    })
    .strict()
    .superRefine((obj, ctx) => {
      /**
       * @param k
       */
      const presentTop = (k: string) => (obj as any)[k] != null;
      const singles: string[] = ['id', 'email', 'verificationId'] as string[];
      const groups: string[][] = [] as string[][];

      const anySingle =
        Array.isArray(singles) && singles.length > 0
          ? singles.some(presentTop)
          : false;

      let anyComposite = false;
      if (Array.isArray(groups) && groups.length > 0) {
        // Iterate over nested composite selectors (e.g., { composite_key_name: { a: ..., b: ... } })
        for (const [propKey, composite] of Object.entries(
          obj as Record<string, unknown>
        )) {
          if (!composite || typeof composite !== 'object') continue;
          for (const g of groups as string[][]) {
            if (!Array.isArray(g) || g.length === 0) continue;

            /**
             * @param k
             */
            const presentInComposite = (k: string) =>
              (composite as any)[k] != null;
            const provided = (g as string[]).filter(presentInComposite).length;
            if (provided > 0 && provided < g.length) {
              for (const f of g as string[]) {
                if (!presentInComposite(f)) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'All fields of composite unique must be provided',
                    path: [propKey, f],
                  });
                }
              }
            }
            if (provided === g.length && g.length > 0) {
              anyComposite = true;
            }
          }
        }
      }

      if (!anySingle && !anyComposite) {
        ctx.addIssue({
          code: 'custom',
          message: 'Provide at least one unique selector',
        });
      }
    });
export const AccountEmailWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountEmailWhereUniqueInput> =
  __makeSchema_AccountEmailWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.AccountEmailWhereUniqueInput>;
export const AccountEmailWhereUniqueInputObjectZodSchema =
  __makeSchema_AccountEmailWhereUniqueInput_schema();

// File: AccountEmailOrderByWithAggregationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailOrderByWithAggregationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      email: SortOrderSchema.optional(),
      isPrimary: SortOrderSchema.optional(),
      accountId: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      verificationId: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      _count: z
        .lazy(() => AccountEmailCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => AccountEmailMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => AccountEmailMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountEmailOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountEmailOrderByWithAggregationInput> =
  __makeSchema_AccountEmailOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailOrderByWithAggregationInput>;
export const AccountEmailOrderByWithAggregationInputObjectZodSchema =
  __makeSchema_AccountEmailOrderByWithAggregationInput_schema();

// File: AccountEmailScalarWhereWithAggregatesInput.schema.ts

const accountemailscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AccountEmailScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    email: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    isPrimary: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    accountId: z
      .union([
        z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    verificationId: z
      .union([
        z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict();
export const AccountEmailScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountEmailScalarWhereWithAggregatesInput> =
  accountemailscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountEmailScalarWhereWithAggregatesInput>;
export const AccountEmailScalarWhereWithAggregatesInputObjectZodSchema =
  accountemailscalarwherewithaggregatesinputSchema;

// File: AccountEmailVerificationWhereInput.schema.ts

const accountemailverificationwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountEmailVerificationWhereInputObjectSchema),
        z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountEmailVerificationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountEmailVerificationWhereInputObjectSchema),
        z.lazy(() => AccountEmailVerificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    email: z
      .union([
        z.lazy(() => AccountEmailNullableScalarRelationFilterObjectSchema),
        z.lazy(() => AccountEmailWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const AccountEmailVerificationWhereInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationWhereInput> =
  accountemailverificationwhereinputSchema as unknown as z.ZodType<Prisma.AccountEmailVerificationWhereInput>;
export const AccountEmailVerificationWhereInputObjectZodSchema =
  accountemailverificationwhereinputSchema;

// File: AccountEmailVerificationOrderByWithRelationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationOrderByWithRelationInput_schema =
  () =>
    z
      .object({
        id: SortOrderSchema.optional(),
        createdAt: SortOrderSchema.optional(),
        email: z
          .lazy(() => AccountEmailOrderByWithRelationInputObjectSchema)
          .optional(),
      })
      .strict();
export const AccountEmailVerificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationOrderByWithRelationInput> =
  __makeSchema_AccountEmailVerificationOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationOrderByWithRelationInput>;
export const AccountEmailVerificationOrderByWithRelationInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationOrderByWithRelationInput_schema();

// File: AccountEmailVerificationWhereUniqueInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationWhereUniqueInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
    })
    .strict()
    .superRefine((obj, ctx) => {
      /**
       * @param k
       */
      const presentTop = (k: string) => (obj as any)[k] != null;
      const singles: string[] = ['id'] as string[];
      const groups: string[][] = [] as string[][];

      const anySingle =
        Array.isArray(singles) && singles.length > 0
          ? singles.some(presentTop)
          : false;

      let anyComposite = false;
      if (Array.isArray(groups) && groups.length > 0) {
        // Iterate over nested composite selectors (e.g., { composite_key_name: { a: ..., b: ... } })
        for (const [propKey, composite] of Object.entries(
          obj as Record<string, unknown>
        )) {
          if (!composite || typeof composite !== 'object') continue;
          for (const g of groups as string[][]) {
            if (!Array.isArray(g) || g.length === 0) continue;

            /**
             * @param k
             */
            const presentInComposite = (k: string) =>
              (composite as any)[k] != null;
            const provided = (g as string[]).filter(presentInComposite).length;
            if (provided > 0 && provided < g.length) {
              for (const f of g as string[]) {
                if (!presentInComposite(f)) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'All fields of composite unique must be provided',
                    path: [propKey, f],
                  });
                }
              }
            }
            if (provided === g.length && g.length > 0) {
              anyComposite = true;
            }
          }
        }
      }

      if (!anySingle && !anyComposite) {
        ctx.addIssue({
          code: 'custom',
          message: 'Provide at least one unique selector',
        });
      }
    });
export const AccountEmailVerificationWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationWhereUniqueInput> =
  __makeSchema_AccountEmailVerificationWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationWhereUniqueInput>;
export const AccountEmailVerificationWhereUniqueInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationWhereUniqueInput_schema();

// File: AccountEmailVerificationOrderByWithAggregationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationOrderByWithAggregationInput_schema =
  () =>
    z
      .object({
        id: SortOrderSchema.optional(),
        createdAt: SortOrderSchema.optional(),
        _count: z
          .lazy(
            () => AccountEmailVerificationCountOrderByAggregateInputObjectSchema
          )
          .optional(),
        _max: z
          .lazy(
            () => AccountEmailVerificationMaxOrderByAggregateInputObjectSchema
          )
          .optional(),
        _min: z
          .lazy(
            () => AccountEmailVerificationMinOrderByAggregateInputObjectSchema
          )
          .optional(),
      })
      .strict();
export const AccountEmailVerificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationOrderByWithAggregationInput> =
  __makeSchema_AccountEmailVerificationOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationOrderByWithAggregationInput>;
export const AccountEmailVerificationOrderByWithAggregationInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationOrderByWithAggregationInput_schema();

// File: AccountEmailVerificationScalarWhereWithAggregatesInput.schema.ts

const accountemailverificationscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(
          () =>
            AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema
        ),
        z
          .lazy(
            () =>
              AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(
        () => AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema
      )
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(
          () =>
            AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema
        ),
        z
          .lazy(
            () =>
              AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
  })
  .strict();
export const AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationScalarWhereWithAggregatesInput> =
  accountemailverificationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountEmailVerificationScalarWhereWithAggregatesInput>;
export const AccountEmailVerificationScalarWhereWithAggregatesInputObjectZodSchema =
  accountemailverificationscalarwherewithaggregatesinputSchema;

// File: AccountPasswordWhereInput.schema.ts

const accountpasswordwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountPasswordWhereInputObjectSchema),
        z.lazy(() => AccountPasswordWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountPasswordWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountPasswordWhereInputObjectSchema),
        z.lazy(() => AccountPasswordWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    account: z
      .union([
        z.lazy(() => AccountNullableScalarRelationFilterObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const AccountPasswordWhereInputObjectSchema: z.ZodType<Prisma.AccountPasswordWhereInput> =
  accountpasswordwhereinputSchema as unknown as z.ZodType<Prisma.AccountPasswordWhereInput>;
export const AccountPasswordWhereInputObjectZodSchema =
  accountpasswordwhereinputSchema;

// File: AccountPasswordOrderByWithRelationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordOrderByWithRelationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      password: SortOrderSchema.optional(),
      account: z
        .lazy(() => AccountOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountPasswordOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountPasswordOrderByWithRelationInput> =
  __makeSchema_AccountPasswordOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordOrderByWithRelationInput>;
export const AccountPasswordOrderByWithRelationInputObjectZodSchema =
  __makeSchema_AccountPasswordOrderByWithRelationInput_schema();

// File: AccountPasswordWhereUniqueInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordWhereUniqueInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
    })
    .strict()
    .superRefine((obj, ctx) => {
      /**
       * @param k
       */
      const presentTop = (k: string) => (obj as any)[k] != null;
      const singles: string[] = ['id'] as string[];
      const groups: string[][] = [] as string[][];

      const anySingle =
        Array.isArray(singles) && singles.length > 0
          ? singles.some(presentTop)
          : false;

      let anyComposite = false;
      if (Array.isArray(groups) && groups.length > 0) {
        // Iterate over nested composite selectors (e.g., { composite_key_name: { a: ..., b: ... } })
        for (const [propKey, composite] of Object.entries(
          obj as Record<string, unknown>
        )) {
          if (!composite || typeof composite !== 'object') continue;
          for (const g of groups as string[][]) {
            if (!Array.isArray(g) || g.length === 0) continue;

            /**
             * @param k
             */
            const presentInComposite = (k: string) =>
              (composite as any)[k] != null;
            const provided = (g as string[]).filter(presentInComposite).length;
            if (provided > 0 && provided < g.length) {
              for (const f of g as string[]) {
                if (!presentInComposite(f)) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'All fields of composite unique must be provided',
                    path: [propKey, f],
                  });
                }
              }
            }
            if (provided === g.length && g.length > 0) {
              anyComposite = true;
            }
          }
        }
      }

      if (!anySingle && !anyComposite) {
        ctx.addIssue({
          code: 'custom',
          message: 'Provide at least one unique selector',
        });
      }
    });
export const AccountPasswordWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountPasswordWhereUniqueInput> =
  __makeSchema_AccountPasswordWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordWhereUniqueInput>;
export const AccountPasswordWhereUniqueInputObjectZodSchema =
  __makeSchema_AccountPasswordWhereUniqueInput_schema();

// File: AccountPasswordOrderByWithAggregationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordOrderByWithAggregationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      password: SortOrderSchema.optional(),
      _count: z
        .lazy(() => AccountPasswordCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => AccountPasswordMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => AccountPasswordMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountPasswordOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountPasswordOrderByWithAggregationInput> =
  __makeSchema_AccountPasswordOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordOrderByWithAggregationInput>;
export const AccountPasswordOrderByWithAggregationInputObjectZodSchema =
  __makeSchema_AccountPasswordOrderByWithAggregationInput_schema();

// File: AccountPasswordScalarWhereWithAggregatesInput.schema.ts

const accountpasswordscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AccountPasswordScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    password: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const AccountPasswordScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountPasswordScalarWhereWithAggregatesInput> =
  accountpasswordscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AccountPasswordScalarWhereWithAggregatesInput>;
export const AccountPasswordScalarWhereWithAggregatesInputObjectZodSchema =
  accountpasswordscalarwherewithaggregatesinputSchema;

// File: HealthWhereInput.schema.ts

const healthwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => HealthWhereInputObjectSchema),
        z.lazy(() => HealthWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HealthWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HealthWhereInputObjectSchema),
        z.lazy(() => HealthWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumHealthStatusFilterObjectSchema),
        HealthStatusSchema,
      ])
      .optional(),
    lastChecked: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  })
  .strict();
export const HealthWhereInputObjectSchema: z.ZodType<Prisma.HealthWhereInput> =
  healthwhereinputSchema as unknown as z.ZodType<Prisma.HealthWhereInput>;
export const HealthWhereInputObjectZodSchema = healthwhereinputSchema;

// File: HealthOrderByWithRelationInput.schema.ts

/**
 *
 */
const __makeSchema_HealthOrderByWithRelationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      status: SortOrderSchema.optional(),
      lastChecked: SortOrderSchema.optional(),
      metadata: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
    })
    .strict();
export const HealthOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HealthOrderByWithRelationInput> =
  __makeSchema_HealthOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.HealthOrderByWithRelationInput>;
export const HealthOrderByWithRelationInputObjectZodSchema =
  __makeSchema_HealthOrderByWithRelationInput_schema();

// File: HealthWhereUniqueInput.schema.ts

/**
 *
 */
const __makeSchema_HealthWhereUniqueInput_schema = () =>
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict()
    .superRefine((obj, ctx) => {
      /**
       * @param k
       */
      const presentTop = (k: string) => (obj as any)[k] != null;
      const singles: string[] = ['id'] as string[];
      const groups: string[][] = [] as string[][];

      const anySingle =
        Array.isArray(singles) && singles.length > 0
          ? singles.some(presentTop)
          : false;

      let anyComposite = false;
      if (Array.isArray(groups) && groups.length > 0) {
        // Iterate over nested composite selectors (e.g., { composite_key_name: { a: ..., b: ... } })
        for (const [propKey, composite] of Object.entries(
          obj as Record<string, unknown>
        )) {
          if (!composite || typeof composite !== 'object') continue;
          for (const g of groups as string[][]) {
            if (!Array.isArray(g) || g.length === 0) continue;

            /**
             * @param k
             */
            const presentInComposite = (k: string) =>
              (composite as any)[k] != null;
            const provided = (g as string[]).filter(presentInComposite).length;
            if (provided > 0 && provided < g.length) {
              for (const f of g as string[]) {
                if (!presentInComposite(f)) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'All fields of composite unique must be provided',
                    path: [propKey, f],
                  });
                }
              }
            }
            if (provided === g.length && g.length > 0) {
              anyComposite = true;
            }
          }
        }
      }

      if (!anySingle && !anyComposite) {
        ctx.addIssue({
          code: 'custom',
          message: 'Provide at least one unique selector',
        });
      }
    });
export const HealthWhereUniqueInputObjectSchema: z.ZodType<Prisma.HealthWhereUniqueInput> =
  __makeSchema_HealthWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.HealthWhereUniqueInput>;
export const HealthWhereUniqueInputObjectZodSchema =
  __makeSchema_HealthWhereUniqueInput_schema();

// File: HealthOrderByWithAggregationInput.schema.ts

/**
 *
 */
const __makeSchema_HealthOrderByWithAggregationInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      status: SortOrderSchema.optional(),
      lastChecked: SortOrderSchema.optional(),
      metadata: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      _count: z
        .lazy(() => HealthCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z.lazy(() => HealthAvgOrderByAggregateInputObjectSchema).optional(),
      _max: z.lazy(() => HealthMaxOrderByAggregateInputObjectSchema).optional(),
      _min: z.lazy(() => HealthMinOrderByAggregateInputObjectSchema).optional(),
      _sum: z.lazy(() => HealthSumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict();
export const HealthOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HealthOrderByWithAggregationInput> =
  __makeSchema_HealthOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.HealthOrderByWithAggregationInput>;
export const HealthOrderByWithAggregationInputObjectZodSchema =
  __makeSchema_HealthOrderByWithAggregationInput_schema();

// File: HealthScalarWhereWithAggregatesInput.schema.ts

const healthscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => HealthScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([
        z.lazy(() => IntWithAggregatesFilterObjectSchema),
        z.number().int(),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumHealthStatusWithAggregatesFilterObjectSchema),
        HealthStatusSchema,
      ])
      .optional(),
    lastChecked: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    metadata: z
      .lazy(() => JsonNullableWithAggregatesFilterObjectSchema)
      .optional(),
  })
  .strict();
export const HealthScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.HealthScalarWhereWithAggregatesInput> =
  healthscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.HealthScalarWhereWithAggregatesInput>;
export const HealthScalarWhereWithAggregatesInputObjectZodSchema =
  healthscalarwherewithaggregatesinputSchema;

// File: AccountCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      deletedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v)),
      isActive: z.boolean().optional(),
      emails: z.lazy(
        () => AccountEmailCreateNestedManyWithoutAccountInputObjectSchema
      ),
      password: z.lazy(
        () => AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema
      ),
    })
    .strict();
export const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput> =
  __makeSchema_AccountCreateInput_schema() as unknown as z.ZodType<Prisma.AccountCreateInput>;
export const AccountCreateInputObjectZodSchema =
  __makeSchema_AccountCreateInput_schema();

// File: AccountUncheckedCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      deletedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v)),
      isActive: z.boolean().optional(),
      passwordId: z.string(),
      emails: z.lazy(
        () =>
          AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectSchema
      ),
    })
    .strict();
export const AccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> =
  __makeSchema_AccountUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateInput>;
export const AccountUncheckedCreateInputObjectZodSchema =
  __makeSchema_AccountUncheckedCreateInput_schema();

// File: AccountUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      emails: z
        .lazy(() => AccountEmailUpdateManyWithoutAccountNestedInputObjectSchema)
        .optional(),
      password: z
        .lazy(
          () =>
            AccountPasswordUpdateOneRequiredWithoutAccountNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountUpdateInputObjectSchema: z.ZodType<Prisma.AccountUpdateInput> =
  __makeSchema_AccountUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateInput>;
export const AccountUpdateInputObjectZodSchema =
  __makeSchema_AccountUpdateInput_schema();

// File: AccountUncheckedUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      passwordId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      emails: z
        .lazy(
          () =>
            AccountEmailUncheckedUpdateManyWithoutAccountNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> =
  __makeSchema_AccountUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateInput>;
export const AccountUncheckedUpdateInputObjectZodSchema =
  __makeSchema_AccountUncheckedUpdateInput_schema();

// File: AccountCreateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateManyInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      deletedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v)),
      isActive: z.boolean().optional(),
      passwordId: z.string(),
    })
    .strict();
export const AccountCreateManyInputObjectSchema: z.ZodType<Prisma.AccountCreateManyInput> =
  __makeSchema_AccountCreateManyInput_schema() as unknown as z.ZodType<Prisma.AccountCreateManyInput>;
export const AccountCreateManyInputObjectZodSchema =
  __makeSchema_AccountCreateManyInput_schema();

// File: AccountUpdateManyMutationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateManyMutationInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> =
  __makeSchema_AccountUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateManyMutationInput>;
export const AccountUpdateManyMutationInputObjectZodSchema =
  __makeSchema_AccountUpdateManyMutationInput_schema();

// File: AccountUncheckedUpdateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedUpdateManyInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      passwordId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> =
  __makeSchema_AccountUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateManyInput>;
export const AccountUncheckedUpdateManyInputObjectZodSchema =
  __makeSchema_AccountUncheckedUpdateManyInput_schema();

// File: AccountEmailCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z.string(),
      isPrimary: z.boolean().optional(),
      account: z
        .lazy(() => AccountCreateNestedOneWithoutEmailsInputObjectSchema)
        .optional(),
      verification: z
        .lazy(
          () =>
            AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateInput> =
  __makeSchema_AccountEmailCreateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateInput>;
export const AccountEmailCreateInputObjectZodSchema =
  __makeSchema_AccountEmailCreateInput_schema();

// File: AccountEmailUncheckedCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z.string(),
      isPrimary: z.boolean().optional(),
      accountId: z.string().optional().nullable(),
      verificationId: z.string().optional().nullable(),
    })
    .strict();
export const AccountEmailUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateInput> =
  __makeSchema_AccountEmailUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateInput>;
export const AccountEmailUncheckedCreateInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedCreateInput_schema();

// File: AccountEmailUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPrimary: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      account: z
        .lazy(() => AccountUpdateOneWithoutEmailsNestedInputObjectSchema)
        .optional(),
      verification: z
        .lazy(
          () =>
            AccountEmailVerificationUpdateOneWithoutEmailNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailUpdateInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateInput> =
  __makeSchema_AccountEmailUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateInput>;
export const AccountEmailUpdateInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateInput_schema();

// File: AccountEmailUncheckedUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPrimary: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      verificationId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();
export const AccountEmailUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateInput> =
  __makeSchema_AccountEmailUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateInput>;
export const AccountEmailUncheckedUpdateInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedUpdateInput_schema();

// File: AccountEmailCreateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateManyInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z.string(),
      isPrimary: z.boolean().optional(),
      accountId: z.string().optional().nullable(),
      verificationId: z.string().optional().nullable(),
    })
    .strict();
export const AccountEmailCreateManyInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateManyInput> =
  __makeSchema_AccountEmailCreateManyInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateManyInput>;
export const AccountEmailCreateManyInputObjectZodSchema =
  __makeSchema_AccountEmailCreateManyInput_schema();

// File: AccountEmailUpdateManyMutationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateManyMutationInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPrimary: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountEmailUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateManyMutationInput> =
  __makeSchema_AccountEmailUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateManyMutationInput>;
export const AccountEmailUpdateManyMutationInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateManyMutationInput_schema();

// File: AccountEmailUncheckedUpdateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedUpdateManyInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPrimary: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      verificationId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();
export const AccountEmailUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateManyInput> =
  __makeSchema_AccountEmailUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateManyInput>;
export const AccountEmailUncheckedUpdateManyInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedUpdateManyInput_schema();

// File: AccountEmailVerificationCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z
        .lazy(
          () => AccountEmailCreateNestedOneWithoutVerificationInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailVerificationCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateInput> =
  __makeSchema_AccountEmailVerificationCreateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateInput>;
export const AccountEmailVerificationCreateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationCreateInput_schema();

// File: AccountEmailVerificationUncheckedCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUncheckedCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z
        .lazy(
          () =>
            AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailVerificationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateInput> =
  __makeSchema_AccountEmailVerificationUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateInput>;
export const AccountEmailVerificationUncheckedCreateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUncheckedCreateInput_schema();

// File: AccountEmailVerificationUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .lazy(
          () => AccountEmailUpdateOneWithoutVerificationNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailVerificationUpdateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateInput> =
  __makeSchema_AccountEmailVerificationUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateInput>;
export const AccountEmailVerificationUpdateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUpdateInput_schema();

// File: AccountEmailVerificationUncheckedUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUncheckedUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .lazy(
          () =>
            AccountEmailUncheckedUpdateOneWithoutVerificationNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailVerificationUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUncheckedUpdateInput> =
  __makeSchema_AccountEmailVerificationUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUncheckedUpdateInput>;
export const AccountEmailVerificationUncheckedUpdateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUncheckedUpdateInput_schema();

// File: AccountEmailVerificationCreateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationCreateManyInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
    })
    .strict();
export const AccountEmailVerificationCreateManyInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateManyInput> =
  __makeSchema_AccountEmailVerificationCreateManyInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateManyInput>;
export const AccountEmailVerificationCreateManyInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationCreateManyInput_schema();

// File: AccountEmailVerificationUpdateManyMutationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUpdateManyMutationInput_schema =
  () =>
    z
      .object({
        id: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        createdAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailVerificationUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateManyMutationInput> =
  __makeSchema_AccountEmailVerificationUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateManyMutationInput>;
export const AccountEmailVerificationUpdateManyMutationInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUpdateManyMutationInput_schema();

// File: AccountEmailVerificationUncheckedUpdateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUncheckedUpdateManyInput_schema =
  () =>
    z
      .object({
        id: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        createdAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailVerificationUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUncheckedUpdateManyInput> =
  __makeSchema_AccountEmailVerificationUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUncheckedUpdateManyInput>;
export const AccountEmailVerificationUncheckedUpdateManyInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUncheckedUpdateManyInput_schema();

// File: AccountPasswordCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      password: z.string(),
      account: z
        .lazy(() => AccountCreateNestedOneWithoutPasswordInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountPasswordCreateInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateInput> =
  __makeSchema_AccountPasswordCreateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordCreateInput>;
export const AccountPasswordCreateInputObjectZodSchema =
  __makeSchema_AccountPasswordCreateInput_schema();

// File: AccountPasswordUncheckedCreateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUncheckedCreateInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      password: z.string(),
      account: z
        .lazy(
          () => AccountUncheckedCreateNestedOneWithoutPasswordInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountPasswordUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedCreateInput> =
  __makeSchema_AccountPasswordUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedCreateInput>;
export const AccountPasswordUncheckedCreateInputObjectZodSchema =
  __makeSchema_AccountPasswordUncheckedCreateInput_schema();

// File: AccountPasswordUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      account: z
        .lazy(() => AccountUpdateOneWithoutPasswordNestedInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountPasswordUpdateInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpdateInput> =
  __makeSchema_AccountPasswordUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUpdateInput>;
export const AccountPasswordUpdateInputObjectZodSchema =
  __makeSchema_AccountPasswordUpdateInput_schema();

// File: AccountPasswordUncheckedUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUncheckedUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () => AccountUncheckedUpdateOneWithoutPasswordNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountPasswordUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedUpdateInput> =
  __makeSchema_AccountPasswordUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedUpdateInput>;
export const AccountPasswordUncheckedUpdateInputObjectZodSchema =
  __makeSchema_AccountPasswordUncheckedUpdateInput_schema();

// File: AccountPasswordCreateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordCreateManyInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      password: z.string(),
    })
    .strict();
export const AccountPasswordCreateManyInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateManyInput> =
  __makeSchema_AccountPasswordCreateManyInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordCreateManyInput>;
export const AccountPasswordCreateManyInputObjectZodSchema =
  __makeSchema_AccountPasswordCreateManyInput_schema();

// File: AccountPasswordUpdateManyMutationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUpdateManyMutationInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountPasswordUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpdateManyMutationInput> =
  __makeSchema_AccountPasswordUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUpdateManyMutationInput>;
export const AccountPasswordUpdateManyMutationInputObjectZodSchema =
  __makeSchema_AccountPasswordUpdateManyMutationInput_schema();

// File: AccountPasswordUncheckedUpdateManyInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUncheckedUpdateManyInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountPasswordUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedUpdateManyInput> =
  __makeSchema_AccountPasswordUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedUpdateManyInput>;
export const AccountPasswordUncheckedUpdateManyInputObjectZodSchema =
  __makeSchema_AccountPasswordUncheckedUpdateManyInput_schema();

// File: HealthCreateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthCreateInput_schema = () =>
  z
    .object({
      id: z.number().int().optional(),
      status: HealthStatusSchema.optional(),
      metadata: z
        .union([NullableJsonNullValueInputSchema, jsonSchema])
        .optional(),
    })
    .strict();
export const HealthCreateInputObjectSchema: z.ZodType<Prisma.HealthCreateInput> =
  __makeSchema_HealthCreateInput_schema() as unknown as z.ZodType<Prisma.HealthCreateInput>;
export const HealthCreateInputObjectZodSchema =
  __makeSchema_HealthCreateInput_schema();

// File: HealthUncheckedCreateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthUncheckedCreateInput_schema = () =>
  z
    .object({
      id: z.number().int().optional(),
      status: HealthStatusSchema.optional(),
      metadata: z
        .union([NullableJsonNullValueInputSchema, jsonSchema])
        .optional(),
    })
    .strict();
export const HealthUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HealthUncheckedCreateInput> =
  __makeSchema_HealthUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.HealthUncheckedCreateInput>;
export const HealthUncheckedCreateInputObjectZodSchema =
  __makeSchema_HealthUncheckedCreateInput_schema();

// File: HealthUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      status: z
        .union([
          HealthStatusSchema,
          z.lazy(() => EnumHealthStatusFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      lastChecked: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      metadata: z
        .union([NullableJsonNullValueInputSchema, jsonSchema])
        .optional(),
    })
    .strict();
export const HealthUpdateInputObjectSchema: z.ZodType<Prisma.HealthUpdateInput> =
  __makeSchema_HealthUpdateInput_schema() as unknown as z.ZodType<Prisma.HealthUpdateInput>;
export const HealthUpdateInputObjectZodSchema =
  __makeSchema_HealthUpdateInput_schema();

// File: HealthUncheckedUpdateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthUncheckedUpdateInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      status: z
        .union([
          HealthStatusSchema,
          z.lazy(() => EnumHealthStatusFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      lastChecked: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      metadata: z
        .union([NullableJsonNullValueInputSchema, jsonSchema])
        .optional(),
    })
    .strict();
export const HealthUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.HealthUncheckedUpdateInput> =
  __makeSchema_HealthUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.HealthUncheckedUpdateInput>;
export const HealthUncheckedUpdateInputObjectZodSchema =
  __makeSchema_HealthUncheckedUpdateInput_schema();

// File: HealthCreateManyInput.schema.ts

/**
 *
 */
const __makeSchema_HealthCreateManyInput_schema = () =>
  z
    .object({
      id: z.number().int().optional(),
      status: HealthStatusSchema.optional(),
      lastChecked: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      metadata: z
        .union([NullableJsonNullValueInputSchema, jsonSchema])
        .optional(),
    })
    .strict();
export const HealthCreateManyInputObjectSchema: z.ZodType<Prisma.HealthCreateManyInput> =
  __makeSchema_HealthCreateManyInput_schema() as unknown as z.ZodType<Prisma.HealthCreateManyInput>;
export const HealthCreateManyInputObjectZodSchema =
  __makeSchema_HealthCreateManyInput_schema();

// File: HealthUpdateManyMutationInput.schema.ts

/**
 *
 */
const __makeSchema_HealthUpdateManyMutationInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      status: z
        .union([
          HealthStatusSchema,
          z.lazy(() => EnumHealthStatusFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      lastChecked: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      metadata: z
        .union([NullableJsonNullValueInputSchema, jsonSchema])
        .optional(),
    })
    .strict();
export const HealthUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.HealthUpdateManyMutationInput> =
  __makeSchema_HealthUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.HealthUpdateManyMutationInput>;
export const HealthUpdateManyMutationInputObjectZodSchema =
  __makeSchema_HealthUpdateManyMutationInput_schema();

// File: HealthUncheckedUpdateManyInput.schema.ts

/**
 *
 */
const __makeSchema_HealthUncheckedUpdateManyInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      status: z
        .union([
          HealthStatusSchema,
          z.lazy(() => EnumHealthStatusFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      lastChecked: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      metadata: z
        .union([NullableJsonNullValueInputSchema, jsonSchema])
        .optional(),
    })
    .strict();
export const HealthUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.HealthUncheckedUpdateManyInput> =
  __makeSchema_HealthUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.HealthUncheckedUpdateManyInput>;
export const HealthUncheckedUpdateManyInputObjectZodSchema =
  __makeSchema_HealthUncheckedUpdateManyInput_schema();

// File: UuidFilter.schema.ts

/**
 *
 */
const __makeSchema_UuidFilter_schema = () =>
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      mode: QueryModeSchema.optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedUuidFilterObjectSchema)])
        .optional(),
    })
    .strict();
export const UuidFilterObjectSchema: z.ZodType<Prisma.UuidFilter> =
  __makeSchema_UuidFilter_schema() as unknown as z.ZodType<Prisma.UuidFilter>;
export const UuidFilterObjectZodSchema = __makeSchema_UuidFilter_schema();

// File: DateTimeFilter.schema.ts

/**
 *
 */
const __makeSchema_DateTimeFilter_schema = () =>
  z
    .object({
      equals: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
      notIn: z
        .union([z.date().array(), z.string().datetime().array()])
        .optional(),
      lt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      lte: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      gt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      gte: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      not: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => NestedDateTimeFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const DateTimeFilterObjectSchema: z.ZodType<Prisma.DateTimeFilter> =
  __makeSchema_DateTimeFilter_schema() as unknown as z.ZodType<Prisma.DateTimeFilter>;
export const DateTimeFilterObjectZodSchema =
  __makeSchema_DateTimeFilter_schema();

// File: BoolFilter.schema.ts

/**
 *
 */
const __makeSchema_BoolFilter_schema = () =>
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
        .optional(),
    })
    .strict();
export const BoolFilterObjectSchema: z.ZodType<Prisma.BoolFilter> =
  __makeSchema_BoolFilter_schema() as unknown as z.ZodType<Prisma.BoolFilter>;
export const BoolFilterObjectZodSchema = __makeSchema_BoolFilter_schema();

// File: AccountEmailListRelationFilter.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailListRelationFilter_schema = () =>
  z
    .object({
      every: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
      some: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
      none: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
    })
    .strict();
export const AccountEmailListRelationFilterObjectSchema: z.ZodType<Prisma.AccountEmailListRelationFilter> =
  __makeSchema_AccountEmailListRelationFilter_schema() as unknown as z.ZodType<Prisma.AccountEmailListRelationFilter>;
export const AccountEmailListRelationFilterObjectZodSchema =
  __makeSchema_AccountEmailListRelationFilter_schema();

// File: AccountPasswordScalarRelationFilter.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordScalarRelationFilter_schema = () =>
  z
    .object({
      is: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional(),
      isNot: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional(),
    })
    .strict();
export const AccountPasswordScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountPasswordScalarRelationFilter> =
  __makeSchema_AccountPasswordScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.AccountPasswordScalarRelationFilter>;
export const AccountPasswordScalarRelationFilterObjectZodSchema =
  __makeSchema_AccountPasswordScalarRelationFilter_schema();

// File: AccountEmailOrderByRelationAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailOrderByRelationAggregateInput_schema = () =>
  z
    .object({
      _count: SortOrderSchema.optional(),
    })
    .strict();
export const AccountEmailOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailOrderByRelationAggregateInput> =
  __makeSchema_AccountEmailOrderByRelationAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailOrderByRelationAggregateInput>;
export const AccountEmailOrderByRelationAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailOrderByRelationAggregateInput_schema();

// File: AccountCountOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCountOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      deletedAt: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      passwordId: SortOrderSchema.optional(),
    })
    .strict();
export const AccountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> =
  __makeSchema_AccountCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountCountOrderByAggregateInput>;
export const AccountCountOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountCountOrderByAggregateInput_schema();

// File: AccountMaxOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountMaxOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      deletedAt: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      passwordId: SortOrderSchema.optional(),
    })
    .strict();
export const AccountMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> =
  __makeSchema_AccountMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMaxOrderByAggregateInput>;
export const AccountMaxOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountMaxOrderByAggregateInput_schema();

// File: AccountMinOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountMinOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      deletedAt: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      passwordId: SortOrderSchema.optional(),
    })
    .strict();
export const AccountMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> =
  __makeSchema_AccountMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMinOrderByAggregateInput>;
export const AccountMinOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountMinOrderByAggregateInput_schema();

// File: UuidWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_UuidWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      mode: QueryModeSchema.optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedUuidWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    })
    .strict();
export const UuidWithAggregatesFilterObjectSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> =
  __makeSchema_UuidWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.UuidWithAggregatesFilter>;
export const UuidWithAggregatesFilterObjectZodSchema =
  __makeSchema_UuidWithAggregatesFilter_schema();

// File: DateTimeWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_DateTimeWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
      notIn: z
        .union([z.date().array(), z.string().datetime().array()])
        .optional(),
      lt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      lte: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      gt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      gte: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      not: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
    })
    .strict();
export const DateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  __makeSchema_DateTimeWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.DateTimeWithAggregatesFilter>;
export const DateTimeWithAggregatesFilterObjectZodSchema =
  __makeSchema_DateTimeWithAggregatesFilter_schema();

// File: BoolWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_BoolWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
    })
    .strict();
export const BoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  __makeSchema_BoolWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.BoolWithAggregatesFilter>;
export const BoolWithAggregatesFilterObjectZodSchema =
  __makeSchema_BoolWithAggregatesFilter_schema();

// File: StringFilter.schema.ts

/**
 *
 */
const __makeSchema_StringFilter_schema = () =>
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: QueryModeSchema.optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)])
        .optional(),
    })
    .strict();
export const StringFilterObjectSchema: z.ZodType<Prisma.StringFilter> =
  __makeSchema_StringFilter_schema() as unknown as z.ZodType<Prisma.StringFilter>;
export const StringFilterObjectZodSchema = __makeSchema_StringFilter_schema();

// File: UuidNullableFilter.schema.ts

/**
 *
 */
const __makeSchema_UuidNullableFilter_schema = () =>
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      mode: QueryModeSchema.optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedUuidNullableFilterObjectSchema)])
        .optional()
        .nullable(),
    })
    .strict();
export const UuidNullableFilterObjectSchema: z.ZodType<Prisma.UuidNullableFilter> =
  __makeSchema_UuidNullableFilter_schema() as unknown as z.ZodType<Prisma.UuidNullableFilter>;
export const UuidNullableFilterObjectZodSchema =
  __makeSchema_UuidNullableFilter_schema();

// File: AccountNullableScalarRelationFilter.schema.ts

/**
 *
 */
const __makeSchema_AccountNullableScalarRelationFilter_schema = () =>
  z
    .object({
      is: z
        .lazy(() => AccountWhereInputObjectSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => AccountWhereInputObjectSchema)
        .optional()
        .nullable(),
    })
    .strict();
export const AccountNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountNullableScalarRelationFilter> =
  __makeSchema_AccountNullableScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.AccountNullableScalarRelationFilter>;
export const AccountNullableScalarRelationFilterObjectZodSchema =
  __makeSchema_AccountNullableScalarRelationFilter_schema();

// File: AccountEmailVerificationNullableScalarRelationFilter.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationNullableScalarRelationFilter_schema =
  () =>
    z
      .object({
        is: z
          .lazy(() => AccountEmailVerificationWhereInputObjectSchema)
          .optional()
          .nullable(),
        isNot: z
          .lazy(() => AccountEmailVerificationWhereInputObjectSchema)
          .optional()
          .nullable(),
      })
      .strict();
export const AccountEmailVerificationNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountEmailVerificationNullableScalarRelationFilter> =
  __makeSchema_AccountEmailVerificationNullableScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationNullableScalarRelationFilter>;
export const AccountEmailVerificationNullableScalarRelationFilterObjectZodSchema =
  __makeSchema_AccountEmailVerificationNullableScalarRelationFilter_schema();

// File: SortOrderInput.schema.ts

/**
 *
 */
const __makeSchema_SortOrderInput_schema = () =>
  z
    .object({
      sort: SortOrderSchema,
      nulls: NullsOrderSchema.optional(),
    })
    .strict();
export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput> =
  __makeSchema_SortOrderInput_schema() as unknown as z.ZodType<Prisma.SortOrderInput>;
export const SortOrderInputObjectZodSchema =
  __makeSchema_SortOrderInput_schema();

// File: AccountEmailCountOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCountOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      email: SortOrderSchema.optional(),
      isPrimary: SortOrderSchema.optional(),
      accountId: SortOrderSchema.optional(),
      verificationId: SortOrderSchema.optional(),
    })
    .strict();
export const AccountEmailCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailCountOrderByAggregateInput> =
  __makeSchema_AccountEmailCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCountOrderByAggregateInput>;
export const AccountEmailCountOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailCountOrderByAggregateInput_schema();

// File: AccountEmailMaxOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailMaxOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      email: SortOrderSchema.optional(),
      isPrimary: SortOrderSchema.optional(),
      accountId: SortOrderSchema.optional(),
      verificationId: SortOrderSchema.optional(),
    })
    .strict();
export const AccountEmailMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailMaxOrderByAggregateInput> =
  __makeSchema_AccountEmailMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailMaxOrderByAggregateInput>;
export const AccountEmailMaxOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailMaxOrderByAggregateInput_schema();

// File: AccountEmailMinOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailMinOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      email: SortOrderSchema.optional(),
      isPrimary: SortOrderSchema.optional(),
      accountId: SortOrderSchema.optional(),
      verificationId: SortOrderSchema.optional(),
    })
    .strict();
export const AccountEmailMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailMinOrderByAggregateInput> =
  __makeSchema_AccountEmailMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailMinOrderByAggregateInput>;
export const AccountEmailMinOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailMinOrderByAggregateInput_schema();

// File: StringWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_StringWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: QueryModeSchema.optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    })
    .strict();
export const StringWithAggregatesFilterObjectSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  __makeSchema_StringWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.StringWithAggregatesFilter>;
export const StringWithAggregatesFilterObjectZodSchema =
  __makeSchema_StringWithAggregatesFilter_schema();

// File: UuidNullableWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_UuidNullableWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      mode: QueryModeSchema.optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedUuidNullableWithAggregatesFilterObjectSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
    })
    .strict();
export const UuidNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> =
  __makeSchema_UuidNullableWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.UuidNullableWithAggregatesFilter>;
export const UuidNullableWithAggregatesFilterObjectZodSchema =
  __makeSchema_UuidNullableWithAggregatesFilter_schema();

// File: AccountEmailNullableScalarRelationFilter.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailNullableScalarRelationFilter_schema = () =>
  z
    .object({
      is: z
        .lazy(() => AccountEmailWhereInputObjectSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => AccountEmailWhereInputObjectSchema)
        .optional()
        .nullable(),
    })
    .strict();
export const AccountEmailNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountEmailNullableScalarRelationFilter> =
  __makeSchema_AccountEmailNullableScalarRelationFilter_schema() as unknown as z.ZodType<Prisma.AccountEmailNullableScalarRelationFilter>;
export const AccountEmailNullableScalarRelationFilterObjectZodSchema =
  __makeSchema_AccountEmailNullableScalarRelationFilter_schema();

// File: AccountEmailVerificationCountOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationCountOrderByAggregateInput_schema =
  () =>
    z
      .object({
        id: SortOrderSchema.optional(),
        createdAt: SortOrderSchema.optional(),
      })
      .strict();
export const AccountEmailVerificationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCountOrderByAggregateInput> =
  __makeSchema_AccountEmailVerificationCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCountOrderByAggregateInput>;
export const AccountEmailVerificationCountOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationCountOrderByAggregateInput_schema();

// File: AccountEmailVerificationMaxOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationMaxOrderByAggregateInput_schema =
  () =>
    z
      .object({
        id: SortOrderSchema.optional(),
        createdAt: SortOrderSchema.optional(),
      })
      .strict();
export const AccountEmailVerificationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMaxOrderByAggregateInput> =
  __makeSchema_AccountEmailVerificationMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMaxOrderByAggregateInput>;
export const AccountEmailVerificationMaxOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationMaxOrderByAggregateInput_schema();

// File: AccountEmailVerificationMinOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationMinOrderByAggregateInput_schema =
  () =>
    z
      .object({
        id: SortOrderSchema.optional(),
        createdAt: SortOrderSchema.optional(),
      })
      .strict();
export const AccountEmailVerificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMinOrderByAggregateInput> =
  __makeSchema_AccountEmailVerificationMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMinOrderByAggregateInput>;
export const AccountEmailVerificationMinOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationMinOrderByAggregateInput_schema();

// File: AccountPasswordCountOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordCountOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      password: SortOrderSchema.optional(),
    })
    .strict();
export const AccountPasswordCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordCountOrderByAggregateInput> =
  __makeSchema_AccountPasswordCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordCountOrderByAggregateInput>;
export const AccountPasswordCountOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountPasswordCountOrderByAggregateInput_schema();

// File: AccountPasswordMaxOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordMaxOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      password: SortOrderSchema.optional(),
    })
    .strict();
export const AccountPasswordMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMaxOrderByAggregateInput> =
  __makeSchema_AccountPasswordMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordMaxOrderByAggregateInput>;
export const AccountPasswordMaxOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountPasswordMaxOrderByAggregateInput_schema();

// File: AccountPasswordMinOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordMinOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      password: SortOrderSchema.optional(),
    })
    .strict();
export const AccountPasswordMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMinOrderByAggregateInput> =
  __makeSchema_AccountPasswordMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordMinOrderByAggregateInput>;
export const AccountPasswordMinOrderByAggregateInputObjectZodSchema =
  __makeSchema_AccountPasswordMinOrderByAggregateInput_schema();

// File: IntFilter.schema.ts

/**
 *
 */
const __makeSchema_IntFilter_schema = () =>
  z
    .object({
      equals: z.number().int().optional(),
      in: z.number().int().array().optional(),
      notIn: z.number().int().array().optional(),
      lt: z.number().int().optional(),
      lte: z.number().int().optional(),
      gt: z.number().int().optional(),
      gte: z.number().int().optional(),
      not: z
        .union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)])
        .optional(),
    })
    .strict();
export const IntFilterObjectSchema: z.ZodType<Prisma.IntFilter> =
  __makeSchema_IntFilter_schema() as unknown as z.ZodType<Prisma.IntFilter>;
export const IntFilterObjectZodSchema = __makeSchema_IntFilter_schema();

// File: EnumHealthStatusFilter.schema.ts

/**
 *
 */
const __makeSchema_EnumHealthStatusFilter_schema = () =>
  z
    .object({
      equals: HealthStatusSchema.optional(),
      in: HealthStatusSchema.array().optional(),
      notIn: HealthStatusSchema.array().optional(),
      not: z
        .union([
          HealthStatusSchema,
          z.lazy(() => NestedEnumHealthStatusFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumHealthStatusFilterObjectSchema: z.ZodType<Prisma.EnumHealthStatusFilter> =
  __makeSchema_EnumHealthStatusFilter_schema() as unknown as z.ZodType<Prisma.EnumHealthStatusFilter>;
export const EnumHealthStatusFilterObjectZodSchema =
  __makeSchema_EnumHealthStatusFilter_schema();

// File: JsonNullableFilter.schema.ts

/**
 *
 */
const __makeSchema_JsonNullableFilter_schema = () =>
  z
    .object({
      equals: jsonSchema.optional(),
      path: z.string().array().optional(),
      mode: QueryModeSchema.optional(),
      string_contains: z.string().optional(),
      string_starts_with: z.string().optional(),
      string_ends_with: z.string().optional(),
      array_starts_with: jsonSchema.optional().nullable(),
      array_ends_with: jsonSchema.optional().nullable(),
      array_contains: jsonSchema.optional().nullable(),
      lt: jsonSchema.optional(),
      lte: jsonSchema.optional(),
      gt: jsonSchema.optional(),
      gte: jsonSchema.optional(),
      not: jsonSchema.optional(),
    })
    .strict();
export const JsonNullableFilterObjectSchema: z.ZodType<Prisma.JsonNullableFilter> =
  __makeSchema_JsonNullableFilter_schema() as unknown as z.ZodType<Prisma.JsonNullableFilter>;
export const JsonNullableFilterObjectZodSchema =
  __makeSchema_JsonNullableFilter_schema();

// File: HealthCountOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthCountOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      status: SortOrderSchema.optional(),
      lastChecked: SortOrderSchema.optional(),
      metadata: SortOrderSchema.optional(),
    })
    .strict();
export const HealthCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthCountOrderByAggregateInput> =
  __makeSchema_HealthCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthCountOrderByAggregateInput>;
export const HealthCountOrderByAggregateInputObjectZodSchema =
  __makeSchema_HealthCountOrderByAggregateInput_schema();

// File: HealthAvgOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthAvgOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
    })
    .strict();
export const HealthAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthAvgOrderByAggregateInput> =
  __makeSchema_HealthAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthAvgOrderByAggregateInput>;
export const HealthAvgOrderByAggregateInputObjectZodSchema =
  __makeSchema_HealthAvgOrderByAggregateInput_schema();

// File: HealthMaxOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthMaxOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      status: SortOrderSchema.optional(),
      lastChecked: SortOrderSchema.optional(),
    })
    .strict();
export const HealthMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthMaxOrderByAggregateInput> =
  __makeSchema_HealthMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthMaxOrderByAggregateInput>;
export const HealthMaxOrderByAggregateInputObjectZodSchema =
  __makeSchema_HealthMaxOrderByAggregateInput_schema();

// File: HealthMinOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthMinOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      status: SortOrderSchema.optional(),
      lastChecked: SortOrderSchema.optional(),
    })
    .strict();
export const HealthMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthMinOrderByAggregateInput> =
  __makeSchema_HealthMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthMinOrderByAggregateInput>;
export const HealthMinOrderByAggregateInputObjectZodSchema =
  __makeSchema_HealthMinOrderByAggregateInput_schema();

// File: HealthSumOrderByAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthSumOrderByAggregateInput_schema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
    })
    .strict();
export const HealthSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HealthSumOrderByAggregateInput> =
  __makeSchema_HealthSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthSumOrderByAggregateInput>;
export const HealthSumOrderByAggregateInputObjectZodSchema =
  __makeSchema_HealthSumOrderByAggregateInput_schema();

// File: IntWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_IntWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: z.number().int().optional(),
      in: z.number().int().array().optional(),
      notIn: z.number().int().array().optional(),
      lt: z.number().int().optional(),
      lte: z.number().int().optional(),
      gt: z.number().int().optional(),
      gte: z.number().int().optional(),
      not: z
        .union([
          z.number().int(),
          z.lazy(() => NestedIntWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    })
    .strict();
export const IntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  __makeSchema_IntWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.IntWithAggregatesFilter>;
export const IntWithAggregatesFilterObjectZodSchema =
  __makeSchema_IntWithAggregatesFilter_schema();

// File: EnumHealthStatusWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_EnumHealthStatusWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: HealthStatusSchema.optional(),
      in: HealthStatusSchema.array().optional(),
      notIn: HealthStatusSchema.array().optional(),
      not: z
        .union([
          HealthStatusSchema,
          z.lazy(() => NestedEnumHealthStatusWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedEnumHealthStatusFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedEnumHealthStatusFilterObjectSchema).optional(),
    })
    .strict();
export const EnumHealthStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumHealthStatusWithAggregatesFilter> =
  __makeSchema_EnumHealthStatusWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.EnumHealthStatusWithAggregatesFilter>;
export const EnumHealthStatusWithAggregatesFilterObjectZodSchema =
  __makeSchema_EnumHealthStatusWithAggregatesFilter_schema();

// File: JsonNullableWithAggregatesFilter.schema.ts

/**
 *
 */
const __makeSchema_JsonNullableWithAggregatesFilter_schema = () =>
  z
    .object({
      equals: jsonSchema.optional(),
      path: z.string().array().optional(),
      mode: QueryModeSchema.optional(),
      string_contains: z.string().optional(),
      string_starts_with: z.string().optional(),
      string_ends_with: z.string().optional(),
      array_starts_with: jsonSchema.optional().nullable(),
      array_ends_with: jsonSchema.optional().nullable(),
      array_contains: jsonSchema.optional().nullable(),
      lt: jsonSchema.optional(),
      lte: jsonSchema.optional(),
      gt: jsonSchema.optional(),
      gte: jsonSchema.optional(),
      not: jsonSchema.optional(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedJsonNullableFilterObjectSchema).optional(),
    })
    .strict();
export const JsonNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.JsonNullableWithAggregatesFilter> =
  __makeSchema_JsonNullableWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.JsonNullableWithAggregatesFilter>;
export const JsonNullableWithAggregatesFilterObjectZodSchema =
  __makeSchema_JsonNullableWithAggregatesFilter_schema();

// File: AccountEmailCreateNestedManyWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateNestedManyWithoutAccountInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema),
            z
              .lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema)
              .array(),
            z.lazy(
              () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        connectOrCreate: z
          .union([
            z.lazy(
              () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        createMany: z
          .lazy(() => AccountEmailCreateManyAccountInputEnvelopeObjectSchema)
          .optional(),
        connect: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailCreateNestedManyWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateNestedManyWithoutAccountInput> =
  __makeSchema_AccountEmailCreateNestedManyWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateNestedManyWithoutAccountInput>;
export const AccountEmailCreateNestedManyWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailCreateNestedManyWithoutAccountInput_schema();

// File: AccountPasswordCreateNestedOneWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordCreateNestedOneWithoutAccountInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema),
            z.lazy(
              () =>
                AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () => AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema
          )
          .optional(),
        connect: z
          .lazy(() => AccountPasswordWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict();
export const AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateNestedOneWithoutAccountInput> =
  __makeSchema_AccountPasswordCreateNestedOneWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordCreateNestedOneWithoutAccountInput>;
export const AccountPasswordCreateNestedOneWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordCreateNestedOneWithoutAccountInput_schema();

// File: AccountEmailUncheckedCreateNestedManyWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedCreateNestedManyWithoutAccountInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema),
            z
              .lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema)
              .array(),
            z.lazy(
              () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        connectOrCreate: z
          .union([
            z.lazy(
              () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        createMany: z
          .lazy(() => AccountEmailCreateManyAccountInputEnvelopeObjectSchema)
          .optional(),
        connect: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateNestedManyWithoutAccountInput> =
  __makeSchema_AccountEmailUncheckedCreateNestedManyWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateNestedManyWithoutAccountInput>;
export const AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedCreateNestedManyWithoutAccountInput_schema();

// File: StringFieldUpdateOperationsInput.schema.ts

/**
 *
 */
const __makeSchema_StringFieldUpdateOperationsInput_schema = () =>
  z
    .object({
      set: z.string().optional(),
    })
    .strict();
export const StringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  __makeSchema_StringFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.StringFieldUpdateOperationsInput>;
export const StringFieldUpdateOperationsInputObjectZodSchema =
  __makeSchema_StringFieldUpdateOperationsInput_schema();

// File: DateTimeFieldUpdateOperationsInput.schema.ts

/**
 *
 */
const __makeSchema_DateTimeFieldUpdateOperationsInput_schema = () =>
  z
    .object({
      set: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
    })
    .strict();
export const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  __makeSchema_DateTimeFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;
export const DateTimeFieldUpdateOperationsInputObjectZodSchema =
  __makeSchema_DateTimeFieldUpdateOperationsInput_schema();

// File: BoolFieldUpdateOperationsInput.schema.ts

/**
 *
 */
const __makeSchema_BoolFieldUpdateOperationsInput_schema = () =>
  z
    .object({
      set: z.boolean().optional(),
    })
    .strict();
export const BoolFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  __makeSchema_BoolFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.BoolFieldUpdateOperationsInput>;
export const BoolFieldUpdateOperationsInputObjectZodSchema =
  __makeSchema_BoolFieldUpdateOperationsInput_schema();

// File: AccountEmailUpdateManyWithoutAccountNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateManyWithoutAccountNestedInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema),
            z
              .lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema)
              .array(),
            z.lazy(
              () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        connectOrCreate: z
          .union([
            z.lazy(
              () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        upsert: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        createMany: z
          .lazy(() => AccountEmailCreateManyAccountInputEnvelopeObjectSchema)
          .optional(),
        set: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        disconnect: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        delete: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        connect: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        update: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        updateMany: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        deleteMany: z
          .union([
            z.lazy(() => AccountEmailScalarWhereInputObjectSchema),
            z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailUpdateManyWithoutAccountNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateManyWithoutAccountNestedInput> =
  __makeSchema_AccountEmailUpdateManyWithoutAccountNestedInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateManyWithoutAccountNestedInput>;
export const AccountEmailUpdateManyWithoutAccountNestedInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateManyWithoutAccountNestedInput_schema();

// File: AccountPasswordUpdateOneRequiredWithoutAccountNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUpdateOneRequiredWithoutAccountNestedInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema),
            z.lazy(
              () =>
                AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () => AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema
          )
          .optional(),
        upsert: z
          .lazy(() => AccountPasswordUpsertWithoutAccountInputObjectSchema)
          .optional(),
        connect: z
          .lazy(() => AccountPasswordWhereUniqueInputObjectSchema)
          .optional(),
        update: z
          .union([
            z.lazy(
              () =>
                AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectSchema
            ),
            z.lazy(() => AccountPasswordUpdateWithoutAccountInputObjectSchema),
            z.lazy(
              () =>
                AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict();
export const AccountPasswordUpdateOneRequiredWithoutAccountNestedInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpdateOneRequiredWithoutAccountNestedInput> =
  __makeSchema_AccountPasswordUpdateOneRequiredWithoutAccountNestedInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUpdateOneRequiredWithoutAccountNestedInput>;
export const AccountPasswordUpdateOneRequiredWithoutAccountNestedInputObjectZodSchema =
  __makeSchema_AccountPasswordUpdateOneRequiredWithoutAccountNestedInput_schema();

// File: AccountEmailUncheckedUpdateManyWithoutAccountNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedUpdateManyWithoutAccountNestedInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema),
            z
              .lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema)
              .array(),
            z.lazy(
              () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        connectOrCreate: z
          .union([
            z.lazy(
              () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () => AccountEmailCreateOrConnectWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        upsert: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        createMany: z
          .lazy(() => AccountEmailCreateManyAccountInputEnvelopeObjectSchema)
          .optional(),
        set: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        disconnect: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        delete: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        connect: z
          .union([
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
            z.lazy(() => AccountEmailWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
        update: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        updateMany: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema
            ),
            z
              .lazy(
                () =>
                  AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema
              )
              .array(),
          ])
          .optional(),
        deleteMany: z
          .union([
            z.lazy(() => AccountEmailScalarWhereInputObjectSchema),
            z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailUncheckedUpdateManyWithoutAccountNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateManyWithoutAccountNestedInput> =
  __makeSchema_AccountEmailUncheckedUpdateManyWithoutAccountNestedInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateManyWithoutAccountNestedInput>;
export const AccountEmailUncheckedUpdateManyWithoutAccountNestedInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedUpdateManyWithoutAccountNestedInput_schema();

// File: AccountCreateNestedOneWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateNestedOneWithoutEmailsInput_schema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema),
          z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutEmailsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
    })
    .strict();
export const AccountCreateNestedOneWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutEmailsInput> =
  __makeSchema_AccountCreateNestedOneWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountCreateNestedOneWithoutEmailsInput>;
export const AccountCreateNestedOneWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountCreateNestedOneWithoutEmailsInput_schema();

// File: AccountEmailVerificationCreateNestedOneWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationCreateNestedOneWithoutEmailInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AccountEmailVerificationCreateWithoutEmailInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () =>
              AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema
          )
          .optional(),
        connect: z
          .lazy(() => AccountEmailVerificationWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict();
export const AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateNestedOneWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationCreateNestedOneWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateNestedOneWithoutEmailInput>;
export const AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationCreateNestedOneWithoutEmailInput_schema();

// File: AccountUpdateOneWithoutEmailsNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateOneWithoutEmailsNestedInput_schema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema),
          z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutEmailsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => AccountUpsertWithoutEmailsInputObjectSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)])
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => AccountUpdateToOneWithWhereWithoutEmailsInputObjectSchema
          ),
          z.lazy(() => AccountUpdateWithoutEmailsInputObjectSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutEmailsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountUpdateOneWithoutEmailsNestedInputObjectSchema: z.ZodType<Prisma.AccountUpdateOneWithoutEmailsNestedInput> =
  __makeSchema_AccountUpdateOneWithoutEmailsNestedInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateOneWithoutEmailsNestedInput>;
export const AccountUpdateOneWithoutEmailsNestedInputObjectZodSchema =
  __makeSchema_AccountUpdateOneWithoutEmailsNestedInput_schema();

// File: AccountEmailVerificationUpdateOneWithoutEmailNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUpdateOneWithoutEmailNestedInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AccountEmailVerificationCreateWithoutEmailInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () =>
              AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema
          )
          .optional(),
        upsert: z
          .lazy(
            () => AccountEmailVerificationUpsertWithoutEmailInputObjectSchema
          )
          .optional(),
        disconnect: z
          .union([
            z.boolean(),
            z.lazy(() => AccountEmailVerificationWhereInputObjectSchema),
          ])
          .optional(),
        delete: z
          .union([
            z.boolean(),
            z.lazy(() => AccountEmailVerificationWhereInputObjectSchema),
          ])
          .optional(),
        connect: z
          .lazy(() => AccountEmailVerificationWhereUniqueInputObjectSchema)
          .optional(),
        update: z
          .union([
            z.lazy(
              () =>
                AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectSchema
            ),
            z.lazy(
              () => AccountEmailVerificationUpdateWithoutEmailInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailVerificationUpdateOneWithoutEmailNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateOneWithoutEmailNestedInput> =
  __makeSchema_AccountEmailVerificationUpdateOneWithoutEmailNestedInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateOneWithoutEmailNestedInput>;
export const AccountEmailVerificationUpdateOneWithoutEmailNestedInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUpdateOneWithoutEmailNestedInput_schema();

// File: NullableStringFieldUpdateOperationsInput.schema.ts

/**
 *
 */
const __makeSchema_NullableStringFieldUpdateOperationsInput_schema = () =>
  z
    .object({
      set: z.string().optional(),
    })
    .strict();
export const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  __makeSchema_NullableStringFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;
export const NullableStringFieldUpdateOperationsInputObjectZodSchema =
  __makeSchema_NullableStringFieldUpdateOperationsInput_schema();

// File: AccountEmailCreateNestedOneWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateNestedOneWithoutVerificationInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AccountEmailCreateWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () =>
              AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema
          )
          .optional(),
        connect: z
          .lazy(() => AccountEmailWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict();
export const AccountEmailCreateNestedOneWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateNestedOneWithoutVerificationInput> =
  __makeSchema_AccountEmailCreateNestedOneWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateNestedOneWithoutVerificationInput>;
export const AccountEmailCreateNestedOneWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailCreateNestedOneWithoutVerificationInput_schema();

// File: AccountEmailUncheckedCreateNestedOneWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedCreateNestedOneWithoutVerificationInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AccountEmailCreateWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () =>
              AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema
          )
          .optional(),
        connect: z
          .lazy(() => AccountEmailWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict();
export const AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateNestedOneWithoutVerificationInput> =
  __makeSchema_AccountEmailUncheckedCreateNestedOneWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateNestedOneWithoutVerificationInput>;
export const AccountEmailUncheckedCreateNestedOneWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedCreateNestedOneWithoutVerificationInput_schema();

// File: AccountEmailUpdateOneWithoutVerificationNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateOneWithoutVerificationNestedInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AccountEmailCreateWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () =>
              AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema
          )
          .optional(),
        upsert: z
          .lazy(() => AccountEmailUpsertWithoutVerificationInputObjectSchema)
          .optional(),
        disconnect: z
          .union([
            z.boolean(),
            z.lazy(() => AccountEmailWhereInputObjectSchema),
          ])
          .optional(),
        delete: z
          .union([
            z.boolean(),
            z.lazy(() => AccountEmailWhereInputObjectSchema),
          ])
          .optional(),
        connect: z
          .lazy(() => AccountEmailWhereUniqueInputObjectSchema)
          .optional(),
        update: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () => AccountEmailUpdateWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailUpdateOneWithoutVerificationNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateOneWithoutVerificationNestedInput> =
  __makeSchema_AccountEmailUpdateOneWithoutVerificationNestedInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateOneWithoutVerificationNestedInput>;
export const AccountEmailUpdateOneWithoutVerificationNestedInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateOneWithoutVerificationNestedInput_schema();

// File: AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AccountEmailCreateWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(
            () =>
              AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema
          )
          .optional(),
        upsert: z
          .lazy(() => AccountEmailUpsertWithoutVerificationInputObjectSchema)
          .optional(),
        disconnect: z
          .union([
            z.boolean(),
            z.lazy(() => AccountEmailWhereInputObjectSchema),
          ])
          .optional(),
        delete: z
          .union([
            z.boolean(),
            z.lazy(() => AccountEmailWhereInputObjectSchema),
          ])
          .optional(),
        connect: z
          .lazy(() => AccountEmailWhereUniqueInputObjectSchema)
          .optional(),
        update: z
          .union([
            z.lazy(
              () =>
                AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () => AccountEmailUpdateWithoutVerificationInputObjectSchema
            ),
            z.lazy(
              () =>
                AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailUncheckedUpdateOneWithoutVerificationNestedInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput> =
  __makeSchema_AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput>;
export const AccountEmailUncheckedUpdateOneWithoutVerificationNestedInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedUpdateOneWithoutVerificationNestedInput_schema();

// File: AccountCreateNestedOneWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateNestedOneWithoutPasswordInput_schema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema),
          z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutPasswordInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
    })
    .strict();
export const AccountCreateNestedOneWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutPasswordInput> =
  __makeSchema_AccountCreateNestedOneWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountCreateNestedOneWithoutPasswordInput>;
export const AccountCreateNestedOneWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountCreateNestedOneWithoutPasswordInput_schema();

// File: AccountUncheckedCreateNestedOneWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedCreateNestedOneWithoutPasswordInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema),
            z.lazy(
              () => AccountUncheckedCreateWithoutPasswordInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(() => AccountCreateOrConnectWithoutPasswordInputObjectSchema)
          .optional(),
        connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      })
      .strict();
export const AccountUncheckedCreateNestedOneWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedOneWithoutPasswordInput> =
  __makeSchema_AccountUncheckedCreateNestedOneWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateNestedOneWithoutPasswordInput>;
export const AccountUncheckedCreateNestedOneWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountUncheckedCreateNestedOneWithoutPasswordInput_schema();

// File: AccountUpdateOneWithoutPasswordNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateOneWithoutPasswordNestedInput_schema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema),
          z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccountCreateOrConnectWithoutPasswordInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => AccountUpsertWithoutPasswordInputObjectSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)])
        .optional(),
      connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => AccountUpdateToOneWithWhereWithoutPasswordInputObjectSchema
          ),
          z.lazy(() => AccountUpdateWithoutPasswordInputObjectSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutPasswordInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountUpdateOneWithoutPasswordNestedInputObjectSchema: z.ZodType<Prisma.AccountUpdateOneWithoutPasswordNestedInput> =
  __makeSchema_AccountUpdateOneWithoutPasswordNestedInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateOneWithoutPasswordNestedInput>;
export const AccountUpdateOneWithoutPasswordNestedInputObjectZodSchema =
  __makeSchema_AccountUpdateOneWithoutPasswordNestedInput_schema();

// File: AccountUncheckedUpdateOneWithoutPasswordNestedInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedUpdateOneWithoutPasswordNestedInput_schema =
  () =>
    z
      .object({
        create: z
          .union([
            z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema),
            z.lazy(
              () => AccountUncheckedCreateWithoutPasswordInputObjectSchema
            ),
          ])
          .optional(),
        connectOrCreate: z
          .lazy(() => AccountCreateOrConnectWithoutPasswordInputObjectSchema)
          .optional(),
        upsert: z
          .lazy(() => AccountUpsertWithoutPasswordInputObjectSchema)
          .optional(),
        disconnect: z
          .union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)])
          .optional(),
        delete: z
          .union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)])
          .optional(),
        connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
        update: z
          .union([
            z.lazy(
              () => AccountUpdateToOneWithWhereWithoutPasswordInputObjectSchema
            ),
            z.lazy(() => AccountUpdateWithoutPasswordInputObjectSchema),
            z.lazy(
              () => AccountUncheckedUpdateWithoutPasswordInputObjectSchema
            ),
          ])
          .optional(),
      })
      .strict();
export const AccountUncheckedUpdateOneWithoutPasswordNestedInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateOneWithoutPasswordNestedInput> =
  __makeSchema_AccountUncheckedUpdateOneWithoutPasswordNestedInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateOneWithoutPasswordNestedInput>;
export const AccountUncheckedUpdateOneWithoutPasswordNestedInputObjectZodSchema =
  __makeSchema_AccountUncheckedUpdateOneWithoutPasswordNestedInput_schema();

// File: IntFieldUpdateOperationsInput.schema.ts

/**
 *
 */
const __makeSchema_IntFieldUpdateOperationsInput_schema = () =>
  z
    .object({
      set: z.number().int().optional(),
      increment: z.number().int().optional(),
      decrement: z.number().int().optional(),
      multiply: z.number().int().optional(),
      divide: z.number().int().optional(),
    })
    .strict();
export const IntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  __makeSchema_IntFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.IntFieldUpdateOperationsInput>;
export const IntFieldUpdateOperationsInputObjectZodSchema =
  __makeSchema_IntFieldUpdateOperationsInput_schema();

// File: EnumHealthStatusFieldUpdateOperationsInput.schema.ts

/**
 *
 */
const __makeSchema_EnumHealthStatusFieldUpdateOperationsInput_schema = () =>
  z
    .object({
      set: HealthStatusSchema.optional(),
    })
    .strict();
export const EnumHealthStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumHealthStatusFieldUpdateOperationsInput> =
  __makeSchema_EnumHealthStatusFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.EnumHealthStatusFieldUpdateOperationsInput>;
export const EnumHealthStatusFieldUpdateOperationsInputObjectZodSchema =
  __makeSchema_EnumHealthStatusFieldUpdateOperationsInput_schema();

// File: NestedUuidFilter.schema.ts

const nesteduuidfilterSchema = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedUuidFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedUuidFilterObjectSchema: z.ZodType<Prisma.NestedUuidFilter> =
  nesteduuidfilterSchema as unknown as z.ZodType<Prisma.NestedUuidFilter>;
export const NestedUuidFilterObjectZodSchema = nesteduuidfilterSchema;

// File: NestedDateTimeFilter.schema.ts

const nesteddatetimefilterSchema = z
  .object({
    equals: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
    notIn: z
      .union([z.date().array(), z.string().datetime().array()])
      .optional(),
    lt: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    lte: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    gt: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    gte: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    not: z
      .union([
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
        z.lazy(() => NestedDateTimeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  nesteddatetimefilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeFilter>;
export const NestedDateTimeFilterObjectZodSchema = nesteddatetimefilterSchema;

// File: NestedBoolFilter.schema.ts

const nestedboolfilterSchema = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedBoolFilterObjectSchema: z.ZodType<Prisma.NestedBoolFilter> =
  nestedboolfilterSchema as unknown as z.ZodType<Prisma.NestedBoolFilter>;
export const NestedBoolFilterObjectZodSchema = nestedboolfilterSchema;

// File: NestedUuidWithAggregatesFilter.schema.ts

const nesteduuidwithaggregatesfilterSchema = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedUuidWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  })
  .strict();
export const NestedUuidWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> =
  nesteduuidwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedUuidWithAggregatesFilter>;
export const NestedUuidWithAggregatesFilterObjectZodSchema =
  nesteduuidwithaggregatesfilterSchema;

// File: NestedIntFilter.schema.ts

const nestedintfilterSchema = z
  .object({
    equals: z.number().int().optional(),
    in: z.number().int().array().optional(),
    notIn: z.number().int().array().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    not: z
      .union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedIntFilterObjectSchema: z.ZodType<Prisma.NestedIntFilter> =
  nestedintfilterSchema as unknown as z.ZodType<Prisma.NestedIntFilter>;
export const NestedIntFilterObjectZodSchema = nestedintfilterSchema;

// File: NestedStringFilter.schema.ts

const nestedstringfilterSchema = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedStringFilterObjectSchema: z.ZodType<Prisma.NestedStringFilter> =
  nestedstringfilterSchema as unknown as z.ZodType<Prisma.NestedStringFilter>;
export const NestedStringFilterObjectZodSchema = nestedstringfilterSchema;

// File: NestedDateTimeWithAggregatesFilter.schema.ts

const nesteddatetimewithaggregatesfilterSchema = z
  .object({
    equals: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
    notIn: z
      .union([z.date().array(), z.string().datetime().array()])
      .optional(),
    lt: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    lte: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    gt: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    gte: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        'Invalid ISO datetime'
      )
      .transform((v) => new Date(v))
      .optional(),
    not: z
      .union([
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
        z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  })
  .strict();
export const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  nesteddatetimewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;
export const NestedDateTimeWithAggregatesFilterObjectZodSchema =
  nesteddatetimewithaggregatesfilterSchema;

// File: NestedBoolWithAggregatesFilter.schema.ts

const nestedboolwithaggregatesfilterSchema = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([
        z.boolean(),
        z.lazy(() => NestedBoolWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterObjectSchema).optional(),
  })
  .strict();
export const NestedBoolWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  nestedboolwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedBoolWithAggregatesFilter>;
export const NestedBoolWithAggregatesFilterObjectZodSchema =
  nestedboolwithaggregatesfilterSchema;

// File: NestedUuidNullableFilter.schema.ts

const nesteduuidnullablefilterSchema = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedUuidNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict();
export const NestedUuidNullableFilterObjectSchema: z.ZodType<Prisma.NestedUuidNullableFilter> =
  nesteduuidnullablefilterSchema as unknown as z.ZodType<Prisma.NestedUuidNullableFilter>;
export const NestedUuidNullableFilterObjectZodSchema =
  nesteduuidnullablefilterSchema;

// File: NestedStringWithAggregatesFilter.schema.ts

const nestedstringwithaggregatesfilterSchema = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedStringWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  })
  .strict();
export const NestedStringWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  nestedstringwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedStringWithAggregatesFilter>;
export const NestedStringWithAggregatesFilterObjectZodSchema =
  nestedstringwithaggregatesfilterSchema;

// File: NestedUuidNullableWithAggregatesFilter.schema.ts

const nesteduuidnullablewithaggregatesfilterSchema = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedUuidNullableWithAggregatesFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  })
  .strict();
export const NestedUuidNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> =
  nesteduuidnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter>;
export const NestedUuidNullableWithAggregatesFilterObjectZodSchema =
  nesteduuidnullablewithaggregatesfilterSchema;

// File: NestedIntNullableFilter.schema.ts

const nestedintnullablefilterSchema = z
  .object({
    equals: z.number().int().optional().nullable(),
    in: z.number().int().array().optional().nullable(),
    notIn: z.number().int().array().optional().nullable(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    not: z
      .union([
        z.number().int(),
        z.lazy(() => NestedIntNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();
export const NestedIntNullableFilterObjectSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  nestedintnullablefilterSchema as unknown as z.ZodType<Prisma.NestedIntNullableFilter>;
export const NestedIntNullableFilterObjectZodSchema =
  nestedintnullablefilterSchema;

// File: NestedStringNullableFilter.schema.ts

const nestedstringnullablefilterSchema = z
  .object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict();
export const NestedStringNullableFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  nestedstringnullablefilterSchema as unknown as z.ZodType<Prisma.NestedStringNullableFilter>;
export const NestedStringNullableFilterObjectZodSchema =
  nestedstringnullablefilterSchema;

// File: NestedEnumHealthStatusFilter.schema.ts

const nestedenumhealthstatusfilterSchema = z
  .object({
    equals: HealthStatusSchema.optional(),
    in: HealthStatusSchema.array().optional(),
    notIn: HealthStatusSchema.array().optional(),
    not: z
      .union([
        HealthStatusSchema,
        z.lazy(() => NestedEnumHealthStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const NestedEnumHealthStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumHealthStatusFilter> =
  nestedenumhealthstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumHealthStatusFilter>;
export const NestedEnumHealthStatusFilterObjectZodSchema =
  nestedenumhealthstatusfilterSchema;

// File: NestedIntWithAggregatesFilter.schema.ts

const nestedintwithaggregatesfilterSchema = z
  .object({
    equals: z.number().int().optional(),
    in: z.number().int().array().optional(),
    notIn: z.number().int().array().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    not: z
      .union([
        z.number().int(),
        z.lazy(() => NestedIntWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  })
  .strict();
export const NestedIntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  nestedintwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedIntWithAggregatesFilter>;
export const NestedIntWithAggregatesFilterObjectZodSchema =
  nestedintwithaggregatesfilterSchema;

// File: NestedFloatFilter.schema.ts

const nestedfloatfilterSchema = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedFloatFilterObjectSchema: z.ZodType<Prisma.NestedFloatFilter> =
  nestedfloatfilterSchema as unknown as z.ZodType<Prisma.NestedFloatFilter>;
export const NestedFloatFilterObjectZodSchema = nestedfloatfilterSchema;

// File: NestedEnumHealthStatusWithAggregatesFilter.schema.ts

const nestedenumhealthstatuswithaggregatesfilterSchema = z
  .object({
    equals: HealthStatusSchema.optional(),
    in: HealthStatusSchema.array().optional(),
    notIn: HealthStatusSchema.array().optional(),
    not: z
      .union([
        HealthStatusSchema,
        z.lazy(() => NestedEnumHealthStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumHealthStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumHealthStatusFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumHealthStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumHealthStatusWithAggregatesFilter> =
  nestedenumhealthstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumHealthStatusWithAggregatesFilter>;
export const NestedEnumHealthStatusWithAggregatesFilterObjectZodSchema =
  nestedenumhealthstatuswithaggregatesfilterSchema;

// File: NestedJsonNullableFilter.schema.ts

/**
 *
 */
const __makeSchema_NestedJsonNullableFilter_schema = () =>
  z
    .object({
      equals: jsonSchema.optional(),
      path: z.string().array().optional(),
      mode: QueryModeSchema.optional(),
      string_contains: z.string().optional(),
      string_starts_with: z.string().optional(),
      string_ends_with: z.string().optional(),
      array_starts_with: jsonSchema.optional().nullable(),
      array_ends_with: jsonSchema.optional().nullable(),
      array_contains: jsonSchema.optional().nullable(),
      lt: jsonSchema.optional(),
      lte: jsonSchema.optional(),
      gt: jsonSchema.optional(),
      gte: jsonSchema.optional(),
      not: jsonSchema.optional(),
    })
    .strict();
export const NestedJsonNullableFilterObjectSchema: z.ZodType<Prisma.NestedJsonNullableFilter> =
  __makeSchema_NestedJsonNullableFilter_schema() as unknown as z.ZodType<Prisma.NestedJsonNullableFilter>;
export const NestedJsonNullableFilterObjectZodSchema =
  __makeSchema_NestedJsonNullableFilter_schema();

// File: AccountEmailCreateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateWithoutAccountInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z.string(),
      isPrimary: z.boolean().optional(),
      verification: z
        .lazy(
          () =>
            AccountEmailVerificationCreateNestedOneWithoutEmailInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailCreateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateWithoutAccountInput> =
  __makeSchema_AccountEmailCreateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateWithoutAccountInput>;
export const AccountEmailCreateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailCreateWithoutAccountInput_schema();

// File: AccountEmailUncheckedCreateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedCreateWithoutAccountInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z.string(),
      isPrimary: z.boolean().optional(),
      verificationId: z.string().optional().nullable(),
    })
    .strict();
export const AccountEmailUncheckedCreateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateWithoutAccountInput> =
  __makeSchema_AccountEmailUncheckedCreateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateWithoutAccountInput>;
export const AccountEmailUncheckedCreateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedCreateWithoutAccountInput_schema();

// File: AccountEmailCreateOrConnectWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateOrConnectWithoutAccountInput_schema = () =>
  z
    .object({
      where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema),
        z.lazy(
          () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
        ),
      ]),
    })
    .strict();
export const AccountEmailCreateOrConnectWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutAccountInput> =
  __makeSchema_AccountEmailCreateOrConnectWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutAccountInput>;
export const AccountEmailCreateOrConnectWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailCreateOrConnectWithoutAccountInput_schema();

// File: AccountEmailCreateManyAccountInputEnvelope.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateManyAccountInputEnvelope_schema = () =>
  z
    .object({
      data: z.union([
        z.lazy(() => AccountEmailCreateManyAccountInputObjectSchema),
        z.lazy(() => AccountEmailCreateManyAccountInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();
export const AccountEmailCreateManyAccountInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountEmailCreateManyAccountInputEnvelope> =
  __makeSchema_AccountEmailCreateManyAccountInputEnvelope_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateManyAccountInputEnvelope>;
export const AccountEmailCreateManyAccountInputEnvelopeObjectZodSchema =
  __makeSchema_AccountEmailCreateManyAccountInputEnvelope_schema();

// File: AccountPasswordCreateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordCreateWithoutAccountInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      password: z.string(),
    })
    .strict();
export const AccountPasswordCreateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateWithoutAccountInput> =
  __makeSchema_AccountPasswordCreateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordCreateWithoutAccountInput>;
export const AccountPasswordCreateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordCreateWithoutAccountInput_schema();

// File: AccountPasswordUncheckedCreateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUncheckedCreateWithoutAccountInput_schema =
  () =>
    z
      .object({
        id: z.string().optional(),
        createdAt: z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v))
          .optional(),
        updatedAt: z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v))
          .optional(),
        password: z.string(),
      })
      .strict();
export const AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedCreateWithoutAccountInput> =
  __makeSchema_AccountPasswordUncheckedCreateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedCreateWithoutAccountInput>;
export const AccountPasswordUncheckedCreateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordUncheckedCreateWithoutAccountInput_schema();

// File: AccountPasswordCreateOrConnectWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordCreateOrConnectWithoutAccountInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountPasswordWhereUniqueInputObjectSchema),
        create: z.union([
          z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema),
          z.lazy(
            () => AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountPasswordCreateOrConnectWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordCreateOrConnectWithoutAccountInput> =
  __makeSchema_AccountPasswordCreateOrConnectWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordCreateOrConnectWithoutAccountInput>;
export const AccountPasswordCreateOrConnectWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordCreateOrConnectWithoutAccountInput_schema();

// File: AccountEmailUpsertWithWhereUniqueWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpsertWithWhereUniqueWithoutAccountInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
        update: z.union([
          z.lazy(() => AccountEmailUpdateWithoutAccountInputObjectSchema),
          z.lazy(
            () => AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema
          ),
        ]),
        create: z.union([
          z.lazy(() => AccountEmailCreateWithoutAccountInputObjectSchema),
          z.lazy(
            () => AccountEmailUncheckedCreateWithoutAccountInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUpsertWithWhereUniqueWithoutAccountInput> =
  __makeSchema_AccountEmailUpsertWithWhereUniqueWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpsertWithWhereUniqueWithoutAccountInput>;
export const AccountEmailUpsertWithWhereUniqueWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUpsertWithWhereUniqueWithoutAccountInput_schema();

// File: AccountEmailUpdateWithWhereUniqueWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateWithWhereUniqueWithoutAccountInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
        data: z.union([
          z.lazy(() => AccountEmailUpdateWithoutAccountInputObjectSchema),
          z.lazy(
            () => AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateWithWhereUniqueWithoutAccountInput> =
  __makeSchema_AccountEmailUpdateWithWhereUniqueWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateWithWhereUniqueWithoutAccountInput>;
export const AccountEmailUpdateWithWhereUniqueWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateWithWhereUniqueWithoutAccountInput_schema();

// File: AccountEmailUpdateManyWithWhereWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateManyWithWhereWithoutAccountInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountEmailScalarWhereInputObjectSchema),
        data: z.union([
          z.lazy(() => AccountEmailUpdateManyMutationInputObjectSchema),
          z.lazy(
            () => AccountEmailUncheckedUpdateManyWithoutAccountInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountEmailUpdateManyWithWhereWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateManyWithWhereWithoutAccountInput> =
  __makeSchema_AccountEmailUpdateManyWithWhereWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateManyWithWhereWithoutAccountInput>;
export const AccountEmailUpdateManyWithWhereWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateManyWithWhereWithoutAccountInput_schema();

// File: AccountEmailScalarWhereInput.schema.ts

const accountemailscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountEmailScalarWhereInputObjectSchema),
        z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountEmailScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountEmailScalarWhereInputObjectSchema),
        z.lazy(() => AccountEmailScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v)),
      ])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isPrimary: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    accountId: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    verificationId: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();
export const AccountEmailScalarWhereInputObjectSchema: z.ZodType<Prisma.AccountEmailScalarWhereInput> =
  accountemailscalarwhereinputSchema as unknown as z.ZodType<Prisma.AccountEmailScalarWhereInput>;
export const AccountEmailScalarWhereInputObjectZodSchema =
  accountemailscalarwhereinputSchema;

// File: AccountPasswordUpsertWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUpsertWithoutAccountInput_schema = () =>
  z
    .object({
      update: z.union([
        z.lazy(() => AccountPasswordUpdateWithoutAccountInputObjectSchema),
        z.lazy(
          () => AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => AccountPasswordCreateWithoutAccountInputObjectSchema),
        z.lazy(
          () => AccountPasswordUncheckedCreateWithoutAccountInputObjectSchema
        ),
      ]),
      where: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional(),
    })
    .strict();
export const AccountPasswordUpsertWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpsertWithoutAccountInput> =
  __makeSchema_AccountPasswordUpsertWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUpsertWithoutAccountInput>;
export const AccountPasswordUpsertWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordUpsertWithoutAccountInput_schema();

// File: AccountPasswordUpdateToOneWithWhereWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUpdateToOneWithWhereWithoutAccountInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountPasswordWhereInputObjectSchema).optional(),
        data: z.union([
          z.lazy(() => AccountPasswordUpdateWithoutAccountInputObjectSchema),
          z.lazy(
            () => AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpdateToOneWithWhereWithoutAccountInput> =
  __makeSchema_AccountPasswordUpdateToOneWithWhereWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUpdateToOneWithWhereWithoutAccountInput>;
export const AccountPasswordUpdateToOneWithWhereWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordUpdateToOneWithWhereWithoutAccountInput_schema();

// File: AccountPasswordUpdateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUpdateWithoutAccountInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountPasswordUpdateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUpdateWithoutAccountInput> =
  __makeSchema_AccountPasswordUpdateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUpdateWithoutAccountInput>;
export const AccountPasswordUpdateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordUpdateWithoutAccountInput_schema();

// File: AccountPasswordUncheckedUpdateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordUncheckedUpdateWithoutAccountInput_schema =
  () =>
    z
      .object({
        id: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        createdAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        updatedAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        password: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
      })
      .strict();
export const AccountPasswordUncheckedUpdateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountPasswordUncheckedUpdateWithoutAccountInput> =
  __makeSchema_AccountPasswordUncheckedUpdateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordUncheckedUpdateWithoutAccountInput>;
export const AccountPasswordUncheckedUpdateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountPasswordUncheckedUpdateWithoutAccountInput_schema();

// File: AccountCreateWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateWithoutEmailsInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      deletedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v)),
      isActive: z.boolean().optional(),
      password: z.lazy(
        () => AccountPasswordCreateNestedOneWithoutAccountInputObjectSchema
      ),
    })
    .strict();
export const AccountCreateWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountCreateWithoutEmailsInput> =
  __makeSchema_AccountCreateWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountCreateWithoutEmailsInput>;
export const AccountCreateWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountCreateWithoutEmailsInput_schema();

// File: AccountUncheckedCreateWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedCreateWithoutEmailsInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      deletedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v)),
      isActive: z.boolean().optional(),
      passwordId: z.string(),
    })
    .strict();
export const AccountUncheckedCreateWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutEmailsInput> =
  __makeSchema_AccountUncheckedCreateWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateWithoutEmailsInput>;
export const AccountUncheckedCreateWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountUncheckedCreateWithoutEmailsInput_schema();

// File: AccountCreateOrConnectWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateOrConnectWithoutEmailsInput_schema = () =>
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema),
      ]),
    })
    .strict();
export const AccountCreateOrConnectWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutEmailsInput> =
  __makeSchema_AccountCreateOrConnectWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountCreateOrConnectWithoutEmailsInput>;
export const AccountCreateOrConnectWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountCreateOrConnectWithoutEmailsInput_schema();

// File: AccountEmailVerificationCreateWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationCreateWithoutEmailInput_schema =
  () =>
    z
      .object({
        id: z.string().optional(),
        createdAt: z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v))
          .optional(),
      })
      .strict();
export const AccountEmailVerificationCreateWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationCreateWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateWithoutEmailInput>;
export const AccountEmailVerificationCreateWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationCreateWithoutEmailInput_schema();

// File: AccountEmailVerificationUncheckedCreateWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUncheckedCreateWithoutEmailInput_schema =
  () =>
    z
      .object({
        id: z.string().optional(),
        createdAt: z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v))
          .optional(),
      })
      .strict();
export const AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationUncheckedCreateWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUncheckedCreateWithoutEmailInput>;
export const AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUncheckedCreateWithoutEmailInput_schema();

// File: AccountEmailVerificationCreateOrConnectWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationCreateOrConnectWithoutEmailInput_schema =
  () =>
    z
      .object({
        where: z.lazy(
          () => AccountEmailVerificationWhereUniqueInputObjectSchema
        ),
        create: z.union([
          z.lazy(
            () => AccountEmailVerificationCreateWithoutEmailInputObjectSchema
          ),
          z.lazy(
            () =>
              AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCreateOrConnectWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationCreateOrConnectWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCreateOrConnectWithoutEmailInput>;
export const AccountEmailVerificationCreateOrConnectWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationCreateOrConnectWithoutEmailInput_schema();

// File: AccountUpsertWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpsertWithoutEmailsInput_schema = () =>
  z
    .object({
      update: z.union([
        z.lazy(() => AccountUpdateWithoutEmailsInputObjectSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutEmailsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountCreateWithoutEmailsInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutEmailsInputObjectSchema),
      ]),
      where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
    })
    .strict();
export const AccountUpsertWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithoutEmailsInput> =
  __makeSchema_AccountUpsertWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountUpsertWithoutEmailsInput>;
export const AccountUpsertWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountUpsertWithoutEmailsInput_schema();

// File: AccountUpdateToOneWithWhereWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateToOneWithWhereWithoutEmailsInput_schema = () =>
  z
    .object({
      where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => AccountUpdateWithoutEmailsInputObjectSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutEmailsInputObjectSchema),
      ]),
    })
    .strict();
export const AccountUpdateToOneWithWhereWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmailsInput> =
  __makeSchema_AccountUpdateToOneWithWhereWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmailsInput>;
export const AccountUpdateToOneWithWhereWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountUpdateToOneWithWhereWithoutEmailsInput_schema();

// File: AccountUpdateWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateWithoutEmailsInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      password: z
        .lazy(
          () =>
            AccountPasswordUpdateOneRequiredWithoutAccountNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountUpdateWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountUpdateWithoutEmailsInput> =
  __makeSchema_AccountUpdateWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateWithoutEmailsInput>;
export const AccountUpdateWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountUpdateWithoutEmailsInput_schema();

// File: AccountUncheckedUpdateWithoutEmailsInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedUpdateWithoutEmailsInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      passwordId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountUncheckedUpdateWithoutEmailsInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutEmailsInput> =
  __makeSchema_AccountUncheckedUpdateWithoutEmailsInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateWithoutEmailsInput>;
export const AccountUncheckedUpdateWithoutEmailsInputObjectZodSchema =
  __makeSchema_AccountUncheckedUpdateWithoutEmailsInput_schema();

// File: AccountEmailVerificationUpsertWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUpsertWithoutEmailInput_schema =
  () =>
    z
      .object({
        update: z.union([
          z.lazy(
            () => AccountEmailVerificationUpdateWithoutEmailInputObjectSchema
          ),
          z.lazy(
            () =>
              AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema
          ),
        ]),
        create: z.union([
          z.lazy(
            () => AccountEmailVerificationCreateWithoutEmailInputObjectSchema
          ),
          z.lazy(
            () =>
              AccountEmailVerificationUncheckedCreateWithoutEmailInputObjectSchema
          ),
        ]),
        where: z
          .lazy(() => AccountEmailVerificationWhereInputObjectSchema)
          .optional(),
      })
      .strict();
export const AccountEmailVerificationUpsertWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpsertWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationUpsertWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpsertWithoutEmailInput>;
export const AccountEmailVerificationUpsertWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUpsertWithoutEmailInput_schema();

// File: AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput_schema =
  () =>
    z
      .object({
        where: z
          .lazy(() => AccountEmailVerificationWhereInputObjectSchema)
          .optional(),
        data: z.union([
          z.lazy(
            () => AccountEmailVerificationUpdateWithoutEmailInputObjectSchema
          ),
          z.lazy(
            () =>
              AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput>;
export const AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUpdateToOneWithWhereWithoutEmailInput_schema();

// File: AccountEmailVerificationUpdateWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUpdateWithoutEmailInput_schema =
  () =>
    z
      .object({
        id: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        createdAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailVerificationUpdateWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUpdateWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationUpdateWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUpdateWithoutEmailInput>;
export const AccountEmailVerificationUpdateWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUpdateWithoutEmailInput_schema();

// File: AccountEmailVerificationUncheckedUpdateWithoutEmailInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationUncheckedUpdateWithoutEmailInput_schema =
  () =>
    z
      .object({
        id: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        createdAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
      })
      .strict();
export const AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationUncheckedUpdateWithoutEmailInput> =
  __makeSchema_AccountEmailVerificationUncheckedUpdateWithoutEmailInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationUncheckedUpdateWithoutEmailInput>;
export const AccountEmailVerificationUncheckedUpdateWithoutEmailInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationUncheckedUpdateWithoutEmailInput_schema();

// File: AccountEmailCreateWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateWithoutVerificationInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z.string(),
      isPrimary: z.boolean().optional(),
      account: z
        .lazy(() => AccountCreateNestedOneWithoutEmailsInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountEmailCreateWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateWithoutVerificationInput> =
  __makeSchema_AccountEmailCreateWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateWithoutVerificationInput>;
export const AccountEmailCreateWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailCreateWithoutVerificationInput_schema();

// File: AccountEmailUncheckedCreateWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedCreateWithoutVerificationInput_schema =
  () =>
    z
      .object({
        id: z.string().optional(),
        createdAt: z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v))
          .optional(),
        updatedAt: z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
            'Invalid ISO datetime'
          )
          .transform((v) => new Date(v))
          .optional(),
        email: z.string(),
        isPrimary: z.boolean().optional(),
        accountId: z.string().optional().nullable(),
      })
      .strict();
export const AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedCreateWithoutVerificationInput> =
  __makeSchema_AccountEmailUncheckedCreateWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedCreateWithoutVerificationInput>;
export const AccountEmailUncheckedCreateWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedCreateWithoutVerificationInput_schema();

// File: AccountEmailCreateOrConnectWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateOrConnectWithoutVerificationInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountEmailWhereUniqueInputObjectSchema),
        create: z.union([
          z.lazy(() => AccountEmailCreateWithoutVerificationInputObjectSchema),
          z.lazy(
            () =>
              AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountEmailCreateOrConnectWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutVerificationInput> =
  __makeSchema_AccountEmailCreateOrConnectWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateOrConnectWithoutVerificationInput>;
export const AccountEmailCreateOrConnectWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailCreateOrConnectWithoutVerificationInput_schema();

// File: AccountEmailUpsertWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpsertWithoutVerificationInput_schema = () =>
  z
    .object({
      update: z.union([
        z.lazy(() => AccountEmailUpdateWithoutVerificationInputObjectSchema),
        z.lazy(
          () => AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => AccountEmailCreateWithoutVerificationInputObjectSchema),
        z.lazy(
          () => AccountEmailUncheckedCreateWithoutVerificationInputObjectSchema
        ),
      ]),
      where: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
    })
    .strict();
export const AccountEmailUpsertWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUpsertWithoutVerificationInput> =
  __makeSchema_AccountEmailUpsertWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpsertWithoutVerificationInput>;
export const AccountEmailUpsertWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailUpsertWithoutVerificationInput_schema();

// File: AccountEmailUpdateToOneWithWhereWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateToOneWithWhereWithoutVerificationInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountEmailWhereInputObjectSchema).optional(),
        data: z.union([
          z.lazy(() => AccountEmailUpdateWithoutVerificationInputObjectSchema),
          z.lazy(
            () =>
              AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema
          ),
        ]),
      })
      .strict();
export const AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateToOneWithWhereWithoutVerificationInput> =
  __makeSchema_AccountEmailUpdateToOneWithWhereWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateToOneWithWhereWithoutVerificationInput>;
export const AccountEmailUpdateToOneWithWhereWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateToOneWithWhereWithoutVerificationInput_schema();

// File: AccountEmailUpdateWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateWithoutVerificationInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPrimary: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      account: z
        .lazy(() => AccountUpdateOneWithoutEmailsNestedInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountEmailUpdateWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateWithoutVerificationInput> =
  __makeSchema_AccountEmailUpdateWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateWithoutVerificationInput>;
export const AccountEmailUpdateWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateWithoutVerificationInput_schema();

// File: AccountEmailUncheckedUpdateWithoutVerificationInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedUpdateWithoutVerificationInput_schema =
  () =>
    z
      .object({
        id: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        createdAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        updatedAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        email: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        isPrimary: z
          .union([
            z.boolean(),
            z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        accountId: z
          .union([
            z.string(),
            z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional()
          .nullable(),
      })
      .strict();
export const AccountEmailUncheckedUpdateWithoutVerificationInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateWithoutVerificationInput> =
  __makeSchema_AccountEmailUncheckedUpdateWithoutVerificationInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateWithoutVerificationInput>;
export const AccountEmailUncheckedUpdateWithoutVerificationInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedUpdateWithoutVerificationInput_schema();

// File: AccountCreateWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateWithoutPasswordInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      deletedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v)),
      isActive: z.boolean().optional(),
      emails: z
        .lazy(() => AccountEmailCreateNestedManyWithoutAccountInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountCreateWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountCreateWithoutPasswordInput> =
  __makeSchema_AccountCreateWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountCreateWithoutPasswordInput>;
export const AccountCreateWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountCreateWithoutPasswordInput_schema();

// File: AccountUncheckedCreateWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedCreateWithoutPasswordInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      deletedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v)),
      isActive: z.boolean().optional(),
      emails: z
        .lazy(
          () =>
            AccountEmailUncheckedCreateNestedManyWithoutAccountInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountUncheckedCreateWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutPasswordInput> =
  __makeSchema_AccountUncheckedCreateWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateWithoutPasswordInput>;
export const AccountUncheckedCreateWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountUncheckedCreateWithoutPasswordInput_schema();

// File: AccountCreateOrConnectWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCreateOrConnectWithoutPasswordInput_schema = () =>
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema),
      ]),
    })
    .strict();
export const AccountCreateOrConnectWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutPasswordInput> =
  __makeSchema_AccountCreateOrConnectWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountCreateOrConnectWithoutPasswordInput>;
export const AccountCreateOrConnectWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountCreateOrConnectWithoutPasswordInput_schema();

// File: AccountUpsertWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpsertWithoutPasswordInput_schema = () =>
  z
    .object({
      update: z.union([
        z.lazy(() => AccountUpdateWithoutPasswordInputObjectSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutPasswordInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountCreateWithoutPasswordInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutPasswordInputObjectSchema),
      ]),
      where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
    })
    .strict();
export const AccountUpsertWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithoutPasswordInput> =
  __makeSchema_AccountUpsertWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountUpsertWithoutPasswordInput>;
export const AccountUpsertWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountUpsertWithoutPasswordInput_schema();

// File: AccountUpdateToOneWithWhereWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateToOneWithWhereWithoutPasswordInput_schema =
  () =>
    z
      .object({
        where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
        data: z.union([
          z.lazy(() => AccountUpdateWithoutPasswordInputObjectSchema),
          z.lazy(() => AccountUncheckedUpdateWithoutPasswordInputObjectSchema),
        ]),
      })
      .strict();
export const AccountUpdateToOneWithWhereWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutPasswordInput> =
  __makeSchema_AccountUpdateToOneWithWhereWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutPasswordInput>;
export const AccountUpdateToOneWithWhereWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountUpdateToOneWithWhereWithoutPasswordInput_schema();

// File: AccountUpdateWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUpdateWithoutPasswordInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      emails: z
        .lazy(() => AccountEmailUpdateManyWithoutAccountNestedInputObjectSchema)
        .optional(),
    })
    .strict();
export const AccountUpdateWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUpdateWithoutPasswordInput> =
  __makeSchema_AccountUpdateWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountUpdateWithoutPasswordInput>;
export const AccountUpdateWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountUpdateWithoutPasswordInput_schema();

// File: AccountUncheckedUpdateWithoutPasswordInput.schema.ts

/**
 *
 */
const __makeSchema_AccountUncheckedUpdateWithoutPasswordInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      deletedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      emails: z
        .lazy(
          () =>
            AccountEmailUncheckedUpdateManyWithoutAccountNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountUncheckedUpdateWithoutPasswordInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutPasswordInput> =
  __makeSchema_AccountUncheckedUpdateWithoutPasswordInput_schema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateWithoutPasswordInput>;
export const AccountUncheckedUpdateWithoutPasswordInputObjectZodSchema =
  __makeSchema_AccountUncheckedUpdateWithoutPasswordInput_schema();

// File: AccountEmailCreateManyAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCreateManyAccountInput_schema = () =>
  z
    .object({
      id: z.string().optional(),
      createdAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      updatedAt: z
        .string()
        .regex(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
          'Invalid ISO datetime'
        )
        .transform((v) => new Date(v))
        .optional(),
      email: z.string(),
      isPrimary: z.boolean().optional(),
      verificationId: z.string().optional().nullable(),
    })
    .strict();
export const AccountEmailCreateManyAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailCreateManyAccountInput> =
  __makeSchema_AccountEmailCreateManyAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCreateManyAccountInput>;
export const AccountEmailCreateManyAccountInputObjectZodSchema =
  __makeSchema_AccountEmailCreateManyAccountInput_schema();

// File: AccountEmailUpdateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUpdateWithoutAccountInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPrimary: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      verification: z
        .lazy(
          () =>
            AccountEmailVerificationUpdateOneWithoutEmailNestedInputObjectSchema
        )
        .optional(),
    })
    .strict();
export const AccountEmailUpdateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUpdateWithoutAccountInput> =
  __makeSchema_AccountEmailUpdateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUpdateWithoutAccountInput>;
export const AccountEmailUpdateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUpdateWithoutAccountInput_schema();

// File: AccountEmailUncheckedUpdateWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedUpdateWithoutAccountInput_schema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z
            .string()
            .regex(
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
              'Invalid ISO datetime'
            )
            .transform((v) => new Date(v)),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isPrimary: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      verificationId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();
export const AccountEmailUncheckedUpdateWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateWithoutAccountInput> =
  __makeSchema_AccountEmailUncheckedUpdateWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateWithoutAccountInput>;
export const AccountEmailUncheckedUpdateWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedUpdateWithoutAccountInput_schema();

// File: AccountEmailUncheckedUpdateManyWithoutAccountInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailUncheckedUpdateManyWithoutAccountInput_schema =
  () =>
    z
      .object({
        id: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        createdAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        updatedAt: z
          .union([
            z
              .string()
              .regex(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
                'Invalid ISO datetime'
              )
              .transform((v) => new Date(v)),
            z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        email: z
          .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        isPrimary: z
          .union([
            z.boolean(),
            z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
          ])
          .optional(),
        verificationId: z
          .union([
            z.string(),
            z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
          ])
          .optional()
          .nullable(),
      })
      .strict();
export const AccountEmailUncheckedUpdateManyWithoutAccountInputObjectSchema: z.ZodType<Prisma.AccountEmailUncheckedUpdateManyWithoutAccountInput> =
  __makeSchema_AccountEmailUncheckedUpdateManyWithoutAccountInput_schema() as unknown as z.ZodType<Prisma.AccountEmailUncheckedUpdateManyWithoutAccountInput>;
export const AccountEmailUncheckedUpdateManyWithoutAccountInputObjectZodSchema =
  __makeSchema_AccountEmailUncheckedUpdateManyWithoutAccountInput_schema();

// File: AccountCountAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountCountAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      deletedAt: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
      passwordId: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();
export const AccountCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountAggregateInputType> =
  __makeSchema_AccountCountAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountCountAggregateInputType>;
export const AccountCountAggregateInputObjectZodSchema =
  __makeSchema_AccountCountAggregateInput_schema();

// File: AccountMinAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountMinAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      deletedAt: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
      passwordId: z.literal(true).optional(),
    })
    .strict();
export const AccountMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinAggregateInputType> =
  __makeSchema_AccountMinAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMinAggregateInputType>;
export const AccountMinAggregateInputObjectZodSchema =
  __makeSchema_AccountMinAggregateInput_schema();

// File: AccountMaxAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountMaxAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      deletedAt: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
      passwordId: z.literal(true).optional(),
    })
    .strict();
export const AccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxAggregateInputType> =
  __makeSchema_AccountMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountMaxAggregateInputType>;
export const AccountMaxAggregateInputObjectZodSchema =
  __makeSchema_AccountMaxAggregateInput_schema();

// File: AccountEmailCountAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailCountAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      email: z.literal(true).optional(),
      isPrimary: z.literal(true).optional(),
      accountId: z.literal(true).optional(),
      verificationId: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();
export const AccountEmailCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailCountAggregateInputType> =
  __makeSchema_AccountEmailCountAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailCountAggregateInputType>;
export const AccountEmailCountAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailCountAggregateInput_schema();

// File: AccountEmailMinAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailMinAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      email: z.literal(true).optional(),
      isPrimary: z.literal(true).optional(),
      accountId: z.literal(true).optional(),
      verificationId: z.literal(true).optional(),
    })
    .strict();
export const AccountEmailMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailMinAggregateInputType> =
  __makeSchema_AccountEmailMinAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailMinAggregateInputType>;
export const AccountEmailMinAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailMinAggregateInput_schema();

// File: AccountEmailMaxAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailMaxAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      email: z.literal(true).optional(),
      isPrimary: z.literal(true).optional(),
      accountId: z.literal(true).optional(),
      verificationId: z.literal(true).optional(),
    })
    .strict();
export const AccountEmailMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailMaxAggregateInputType> =
  __makeSchema_AccountEmailMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailMaxAggregateInputType>;
export const AccountEmailMaxAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailMaxAggregateInput_schema();

// File: AccountEmailVerificationCountAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationCountAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();
export const AccountEmailVerificationCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationCountAggregateInputType> =
  __makeSchema_AccountEmailVerificationCountAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationCountAggregateInputType>;
export const AccountEmailVerificationCountAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationCountAggregateInput_schema();

// File: AccountEmailVerificationMinAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationMinAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
    })
    .strict();
export const AccountEmailVerificationMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMinAggregateInputType> =
  __makeSchema_AccountEmailVerificationMinAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMinAggregateInputType>;
export const AccountEmailVerificationMinAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationMinAggregateInput_schema();

// File: AccountEmailVerificationMaxAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationMaxAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
    })
    .strict();
export const AccountEmailVerificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountEmailVerificationMaxAggregateInputType> =
  __makeSchema_AccountEmailVerificationMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationMaxAggregateInputType>;
export const AccountEmailVerificationMaxAggregateInputObjectZodSchema =
  __makeSchema_AccountEmailVerificationMaxAggregateInput_schema();

// File: AccountPasswordCountAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordCountAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      password: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();
export const AccountPasswordCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordCountAggregateInputType> =
  __makeSchema_AccountPasswordCountAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordCountAggregateInputType>;
export const AccountPasswordCountAggregateInputObjectZodSchema =
  __makeSchema_AccountPasswordCountAggregateInput_schema();

// File: AccountPasswordMinAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordMinAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      password: z.literal(true).optional(),
    })
    .strict();
export const AccountPasswordMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMinAggregateInputType> =
  __makeSchema_AccountPasswordMinAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordMinAggregateInputType>;
export const AccountPasswordMinAggregateInputObjectZodSchema =
  __makeSchema_AccountPasswordMinAggregateInput_schema();

// File: AccountPasswordMaxAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordMaxAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
      password: z.literal(true).optional(),
    })
    .strict();
export const AccountPasswordMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountPasswordMaxAggregateInputType> =
  __makeSchema_AccountPasswordMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.AccountPasswordMaxAggregateInputType>;
export const AccountPasswordMaxAggregateInputObjectZodSchema =
  __makeSchema_AccountPasswordMaxAggregateInput_schema();

// File: HealthCountAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthCountAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      status: z.literal(true).optional(),
      lastChecked: z.literal(true).optional(),
      metadata: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();
export const HealthCountAggregateInputObjectSchema: z.ZodType<Prisma.HealthCountAggregateInputType> =
  __makeSchema_HealthCountAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthCountAggregateInputType>;
export const HealthCountAggregateInputObjectZodSchema =
  __makeSchema_HealthCountAggregateInput_schema();

// File: HealthAvgAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthAvgAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
    })
    .strict();
export const HealthAvgAggregateInputObjectSchema: z.ZodType<Prisma.HealthAvgAggregateInputType> =
  __makeSchema_HealthAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthAvgAggregateInputType>;
export const HealthAvgAggregateInputObjectZodSchema =
  __makeSchema_HealthAvgAggregateInput_schema();

// File: HealthSumAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthSumAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
    })
    .strict();
export const HealthSumAggregateInputObjectSchema: z.ZodType<Prisma.HealthSumAggregateInputType> =
  __makeSchema_HealthSumAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthSumAggregateInputType>;
export const HealthSumAggregateInputObjectZodSchema =
  __makeSchema_HealthSumAggregateInput_schema();

// File: HealthMinAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthMinAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      status: z.literal(true).optional(),
      lastChecked: z.literal(true).optional(),
    })
    .strict();
export const HealthMinAggregateInputObjectSchema: z.ZodType<Prisma.HealthMinAggregateInputType> =
  __makeSchema_HealthMinAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthMinAggregateInputType>;
export const HealthMinAggregateInputObjectZodSchema =
  __makeSchema_HealthMinAggregateInput_schema();

// File: HealthMaxAggregateInput.schema.ts

/**
 *
 */
const __makeSchema_HealthMaxAggregateInput_schema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      status: z.literal(true).optional(),
      lastChecked: z.literal(true).optional(),
    })
    .strict();
export const HealthMaxAggregateInputObjectSchema: z.ZodType<Prisma.HealthMaxAggregateInputType> =
  __makeSchema_HealthMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.HealthMaxAggregateInputType>;
export const HealthMaxAggregateInputObjectZodSchema =
  __makeSchema_HealthMaxAggregateInput_schema();

// File: AccountCountOutputTypeSelect.schema.ts

/**
 *
 */
const __makeSchema_AccountCountOutputTypeSelect_schema = () =>
  z
    .object({
      emails: z.boolean().optional(),
    })
    .strict();
export const AccountCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AccountCountOutputTypeSelect> =
  __makeSchema_AccountCountOutputTypeSelect_schema() as unknown as z.ZodType<Prisma.AccountCountOutputTypeSelect>;
export const AccountCountOutputTypeSelectObjectZodSchema =
  __makeSchema_AccountCountOutputTypeSelect_schema();

// File: AccountCountOutputTypeArgs.schema.ts

/**
 *
 */
const __makeSchema_AccountCountOutputTypeArgs_schema = () =>
  z
    .object({
      select: z.lazy(() => AccountCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict();
export const AccountCountOutputTypeArgsObjectSchema =
  __makeSchema_AccountCountOutputTypeArgs_schema();
export const AccountCountOutputTypeArgsObjectZodSchema =
  __makeSchema_AccountCountOutputTypeArgs_schema();

// File: AccountSelect.schema.ts

/**
 *
 */
const __makeSchema_AccountSelect_schema = () =>
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      deletedAt: z.boolean().optional(),
      isActive: z.boolean().optional(),
      emails: z
        .union([z.boolean(), z.lazy(() => AccountEmailFindManySchema)])
        .optional(),
      password: z
        .union([z.boolean(), z.lazy(() => AccountPasswordArgsObjectSchema)])
        .optional(),
      passwordId: z.boolean().optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => AccountCountOutputTypeArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountSelectObjectSchema: z.ZodType<Prisma.AccountSelect> =
  __makeSchema_AccountSelect_schema() as unknown as z.ZodType<Prisma.AccountSelect>;
export const AccountSelectObjectZodSchema = __makeSchema_AccountSelect_schema();

// File: AccountEmailSelect.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailSelect_schema = () =>
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      email: z.boolean().optional(),
      isPrimary: z.boolean().optional(),
      account: z
        .union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)])
        .optional(),
      accountId: z.boolean().optional(),
      verification: z
        .union([
          z.boolean(),
          z.lazy(() => AccountEmailVerificationArgsObjectSchema),
        ])
        .optional(),
      verificationId: z.boolean().optional(),
    })
    .strict();
export const AccountEmailSelectObjectSchema: z.ZodType<Prisma.AccountEmailSelect> =
  __makeSchema_AccountEmailSelect_schema() as unknown as z.ZodType<Prisma.AccountEmailSelect>;
export const AccountEmailSelectObjectZodSchema =
  __makeSchema_AccountEmailSelect_schema();

// File: AccountEmailVerificationSelect.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationSelect_schema = () =>
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      email: z
        .union([z.boolean(), z.lazy(() => AccountEmailArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const AccountEmailVerificationSelectObjectSchema: z.ZodType<Prisma.AccountEmailVerificationSelect> =
  __makeSchema_AccountEmailVerificationSelect_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationSelect>;
export const AccountEmailVerificationSelectObjectZodSchema =
  __makeSchema_AccountEmailVerificationSelect_schema();

// File: AccountPasswordSelect.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordSelect_schema = () =>
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      password: z.boolean().optional(),
      account: z
        .union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const AccountPasswordSelectObjectSchema: z.ZodType<Prisma.AccountPasswordSelect> =
  __makeSchema_AccountPasswordSelect_schema() as unknown as z.ZodType<Prisma.AccountPasswordSelect>;
export const AccountPasswordSelectObjectZodSchema =
  __makeSchema_AccountPasswordSelect_schema();

// File: HealthSelect.schema.ts

/**
 *
 */
const __makeSchema_HealthSelect_schema = () =>
  z
    .object({
      id: z.boolean().optional(),
      status: z.boolean().optional(),
      lastChecked: z.boolean().optional(),
      metadata: z.boolean().optional(),
    })
    .strict();
export const HealthSelectObjectSchema: z.ZodType<Prisma.HealthSelect> =
  __makeSchema_HealthSelect_schema() as unknown as z.ZodType<Prisma.HealthSelect>;
export const HealthSelectObjectZodSchema = __makeSchema_HealthSelect_schema();

// File: AccountArgs.schema.ts

/**
 *
 */
const __makeSchema_AccountArgs_schema = () =>
  z
    .object({
      select: z.lazy(() => AccountSelectObjectSchema).optional(),
      include: z.lazy(() => AccountIncludeObjectSchema).optional(),
    })
    .strict();
export const AccountArgsObjectSchema = __makeSchema_AccountArgs_schema();
export const AccountArgsObjectZodSchema = __makeSchema_AccountArgs_schema();

// File: AccountEmailArgs.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailArgs_schema = () =>
  z
    .object({
      select: z.lazy(() => AccountEmailSelectObjectSchema).optional(),
      include: z.lazy(() => AccountEmailIncludeObjectSchema).optional(),
    })
    .strict();
export const AccountEmailArgsObjectSchema =
  __makeSchema_AccountEmailArgs_schema();
export const AccountEmailArgsObjectZodSchema =
  __makeSchema_AccountEmailArgs_schema();

// File: AccountEmailVerificationArgs.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationArgs_schema = () =>
  z
    .object({
      select: z
        .lazy(() => AccountEmailVerificationSelectObjectSchema)
        .optional(),
      include: z
        .lazy(() => AccountEmailVerificationIncludeObjectSchema)
        .optional(),
    })
    .strict();
export const AccountEmailVerificationArgsObjectSchema =
  __makeSchema_AccountEmailVerificationArgs_schema();
export const AccountEmailVerificationArgsObjectZodSchema =
  __makeSchema_AccountEmailVerificationArgs_schema();

// File: AccountPasswordArgs.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordArgs_schema = () =>
  z
    .object({
      select: z.lazy(() => AccountPasswordSelectObjectSchema).optional(),
      include: z.lazy(() => AccountPasswordIncludeObjectSchema).optional(),
    })
    .strict();
export const AccountPasswordArgsObjectSchema =
  __makeSchema_AccountPasswordArgs_schema();
export const AccountPasswordArgsObjectZodSchema =
  __makeSchema_AccountPasswordArgs_schema();

// File: HealthArgs.schema.ts

/**
 *
 */
const __makeSchema_HealthArgs_schema = () =>
  z
    .object({
      select: z.lazy(() => HealthSelectObjectSchema).optional(),
    })
    .strict();
export const HealthArgsObjectSchema = __makeSchema_HealthArgs_schema();
export const HealthArgsObjectZodSchema = __makeSchema_HealthArgs_schema();

// File: AccountInclude.schema.ts

/**
 *
 */
const __makeSchema_AccountInclude_schema = () =>
  z
    .object({
      emails: z
        .union([z.boolean(), z.lazy(() => AccountEmailFindManySchema)])
        .optional(),
      password: z
        .union([z.boolean(), z.lazy(() => AccountPasswordArgsObjectSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => AccountCountOutputTypeArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountIncludeObjectSchema: z.ZodType<Prisma.AccountInclude> =
  __makeSchema_AccountInclude_schema() as unknown as z.ZodType<Prisma.AccountInclude>;
export const AccountIncludeObjectZodSchema =
  __makeSchema_AccountInclude_schema();

// File: AccountEmailInclude.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailInclude_schema = () =>
  z
    .object({
      account: z
        .union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)])
        .optional(),
      verification: z
        .union([
          z.boolean(),
          z.lazy(() => AccountEmailVerificationArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const AccountEmailIncludeObjectSchema: z.ZodType<Prisma.AccountEmailInclude> =
  __makeSchema_AccountEmailInclude_schema() as unknown as z.ZodType<Prisma.AccountEmailInclude>;
export const AccountEmailIncludeObjectZodSchema =
  __makeSchema_AccountEmailInclude_schema();

// File: AccountEmailVerificationInclude.schema.ts

/**
 *
 */
const __makeSchema_AccountEmailVerificationInclude_schema = () =>
  z
    .object({
      email: z
        .union([z.boolean(), z.lazy(() => AccountEmailArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const AccountEmailVerificationIncludeObjectSchema: z.ZodType<Prisma.AccountEmailVerificationInclude> =
  __makeSchema_AccountEmailVerificationInclude_schema() as unknown as z.ZodType<Prisma.AccountEmailVerificationInclude>;
export const AccountEmailVerificationIncludeObjectZodSchema =
  __makeSchema_AccountEmailVerificationInclude_schema();

// File: AccountPasswordInclude.schema.ts

/**
 *
 */
const __makeSchema_AccountPasswordInclude_schema = () =>
  z
    .object({
      account: z
        .union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const AccountPasswordIncludeObjectSchema: z.ZodType<Prisma.AccountPasswordInclude> =
  __makeSchema_AccountPasswordInclude_schema() as unknown as z.ZodType<Prisma.AccountPasswordInclude>;
export const AccountPasswordIncludeObjectZodSchema =
  __makeSchema_AccountPasswordInclude_schema();

// File: findUniqueAccount.schema.ts

export const AccountFindUniqueSchema: z.ZodType<Prisma.AccountFindUniqueArgs> =
  z
    .object({
      select: AccountSelectObjectSchema.optional(),
      include: AccountIncludeObjectSchema.optional(),
      where: AccountWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountFindUniqueArgs>;

export const AccountFindUniqueZodSchema = z
  .object({
    select: AccountSelectObjectSchema.optional(),
    include: AccountIncludeObjectSchema.optional(),
    where: AccountWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findUniqueOrThrowAccount.schema.ts

export const AccountFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountSelectObjectSchema.optional(),
      include: AccountIncludeObjectSchema.optional(),
      where: AccountWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountFindUniqueOrThrowArgs>;

export const AccountFindUniqueOrThrowZodSchema = z
  .object({
    select: AccountSelectObjectSchema.optional(),
    include: AccountIncludeObjectSchema.optional(),
    where: AccountWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findFirstAccount.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindFirstSelectSchema__findFirstAccount_schema: z.ZodType<Prisma.AccountSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      deletedAt: z.boolean().optional(),
      isActive: z.boolean().optional(),
      emails: z.boolean().optional(),
      password: z.boolean().optional(),
      passwordId: z.boolean().optional(),
      _count: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindFirstSelectZodSchema__findFirstAccount_schema = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    isActive: z.boolean().optional(),
    emails: z.boolean().optional(),
    password: z.boolean().optional(),
    passwordId: z.boolean().optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const AccountFindFirstSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z
  .object({
    select: AccountFindFirstSelectSchema__findFirstAccount_schema.optional(),
    include: z.lazy(() => AccountIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountScalarFieldEnumSchema,
        AccountScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.AccountFindFirstArgs>;

export const AccountFindFirstZodSchema = z
  .object({
    select: AccountFindFirstSelectSchema__findFirstAccount_schema.optional(),
    include: z.lazy(() => AccountIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountScalarFieldEnumSchema,
        AccountScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findFirstOrThrowAccount.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindFirstOrThrowSelectSchema__findFirstOrThrowAccount_schema: z.ZodType<Prisma.AccountSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      deletedAt: z.boolean().optional(),
      isActive: z.boolean().optional(),
      emails: z.boolean().optional(),
      password: z.boolean().optional(),
      passwordId: z.boolean().optional(),
      _count: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindFirstOrThrowSelectZodSchema__findFirstOrThrowAccount_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      deletedAt: z.boolean().optional(),
      isActive: z.boolean().optional(),
      emails: z.boolean().optional(),
      password: z.boolean().optional(),
      passwordId: z.boolean().optional(),
      _count: z.boolean().optional(),
    })
    .strict();

export const AccountFindFirstOrThrowSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> =
  z
    .object({
      select:
        AccountFindFirstOrThrowSelectSchema__findFirstOrThrowAccount_schema.optional(),
      include: z.lazy(() => AccountIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputObjectSchema,
          AccountOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountWhereInputObjectSchema.optional(),
      cursor: AccountWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountFindFirstOrThrowArgs>;

export const AccountFindFirstOrThrowZodSchema = z
  .object({
    select:
      AccountFindFirstOrThrowSelectSchema__findFirstOrThrowAccount_schema.optional(),
    include: z.lazy(() => AccountIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountScalarFieldEnumSchema,
        AccountScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findManyAccount.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindManySelectSchema__findManyAccount_schema: z.ZodType<Prisma.AccountSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      deletedAt: z.boolean().optional(),
      isActive: z.boolean().optional(),
      emails: z.boolean().optional(),
      password: z.boolean().optional(),
      passwordId: z.boolean().optional(),
      _count: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindManySelectZodSchema__findManyAccount_schema = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    isActive: z.boolean().optional(),
    emails: z.boolean().optional(),
    password: z.boolean().optional(),
    passwordId: z.boolean().optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const AccountFindManySchema: z.ZodType<Prisma.AccountFindManyArgs> = z
  .object({
    select: AccountFindManySelectSchema__findManyAccount_schema.optional(),
    include: z.lazy(() => AccountIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountScalarFieldEnumSchema,
        AccountScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.AccountFindManyArgs>;

export const AccountFindManyZodSchema = z
  .object({
    select: AccountFindManySelectSchema__findManyAccount_schema.optional(),
    include: z.lazy(() => AccountIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountScalarFieldEnumSchema,
        AccountScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: countAccount.schema.ts

export const AccountCountSchema: z.ZodType<Prisma.AccountCountArgs> = z
  .object({
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), AccountCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.AccountCountArgs>;

export const AccountCountZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), AccountCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();

// File: createOneAccount.schema.ts

export const AccountCreateOneSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  include: AccountIncludeObjectSchema.optional(),
  data: z.union([
    AccountCreateInputObjectSchema,
    AccountUncheckedCreateInputObjectSchema,
  ]),
});

// File: createManyAccount.schema.ts

export const AccountCreateManySchema = z.object({
  data: z.union([
    AccountCreateManyInputObjectSchema,
    z.array(AccountCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

// File: createManyAndReturnAccount.schema.ts

export const AccountCreateManyAndReturnSchema = z
  .object({
    select: AccountSelectObjectSchema.optional(),
    data: z.union([
      AccountCreateManyInputObjectSchema,
      z.array(AccountCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

// File: deleteOneAccount.schema.ts

export const AccountDeleteOneSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  include: AccountIncludeObjectSchema.optional(),
  where: AccountWhereUniqueInputObjectSchema,
});

// File: deleteManyAccount.schema.ts

export const AccountDeleteManySchema = z.object({
  where: AccountWhereInputObjectSchema.optional(),
});

// File: updateOneAccount.schema.ts

export const AccountUpdateOneSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  include: AccountIncludeObjectSchema.optional(),
  data: z.union([
    AccountUpdateInputObjectSchema,
    AccountUncheckedUpdateInputObjectSchema,
  ]),
  where: AccountWhereUniqueInputObjectSchema,
});

// File: updateManyAccount.schema.ts

export const AccountUpdateManySchema = z.object({
  data: AccountUpdateManyMutationInputObjectSchema,
  where: AccountWhereInputObjectSchema.optional(),
});

// File: updateManyAndReturnAccount.schema.ts

export const AccountUpdateManyAndReturnSchema = z
  .object({
    select: AccountSelectObjectSchema.optional(),
    data: AccountUpdateManyMutationInputObjectSchema,
    where: AccountWhereInputObjectSchema.optional(),
  })
  .strict();

// File: upsertOneAccount.schema.ts

export const AccountUpsertSchema = z.object({
  select: AccountSelectObjectSchema.optional(),
  include: AccountIncludeObjectSchema.optional(),
  where: AccountWhereUniqueInputObjectSchema,
  create: z.union([
    AccountCreateInputObjectSchema,
    AccountUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AccountUpdateInputObjectSchema,
    AccountUncheckedUpdateInputObjectSchema,
  ]),
});

// File: aggregateAccount.schema.ts

export const AccountAggregateSchema: z.ZodType<Prisma.AccountAggregateArgs> = z
  .object({
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), AccountCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountMinAggregateInputObjectSchema.optional(),
    _max: AccountMaxAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.AccountAggregateArgs>;

export const AccountAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountOrderByWithRelationInputObjectSchema,
        AccountOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountWhereInputObjectSchema.optional(),
    cursor: AccountWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), AccountCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountMinAggregateInputObjectSchema.optional(),
    _max: AccountMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: groupByAccount.schema.ts

export const AccountGroupBySchema: z.ZodType<Prisma.AccountGroupByArgs> = z
  .object({
    where: AccountWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AccountOrderByWithAggregationInputObjectSchema,
        AccountOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(AccountScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), AccountCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountMinAggregateInputObjectSchema.optional(),
    _max: AccountMaxAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.AccountGroupByArgs>;

export const AccountGroupByZodSchema = z
  .object({
    where: AccountWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AccountOrderByWithAggregationInputObjectSchema,
        AccountOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(AccountScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), AccountCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountMinAggregateInputObjectSchema.optional(),
    _max: AccountMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: findUniqueAccountEmail.schema.ts

export const AccountEmailFindUniqueSchema: z.ZodType<Prisma.AccountEmailFindUniqueArgs> =
  z
    .object({
      select: AccountEmailSelectObjectSchema.optional(),
      include: AccountEmailIncludeObjectSchema.optional(),
      where: AccountEmailWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailFindUniqueArgs>;

export const AccountEmailFindUniqueZodSchema = z
  .object({
    select: AccountEmailSelectObjectSchema.optional(),
    include: AccountEmailIncludeObjectSchema.optional(),
    where: AccountEmailWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findUniqueOrThrowAccountEmail.schema.ts

export const AccountEmailFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountEmailFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountEmailSelectObjectSchema.optional(),
      include: AccountEmailIncludeObjectSchema.optional(),
      where: AccountEmailWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailFindUniqueOrThrowArgs>;

export const AccountEmailFindUniqueOrThrowZodSchema = z
  .object({
    select: AccountEmailSelectObjectSchema.optional(),
    include: AccountEmailIncludeObjectSchema.optional(),
    where: AccountEmailWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findFirstAccountEmail.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailFindFirstSelectSchema__findFirstAccountEmail_schema: z.ZodType<Prisma.AccountEmailSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      email: z.boolean().optional(),
      isPrimary: z.boolean().optional(),
      account: z.boolean().optional(),
      accountId: z.boolean().optional(),
      verification: z.boolean().optional(),
      verificationId: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailSelect>;

export const AccountEmailFindFirstSelectZodSchema__findFirstAccountEmail_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      email: z.boolean().optional(),
      isPrimary: z.boolean().optional(),
      account: z.boolean().optional(),
      accountId: z.boolean().optional(),
      verification: z.boolean().optional(),
      verificationId: z.boolean().optional(),
    })
    .strict();

export const AccountEmailFindFirstSchema: z.ZodType<Prisma.AccountEmailFindFirstArgs> =
  z
    .object({
      select:
        AccountEmailFindFirstSelectSchema__findFirstAccountEmail_schema.optional(),
      include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          AccountEmailOrderByWithRelationInputObjectSchema,
          AccountEmailOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailWhereInputObjectSchema.optional(),
      cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountEmailScalarFieldEnumSchema,
          AccountEmailScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailFindFirstArgs>;

export const AccountEmailFindFirstZodSchema = z
  .object({
    select:
      AccountEmailFindFirstSelectSchema__findFirstAccountEmail_schema.optional(),
    include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountEmailOrderByWithRelationInputObjectSchema,
        AccountEmailOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailWhereInputObjectSchema.optional(),
    cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountEmailScalarFieldEnumSchema,
        AccountEmailScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findFirstOrThrowAccountEmail.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailFindFirstOrThrowSelectSchema__findFirstOrThrowAccountEmail_schema: z.ZodType<Prisma.AccountEmailSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      email: z.boolean().optional(),
      isPrimary: z.boolean().optional(),
      account: z.boolean().optional(),
      accountId: z.boolean().optional(),
      verification: z.boolean().optional(),
      verificationId: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailSelect>;

export const AccountEmailFindFirstOrThrowSelectZodSchema__findFirstOrThrowAccountEmail_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      email: z.boolean().optional(),
      isPrimary: z.boolean().optional(),
      account: z.boolean().optional(),
      accountId: z.boolean().optional(),
      verification: z.boolean().optional(),
      verificationId: z.boolean().optional(),
    })
    .strict();

export const AccountEmailFindFirstOrThrowSchema: z.ZodType<Prisma.AccountEmailFindFirstOrThrowArgs> =
  z
    .object({
      select:
        AccountEmailFindFirstOrThrowSelectSchema__findFirstOrThrowAccountEmail_schema.optional(),
      include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          AccountEmailOrderByWithRelationInputObjectSchema,
          AccountEmailOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailWhereInputObjectSchema.optional(),
      cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountEmailScalarFieldEnumSchema,
          AccountEmailScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailFindFirstOrThrowArgs>;

export const AccountEmailFindFirstOrThrowZodSchema = z
  .object({
    select:
      AccountEmailFindFirstOrThrowSelectSchema__findFirstOrThrowAccountEmail_schema.optional(),
    include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountEmailOrderByWithRelationInputObjectSchema,
        AccountEmailOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailWhereInputObjectSchema.optional(),
    cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountEmailScalarFieldEnumSchema,
        AccountEmailScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findManyAccountEmail.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailFindManySelectSchema__findManyAccountEmail_schema: z.ZodType<Prisma.AccountEmailSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      email: z.boolean().optional(),
      isPrimary: z.boolean().optional(),
      account: z.boolean().optional(),
      accountId: z.boolean().optional(),
      verification: z.boolean().optional(),
      verificationId: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailSelect>;

export const AccountEmailFindManySelectZodSchema__findManyAccountEmail_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      email: z.boolean().optional(),
      isPrimary: z.boolean().optional(),
      account: z.boolean().optional(),
      accountId: z.boolean().optional(),
      verification: z.boolean().optional(),
      verificationId: z.boolean().optional(),
    })
    .strict();

export const AccountEmailFindManySchema: z.ZodType<Prisma.AccountEmailFindManyArgs> =
  z
    .object({
      select:
        AccountEmailFindManySelectSchema__findManyAccountEmail_schema.optional(),
      include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          AccountEmailOrderByWithRelationInputObjectSchema,
          AccountEmailOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailWhereInputObjectSchema.optional(),
      cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountEmailScalarFieldEnumSchema,
          AccountEmailScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailFindManyArgs>;

export const AccountEmailFindManyZodSchema = z
  .object({
    select:
      AccountEmailFindManySelectSchema__findManyAccountEmail_schema.optional(),
    include: z.lazy(() => AccountEmailIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountEmailOrderByWithRelationInputObjectSchema,
        AccountEmailOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailWhereInputObjectSchema.optional(),
    cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountEmailScalarFieldEnumSchema,
        AccountEmailScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: countAccountEmail.schema.ts

export const AccountEmailCountSchema: z.ZodType<Prisma.AccountEmailCountArgs> =
  z
    .object({
      orderBy: z
        .union([
          AccountEmailOrderByWithRelationInputObjectSchema,
          AccountEmailOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailWhereInputObjectSchema.optional(),
      cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      select: z
        .union([z.literal(true), AccountEmailCountAggregateInputObjectSchema])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailCountArgs>;

export const AccountEmailCountZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountEmailOrderByWithRelationInputObjectSchema,
        AccountEmailOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailWhereInputObjectSchema.optional(),
    cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), AccountEmailCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();

// File: createOneAccountEmail.schema.ts

export const AccountEmailCreateOneSchema = z.object({
  select: AccountEmailSelectObjectSchema.optional(),
  include: AccountEmailIncludeObjectSchema.optional(),
  data: z.union([
    AccountEmailCreateInputObjectSchema,
    AccountEmailUncheckedCreateInputObjectSchema,
  ]),
});

// File: createManyAccountEmail.schema.ts

export const AccountEmailCreateManySchema = z.object({
  data: z.union([
    AccountEmailCreateManyInputObjectSchema,
    z.array(AccountEmailCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

// File: createManyAndReturnAccountEmail.schema.ts

export const AccountEmailCreateManyAndReturnSchema = z
  .object({
    select: AccountEmailSelectObjectSchema.optional(),
    data: z.union([
      AccountEmailCreateManyInputObjectSchema,
      z.array(AccountEmailCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

// File: deleteOneAccountEmail.schema.ts

export const AccountEmailDeleteOneSchema = z.object({
  select: AccountEmailSelectObjectSchema.optional(),
  include: AccountEmailIncludeObjectSchema.optional(),
  where: AccountEmailWhereUniqueInputObjectSchema,
});

// File: deleteManyAccountEmail.schema.ts

export const AccountEmailDeleteManySchema = z.object({
  where: AccountEmailWhereInputObjectSchema.optional(),
});

// File: updateOneAccountEmail.schema.ts

export const AccountEmailUpdateOneSchema = z.object({
  select: AccountEmailSelectObjectSchema.optional(),
  include: AccountEmailIncludeObjectSchema.optional(),
  data: z.union([
    AccountEmailUpdateInputObjectSchema,
    AccountEmailUncheckedUpdateInputObjectSchema,
  ]),
  where: AccountEmailWhereUniqueInputObjectSchema,
});

// File: updateManyAccountEmail.schema.ts

export const AccountEmailUpdateManySchema = z.object({
  data: AccountEmailUpdateManyMutationInputObjectSchema,
  where: AccountEmailWhereInputObjectSchema.optional(),
});

// File: updateManyAndReturnAccountEmail.schema.ts

export const AccountEmailUpdateManyAndReturnSchema = z
  .object({
    select: AccountEmailSelectObjectSchema.optional(),
    data: AccountEmailUpdateManyMutationInputObjectSchema,
    where: AccountEmailWhereInputObjectSchema.optional(),
  })
  .strict();

// File: upsertOneAccountEmail.schema.ts

export const AccountEmailUpsertSchema = z.object({
  select: AccountEmailSelectObjectSchema.optional(),
  include: AccountEmailIncludeObjectSchema.optional(),
  where: AccountEmailWhereUniqueInputObjectSchema,
  create: z.union([
    AccountEmailCreateInputObjectSchema,
    AccountEmailUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AccountEmailUpdateInputObjectSchema,
    AccountEmailUncheckedUpdateInputObjectSchema,
  ]),
});

// File: aggregateAccountEmail.schema.ts

export const AccountEmailAggregateSchema: z.ZodType<Prisma.AccountEmailAggregateArgs> =
  z
    .object({
      orderBy: z
        .union([
          AccountEmailOrderByWithRelationInputObjectSchema,
          AccountEmailOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailWhereInputObjectSchema.optional(),
      cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([z.literal(true), AccountEmailCountAggregateInputObjectSchema])
        .optional(),
      _min: AccountEmailMinAggregateInputObjectSchema.optional(),
      _max: AccountEmailMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailAggregateArgs>;

export const AccountEmailAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountEmailOrderByWithRelationInputObjectSchema,
        AccountEmailOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailWhereInputObjectSchema.optional(),
    cursor: AccountEmailWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), AccountEmailCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountEmailMinAggregateInputObjectSchema.optional(),
    _max: AccountEmailMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: groupByAccountEmail.schema.ts

export const AccountEmailGroupBySchema: z.ZodType<Prisma.AccountEmailGroupByArgs> =
  z
    .object({
      where: AccountEmailWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          AccountEmailOrderByWithAggregationInputObjectSchema,
          AccountEmailOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having: AccountEmailScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(AccountEmailScalarFieldEnumSchema),
      _count: z
        .union([z.literal(true), AccountEmailCountAggregateInputObjectSchema])
        .optional(),
      _min: AccountEmailMinAggregateInputObjectSchema.optional(),
      _max: AccountEmailMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailGroupByArgs>;

export const AccountEmailGroupByZodSchema = z
  .object({
    where: AccountEmailWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AccountEmailOrderByWithAggregationInputObjectSchema,
        AccountEmailOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: AccountEmailScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(AccountEmailScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), AccountEmailCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountEmailMinAggregateInputObjectSchema.optional(),
    _max: AccountEmailMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: findUniqueAccountEmailVerification.schema.ts

export const AccountEmailVerificationFindUniqueSchema: z.ZodType<Prisma.AccountEmailVerificationFindUniqueArgs> =
  z
    .object({
      select: AccountEmailVerificationSelectObjectSchema.optional(),
      include: AccountEmailVerificationIncludeObjectSchema.optional(),
      where: AccountEmailVerificationWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationFindUniqueArgs>;

export const AccountEmailVerificationFindUniqueZodSchema = z
  .object({
    select: AccountEmailVerificationSelectObjectSchema.optional(),
    include: AccountEmailVerificationIncludeObjectSchema.optional(),
    where: AccountEmailVerificationWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findUniqueOrThrowAccountEmailVerification.schema.ts

export const AccountEmailVerificationFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountEmailVerificationFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountEmailVerificationSelectObjectSchema.optional(),
      include: AccountEmailVerificationIncludeObjectSchema.optional(),
      where: AccountEmailVerificationWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationFindUniqueOrThrowArgs>;

export const AccountEmailVerificationFindUniqueOrThrowZodSchema = z
  .object({
    select: AccountEmailVerificationSelectObjectSchema.optional(),
    include: AccountEmailVerificationIncludeObjectSchema.optional(),
    where: AccountEmailVerificationWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findFirstAccountEmailVerification.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailVerificationFindFirstSelectSchema__findFirstAccountEmailVerification_schema: z.ZodType<Prisma.AccountEmailVerificationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      email: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationSelect>;

export const AccountEmailVerificationFindFirstSelectZodSchema__findFirstAccountEmailVerification_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      email: z.boolean().optional(),
    })
    .strict();

export const AccountEmailVerificationFindFirstSchema: z.ZodType<Prisma.AccountEmailVerificationFindFirstArgs> =
  z
    .object({
      select:
        AccountEmailVerificationFindFirstSelectSchema__findFirstAccountEmailVerification_schema.optional(),
      include: z.lazy(() =>
        AccountEmailVerificationIncludeObjectSchema.optional()
      ),
      orderBy: z
        .union([
          AccountEmailVerificationOrderByWithRelationInputObjectSchema,
          AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailVerificationWhereInputObjectSchema.optional(),
      cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountEmailVerificationScalarFieldEnumSchema,
          AccountEmailVerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationFindFirstArgs>;

export const AccountEmailVerificationFindFirstZodSchema = z
  .object({
    select:
      AccountEmailVerificationFindFirstSelectSchema__findFirstAccountEmailVerification_schema.optional(),
    include: z.lazy(() =>
      AccountEmailVerificationIncludeObjectSchema.optional()
    ),
    orderBy: z
      .union([
        AccountEmailVerificationOrderByWithRelationInputObjectSchema,
        AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailVerificationWhereInputObjectSchema.optional(),
    cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountEmailVerificationScalarFieldEnumSchema,
        AccountEmailVerificationScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findFirstOrThrowAccountEmailVerification.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailVerificationFindFirstOrThrowSelectSchema__findFirstOrThrowAccountEmailVerification_schema: z.ZodType<Prisma.AccountEmailVerificationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      email: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationSelect>;

export const AccountEmailVerificationFindFirstOrThrowSelectZodSchema__findFirstOrThrowAccountEmailVerification_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      email: z.boolean().optional(),
    })
    .strict();

export const AccountEmailVerificationFindFirstOrThrowSchema: z.ZodType<Prisma.AccountEmailVerificationFindFirstOrThrowArgs> =
  z
    .object({
      select:
        AccountEmailVerificationFindFirstOrThrowSelectSchema__findFirstOrThrowAccountEmailVerification_schema.optional(),
      include: z.lazy(() =>
        AccountEmailVerificationIncludeObjectSchema.optional()
      ),
      orderBy: z
        .union([
          AccountEmailVerificationOrderByWithRelationInputObjectSchema,
          AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailVerificationWhereInputObjectSchema.optional(),
      cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountEmailVerificationScalarFieldEnumSchema,
          AccountEmailVerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationFindFirstOrThrowArgs>;

export const AccountEmailVerificationFindFirstOrThrowZodSchema = z
  .object({
    select:
      AccountEmailVerificationFindFirstOrThrowSelectSchema__findFirstOrThrowAccountEmailVerification_schema.optional(),
    include: z.lazy(() =>
      AccountEmailVerificationIncludeObjectSchema.optional()
    ),
    orderBy: z
      .union([
        AccountEmailVerificationOrderByWithRelationInputObjectSchema,
        AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailVerificationWhereInputObjectSchema.optional(),
    cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountEmailVerificationScalarFieldEnumSchema,
        AccountEmailVerificationScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findManyAccountEmailVerification.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountEmailVerificationFindManySelectSchema__findManyAccountEmailVerification_schema: z.ZodType<Prisma.AccountEmailVerificationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      email: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationSelect>;

export const AccountEmailVerificationFindManySelectZodSchema__findManyAccountEmailVerification_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      email: z.boolean().optional(),
    })
    .strict();

export const AccountEmailVerificationFindManySchema: z.ZodType<Prisma.AccountEmailVerificationFindManyArgs> =
  z
    .object({
      select:
        AccountEmailVerificationFindManySelectSchema__findManyAccountEmailVerification_schema.optional(),
      include: z.lazy(() =>
        AccountEmailVerificationIncludeObjectSchema.optional()
      ),
      orderBy: z
        .union([
          AccountEmailVerificationOrderByWithRelationInputObjectSchema,
          AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailVerificationWhereInputObjectSchema.optional(),
      cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountEmailVerificationScalarFieldEnumSchema,
          AccountEmailVerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationFindManyArgs>;

export const AccountEmailVerificationFindManyZodSchema = z
  .object({
    select:
      AccountEmailVerificationFindManySelectSchema__findManyAccountEmailVerification_schema.optional(),
    include: z.lazy(() =>
      AccountEmailVerificationIncludeObjectSchema.optional()
    ),
    orderBy: z
      .union([
        AccountEmailVerificationOrderByWithRelationInputObjectSchema,
        AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailVerificationWhereInputObjectSchema.optional(),
    cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountEmailVerificationScalarFieldEnumSchema,
        AccountEmailVerificationScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: countAccountEmailVerification.schema.ts

export const AccountEmailVerificationCountSchema: z.ZodType<Prisma.AccountEmailVerificationCountArgs> =
  z
    .object({
      orderBy: z
        .union([
          AccountEmailVerificationOrderByWithRelationInputObjectSchema,
          AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailVerificationWhereInputObjectSchema.optional(),
      cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      select: z
        .union([
          z.literal(true),
          AccountEmailVerificationCountAggregateInputObjectSchema,
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationCountArgs>;

export const AccountEmailVerificationCountZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountEmailVerificationOrderByWithRelationInputObjectSchema,
        AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailVerificationWhereInputObjectSchema.optional(),
    cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([
        z.literal(true),
        AccountEmailVerificationCountAggregateInputObjectSchema,
      ])
      .optional(),
  })
  .strict();

// File: createOneAccountEmailVerification.schema.ts

export const AccountEmailVerificationCreateOneSchema = z.object({
  select: AccountEmailVerificationSelectObjectSchema.optional(),
  include: AccountEmailVerificationIncludeObjectSchema.optional(),
  data: z.union([
    AccountEmailVerificationCreateInputObjectSchema,
    AccountEmailVerificationUncheckedCreateInputObjectSchema,
  ]),
});

// File: createManyAccountEmailVerification.schema.ts

export const AccountEmailVerificationCreateManySchema = z.object({
  data: z.union([
    AccountEmailVerificationCreateManyInputObjectSchema,
    z.array(AccountEmailVerificationCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

// File: createManyAndReturnAccountEmailVerification.schema.ts

export const AccountEmailVerificationCreateManyAndReturnSchema = z
  .object({
    select: AccountEmailVerificationSelectObjectSchema.optional(),
    data: z.union([
      AccountEmailVerificationCreateManyInputObjectSchema,
      z.array(AccountEmailVerificationCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

// File: deleteOneAccountEmailVerification.schema.ts

export const AccountEmailVerificationDeleteOneSchema = z.object({
  select: AccountEmailVerificationSelectObjectSchema.optional(),
  include: AccountEmailVerificationIncludeObjectSchema.optional(),
  where: AccountEmailVerificationWhereUniqueInputObjectSchema,
});

// File: deleteManyAccountEmailVerification.schema.ts

export const AccountEmailVerificationDeleteManySchema = z.object({
  where: AccountEmailVerificationWhereInputObjectSchema.optional(),
});

// File: updateOneAccountEmailVerification.schema.ts

export const AccountEmailVerificationUpdateOneSchema = z.object({
  select: AccountEmailVerificationSelectObjectSchema.optional(),
  include: AccountEmailVerificationIncludeObjectSchema.optional(),
  data: z.union([
    AccountEmailVerificationUpdateInputObjectSchema,
    AccountEmailVerificationUncheckedUpdateInputObjectSchema,
  ]),
  where: AccountEmailVerificationWhereUniqueInputObjectSchema,
});

// File: updateManyAccountEmailVerification.schema.ts

export const AccountEmailVerificationUpdateManySchema = z.object({
  data: AccountEmailVerificationUpdateManyMutationInputObjectSchema,
  where: AccountEmailVerificationWhereInputObjectSchema.optional(),
});

// File: updateManyAndReturnAccountEmailVerification.schema.ts

export const AccountEmailVerificationUpdateManyAndReturnSchema = z
  .object({
    select: AccountEmailVerificationSelectObjectSchema.optional(),
    data: AccountEmailVerificationUpdateManyMutationInputObjectSchema,
    where: AccountEmailVerificationWhereInputObjectSchema.optional(),
  })
  .strict();

// File: upsertOneAccountEmailVerification.schema.ts

export const AccountEmailVerificationUpsertSchema = z.object({
  select: AccountEmailVerificationSelectObjectSchema.optional(),
  include: AccountEmailVerificationIncludeObjectSchema.optional(),
  where: AccountEmailVerificationWhereUniqueInputObjectSchema,
  create: z.union([
    AccountEmailVerificationCreateInputObjectSchema,
    AccountEmailVerificationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AccountEmailVerificationUpdateInputObjectSchema,
    AccountEmailVerificationUncheckedUpdateInputObjectSchema,
  ]),
});

// File: aggregateAccountEmailVerification.schema.ts

export const AccountEmailVerificationAggregateSchema: z.ZodType<Prisma.AccountEmailVerificationAggregateArgs> =
  z
    .object({
      orderBy: z
        .union([
          AccountEmailVerificationOrderByWithRelationInputObjectSchema,
          AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountEmailVerificationWhereInputObjectSchema.optional(),
      cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([
          z.literal(true),
          AccountEmailVerificationCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: AccountEmailVerificationMinAggregateInputObjectSchema.optional(),
      _max: AccountEmailVerificationMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationAggregateArgs>;

export const AccountEmailVerificationAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountEmailVerificationOrderByWithRelationInputObjectSchema,
        AccountEmailVerificationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountEmailVerificationWhereInputObjectSchema.optional(),
    cursor: AccountEmailVerificationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([
        z.literal(true),
        AccountEmailVerificationCountAggregateInputObjectSchema,
      ])
      .optional(),
    _min: AccountEmailVerificationMinAggregateInputObjectSchema.optional(),
    _max: AccountEmailVerificationMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: groupByAccountEmailVerification.schema.ts

export const AccountEmailVerificationGroupBySchema: z.ZodType<Prisma.AccountEmailVerificationGroupByArgs> =
  z
    .object({
      where: AccountEmailVerificationWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          AccountEmailVerificationOrderByWithAggregationInputObjectSchema,
          AccountEmailVerificationOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having:
        AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(AccountEmailVerificationScalarFieldEnumSchema),
      _count: z
        .union([
          z.literal(true),
          AccountEmailVerificationCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: AccountEmailVerificationMinAggregateInputObjectSchema.optional(),
      _max: AccountEmailVerificationMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountEmailVerificationGroupByArgs>;

export const AccountEmailVerificationGroupByZodSchema = z
  .object({
    where: AccountEmailVerificationWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AccountEmailVerificationOrderByWithAggregationInputObjectSchema,
        AccountEmailVerificationOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having:
      AccountEmailVerificationScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(AccountEmailVerificationScalarFieldEnumSchema),
    _count: z
      .union([
        z.literal(true),
        AccountEmailVerificationCountAggregateInputObjectSchema,
      ])
      .optional(),
    _min: AccountEmailVerificationMinAggregateInputObjectSchema.optional(),
    _max: AccountEmailVerificationMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: findUniqueAccountPassword.schema.ts

export const AccountPasswordFindUniqueSchema: z.ZodType<Prisma.AccountPasswordFindUniqueArgs> =
  z
    .object({
      select: AccountPasswordSelectObjectSchema.optional(),
      include: AccountPasswordIncludeObjectSchema.optional(),
      where: AccountPasswordWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordFindUniqueArgs>;

export const AccountPasswordFindUniqueZodSchema = z
  .object({
    select: AccountPasswordSelectObjectSchema.optional(),
    include: AccountPasswordIncludeObjectSchema.optional(),
    where: AccountPasswordWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findUniqueOrThrowAccountPassword.schema.ts

export const AccountPasswordFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountPasswordFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountPasswordSelectObjectSchema.optional(),
      include: AccountPasswordIncludeObjectSchema.optional(),
      where: AccountPasswordWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordFindUniqueOrThrowArgs>;

export const AccountPasswordFindUniqueOrThrowZodSchema = z
  .object({
    select: AccountPasswordSelectObjectSchema.optional(),
    include: AccountPasswordIncludeObjectSchema.optional(),
    where: AccountPasswordWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findFirstAccountPassword.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountPasswordFindFirstSelectSchema__findFirstAccountPassword_schema: z.ZodType<Prisma.AccountPasswordSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      password: z.boolean().optional(),
      account: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordSelect>;

export const AccountPasswordFindFirstSelectZodSchema__findFirstAccountPassword_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      password: z.boolean().optional(),
      account: z.boolean().optional(),
    })
    .strict();

export const AccountPasswordFindFirstSchema: z.ZodType<Prisma.AccountPasswordFindFirstArgs> =
  z
    .object({
      select:
        AccountPasswordFindFirstSelectSchema__findFirstAccountPassword_schema.optional(),
      include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          AccountPasswordOrderByWithRelationInputObjectSchema,
          AccountPasswordOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountPasswordWhereInputObjectSchema.optional(),
      cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountPasswordScalarFieldEnumSchema,
          AccountPasswordScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordFindFirstArgs>;

export const AccountPasswordFindFirstZodSchema = z
  .object({
    select:
      AccountPasswordFindFirstSelectSchema__findFirstAccountPassword_schema.optional(),
    include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountPasswordOrderByWithRelationInputObjectSchema,
        AccountPasswordOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountPasswordWhereInputObjectSchema.optional(),
    cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountPasswordScalarFieldEnumSchema,
        AccountPasswordScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findFirstOrThrowAccountPassword.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountPasswordFindFirstOrThrowSelectSchema__findFirstOrThrowAccountPassword_schema: z.ZodType<Prisma.AccountPasswordSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      password: z.boolean().optional(),
      account: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordSelect>;

export const AccountPasswordFindFirstOrThrowSelectZodSchema__findFirstOrThrowAccountPassword_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      password: z.boolean().optional(),
      account: z.boolean().optional(),
    })
    .strict();

export const AccountPasswordFindFirstOrThrowSchema: z.ZodType<Prisma.AccountPasswordFindFirstOrThrowArgs> =
  z
    .object({
      select:
        AccountPasswordFindFirstOrThrowSelectSchema__findFirstOrThrowAccountPassword_schema.optional(),
      include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          AccountPasswordOrderByWithRelationInputObjectSchema,
          AccountPasswordOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountPasswordWhereInputObjectSchema.optional(),
      cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountPasswordScalarFieldEnumSchema,
          AccountPasswordScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordFindFirstOrThrowArgs>;

export const AccountPasswordFindFirstOrThrowZodSchema = z
  .object({
    select:
      AccountPasswordFindFirstOrThrowSelectSchema__findFirstOrThrowAccountPassword_schema.optional(),
    include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountPasswordOrderByWithRelationInputObjectSchema,
        AccountPasswordOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountPasswordWhereInputObjectSchema.optional(),
    cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountPasswordScalarFieldEnumSchema,
        AccountPasswordScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: findManyAccountPassword.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountPasswordFindManySelectSchema__findManyAccountPassword_schema: z.ZodType<Prisma.AccountPasswordSelect> =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      password: z.boolean().optional(),
      account: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordSelect>;

export const AccountPasswordFindManySelectZodSchema__findManyAccountPassword_schema =
  z
    .object({
      id: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      password: z.boolean().optional(),
      account: z.boolean().optional(),
    })
    .strict();

export const AccountPasswordFindManySchema: z.ZodType<Prisma.AccountPasswordFindManyArgs> =
  z
    .object({
      select:
        AccountPasswordFindManySelectSchema__findManyAccountPassword_schema.optional(),
      include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          AccountPasswordOrderByWithRelationInputObjectSchema,
          AccountPasswordOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountPasswordWhereInputObjectSchema.optional(),
      cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountPasswordScalarFieldEnumSchema,
          AccountPasswordScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordFindManyArgs>;

export const AccountPasswordFindManyZodSchema = z
  .object({
    select:
      AccountPasswordFindManySelectSchema__findManyAccountPassword_schema.optional(),
    include: z.lazy(() => AccountPasswordIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        AccountPasswordOrderByWithRelationInputObjectSchema,
        AccountPasswordOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountPasswordWhereInputObjectSchema.optional(),
    cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        AccountPasswordScalarFieldEnumSchema,
        AccountPasswordScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();

// File: countAccountPassword.schema.ts

export const AccountPasswordCountSchema: z.ZodType<Prisma.AccountPasswordCountArgs> =
  z
    .object({
      orderBy: z
        .union([
          AccountPasswordOrderByWithRelationInputObjectSchema,
          AccountPasswordOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountPasswordWhereInputObjectSchema.optional(),
      cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      select: z
        .union([
          z.literal(true),
          AccountPasswordCountAggregateInputObjectSchema,
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordCountArgs>;

export const AccountPasswordCountZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountPasswordOrderByWithRelationInputObjectSchema,
        AccountPasswordOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountPasswordWhereInputObjectSchema.optional(),
    cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), AccountPasswordCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();

// File: createOneAccountPassword.schema.ts

export const AccountPasswordCreateOneSchema = z.object({
  select: AccountPasswordSelectObjectSchema.optional(),
  include: AccountPasswordIncludeObjectSchema.optional(),
  data: z.union([
    AccountPasswordCreateInputObjectSchema,
    AccountPasswordUncheckedCreateInputObjectSchema,
  ]),
});

// File: createManyAccountPassword.schema.ts

export const AccountPasswordCreateManySchema = z.object({
  data: z.union([
    AccountPasswordCreateManyInputObjectSchema,
    z.array(AccountPasswordCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

// File: createManyAndReturnAccountPassword.schema.ts

export const AccountPasswordCreateManyAndReturnSchema = z
  .object({
    select: AccountPasswordSelectObjectSchema.optional(),
    data: z.union([
      AccountPasswordCreateManyInputObjectSchema,
      z.array(AccountPasswordCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

// File: deleteOneAccountPassword.schema.ts

export const AccountPasswordDeleteOneSchema = z.object({
  select: AccountPasswordSelectObjectSchema.optional(),
  include: AccountPasswordIncludeObjectSchema.optional(),
  where: AccountPasswordWhereUniqueInputObjectSchema,
});

// File: deleteManyAccountPassword.schema.ts

export const AccountPasswordDeleteManySchema = z.object({
  where: AccountPasswordWhereInputObjectSchema.optional(),
});

// File: updateOneAccountPassword.schema.ts

export const AccountPasswordUpdateOneSchema = z.object({
  select: AccountPasswordSelectObjectSchema.optional(),
  include: AccountPasswordIncludeObjectSchema.optional(),
  data: z.union([
    AccountPasswordUpdateInputObjectSchema,
    AccountPasswordUncheckedUpdateInputObjectSchema,
  ]),
  where: AccountPasswordWhereUniqueInputObjectSchema,
});

// File: updateManyAccountPassword.schema.ts

export const AccountPasswordUpdateManySchema = z.object({
  data: AccountPasswordUpdateManyMutationInputObjectSchema,
  where: AccountPasswordWhereInputObjectSchema.optional(),
});

// File: updateManyAndReturnAccountPassword.schema.ts

export const AccountPasswordUpdateManyAndReturnSchema = z
  .object({
    select: AccountPasswordSelectObjectSchema.optional(),
    data: AccountPasswordUpdateManyMutationInputObjectSchema,
    where: AccountPasswordWhereInputObjectSchema.optional(),
  })
  .strict();

// File: upsertOneAccountPassword.schema.ts

export const AccountPasswordUpsertSchema = z.object({
  select: AccountPasswordSelectObjectSchema.optional(),
  include: AccountPasswordIncludeObjectSchema.optional(),
  where: AccountPasswordWhereUniqueInputObjectSchema,
  create: z.union([
    AccountPasswordCreateInputObjectSchema,
    AccountPasswordUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AccountPasswordUpdateInputObjectSchema,
    AccountPasswordUncheckedUpdateInputObjectSchema,
  ]),
});

// File: aggregateAccountPassword.schema.ts

export const AccountPasswordAggregateSchema: z.ZodType<Prisma.AccountPasswordAggregateArgs> =
  z
    .object({
      orderBy: z
        .union([
          AccountPasswordOrderByWithRelationInputObjectSchema,
          AccountPasswordOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: AccountPasswordWhereInputObjectSchema.optional(),
      cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([
          z.literal(true),
          AccountPasswordCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: AccountPasswordMinAggregateInputObjectSchema.optional(),
      _max: AccountPasswordMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordAggregateArgs>;

export const AccountPasswordAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        AccountPasswordOrderByWithRelationInputObjectSchema,
        AccountPasswordOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: AccountPasswordWhereInputObjectSchema.optional(),
    cursor: AccountPasswordWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), AccountPasswordCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountPasswordMinAggregateInputObjectSchema.optional(),
    _max: AccountPasswordMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: groupByAccountPassword.schema.ts

export const AccountPasswordGroupBySchema: z.ZodType<Prisma.AccountPasswordGroupByArgs> =
  z
    .object({
      where: AccountPasswordWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          AccountPasswordOrderByWithAggregationInputObjectSchema,
          AccountPasswordOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having:
        AccountPasswordScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(AccountPasswordScalarFieldEnumSchema),
      _count: z
        .union([
          z.literal(true),
          AccountPasswordCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: AccountPasswordMinAggregateInputObjectSchema.optional(),
      _max: AccountPasswordMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.AccountPasswordGroupByArgs>;

export const AccountPasswordGroupByZodSchema = z
  .object({
    where: AccountPasswordWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AccountPasswordOrderByWithAggregationInputObjectSchema,
        AccountPasswordOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having:
      AccountPasswordScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(AccountPasswordScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), AccountPasswordCountAggregateInputObjectSchema])
      .optional(),
    _min: AccountPasswordMinAggregateInputObjectSchema.optional(),
    _max: AccountPasswordMaxAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: findUniqueHealth.schema.ts

export const HealthFindUniqueSchema: z.ZodType<Prisma.HealthFindUniqueArgs> = z
  .object({
    select: HealthSelectObjectSchema.optional(),
    where: HealthWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.HealthFindUniqueArgs>;

export const HealthFindUniqueZodSchema = z
  .object({
    select: HealthSelectObjectSchema.optional(),
    where: HealthWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findUniqueOrThrowHealth.schema.ts

export const HealthFindUniqueOrThrowSchema: z.ZodType<Prisma.HealthFindUniqueOrThrowArgs> =
  z
    .object({
      select: HealthSelectObjectSchema.optional(),
      where: HealthWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.HealthFindUniqueOrThrowArgs>;

export const HealthFindUniqueOrThrowZodSchema = z
  .object({
    select: HealthSelectObjectSchema.optional(),
    where: HealthWhereUniqueInputObjectSchema,
  })
  .strict();

// File: findFirstHealth.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HealthFindFirstSelectSchema__findFirstHealth_schema: z.ZodType<Prisma.HealthSelect> =
  z
    .object({
      id: z.boolean().optional(),
      status: z.boolean().optional(),
      lastChecked: z.boolean().optional(),
      metadata: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.HealthSelect>;

export const HealthFindFirstSelectZodSchema__findFirstHealth_schema = z
  .object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    lastChecked: z.boolean().optional(),
    metadata: z.boolean().optional(),
  })
  .strict();

export const HealthFindFirstSchema: z.ZodType<Prisma.HealthFindFirstArgs> = z
  .object({
    select: HealthFindFirstSelectSchema__findFirstHealth_schema.optional(),
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([HealthScalarFieldEnumSchema, HealthScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.HealthFindFirstArgs>;

export const HealthFindFirstZodSchema = z
  .object({
    select: HealthFindFirstSelectSchema__findFirstHealth_schema.optional(),
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([HealthScalarFieldEnumSchema, HealthScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

// File: findFirstOrThrowHealth.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HealthFindFirstOrThrowSelectSchema__findFirstOrThrowHealth_schema: z.ZodType<Prisma.HealthSelect> =
  z
    .object({
      id: z.boolean().optional(),
      status: z.boolean().optional(),
      lastChecked: z.boolean().optional(),
      metadata: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.HealthSelect>;

export const HealthFindFirstOrThrowSelectZodSchema__findFirstOrThrowHealth_schema =
  z
    .object({
      id: z.boolean().optional(),
      status: z.boolean().optional(),
      lastChecked: z.boolean().optional(),
      metadata: z.boolean().optional(),
    })
    .strict();

export const HealthFindFirstOrThrowSchema: z.ZodType<Prisma.HealthFindFirstOrThrowArgs> =
  z
    .object({
      select:
        HealthFindFirstOrThrowSelectSchema__findFirstOrThrowHealth_schema.optional(),
      orderBy: z
        .union([
          HealthOrderByWithRelationInputObjectSchema,
          HealthOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: HealthWhereInputObjectSchema.optional(),
      cursor: HealthWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          HealthScalarFieldEnumSchema,
          HealthScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.HealthFindFirstOrThrowArgs>;

export const HealthFindFirstOrThrowZodSchema = z
  .object({
    select:
      HealthFindFirstOrThrowSelectSchema__findFirstOrThrowHealth_schema.optional(),
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([HealthScalarFieldEnumSchema, HealthScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

// File: findManyHealth.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HealthFindManySelectSchema__findManyHealth_schema: z.ZodType<Prisma.HealthSelect> =
  z
    .object({
      id: z.boolean().optional(),
      status: z.boolean().optional(),
      lastChecked: z.boolean().optional(),
      metadata: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.HealthSelect>;

export const HealthFindManySelectZodSchema__findManyHealth_schema = z
  .object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    lastChecked: z.boolean().optional(),
    metadata: z.boolean().optional(),
  })
  .strict();

export const HealthFindManySchema: z.ZodType<Prisma.HealthFindManyArgs> = z
  .object({
    select: HealthFindManySelectSchema__findManyHealth_schema.optional(),
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([HealthScalarFieldEnumSchema, HealthScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.HealthFindManyArgs>;

export const HealthFindManyZodSchema = z
  .object({
    select: HealthFindManySelectSchema__findManyHealth_schema.optional(),
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([HealthScalarFieldEnumSchema, HealthScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

// File: countHealth.schema.ts

export const HealthCountSchema: z.ZodType<Prisma.HealthCountArgs> = z
  .object({
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), HealthCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.HealthCountArgs>;

export const HealthCountZodSchema = z
  .object({
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), HealthCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();

// File: createOneHealth.schema.ts

export const HealthCreateOneSchema = z.object({
  select: HealthSelectObjectSchema.optional(),
  data: z.union([
    HealthCreateInputObjectSchema,
    HealthUncheckedCreateInputObjectSchema,
  ]),
});

// File: createManyHealth.schema.ts

export const HealthCreateManySchema = z.object({
  data: z.union([
    HealthCreateManyInputObjectSchema,
    z.array(HealthCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

// File: createManyAndReturnHealth.schema.ts

export const HealthCreateManyAndReturnSchema = z
  .object({
    select: HealthSelectObjectSchema.optional(),
    data: z.union([
      HealthCreateManyInputObjectSchema,
      z.array(HealthCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

// File: deleteOneHealth.schema.ts

export const HealthDeleteOneSchema = z.object({
  select: HealthSelectObjectSchema.optional(),
  where: HealthWhereUniqueInputObjectSchema,
});

// File: deleteManyHealth.schema.ts

export const HealthDeleteManySchema = z.object({
  where: HealthWhereInputObjectSchema.optional(),
});

// File: updateOneHealth.schema.ts

export const HealthUpdateOneSchema = z.object({
  select: HealthSelectObjectSchema.optional(),
  data: z.union([
    HealthUpdateInputObjectSchema,
    HealthUncheckedUpdateInputObjectSchema,
  ]),
  where: HealthWhereUniqueInputObjectSchema,
});

// File: updateManyHealth.schema.ts

export const HealthUpdateManySchema = z.object({
  data: HealthUpdateManyMutationInputObjectSchema,
  where: HealthWhereInputObjectSchema.optional(),
});

// File: updateManyAndReturnHealth.schema.ts

export const HealthUpdateManyAndReturnSchema = z
  .object({
    select: HealthSelectObjectSchema.optional(),
    data: HealthUpdateManyMutationInputObjectSchema,
    where: HealthWhereInputObjectSchema.optional(),
  })
  .strict();

// File: upsertOneHealth.schema.ts

export const HealthUpsertSchema = z.object({
  select: HealthSelectObjectSchema.optional(),
  where: HealthWhereUniqueInputObjectSchema,
  create: z.union([
    HealthCreateInputObjectSchema,
    HealthUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    HealthUpdateInputObjectSchema,
    HealthUncheckedUpdateInputObjectSchema,
  ]),
});

// File: aggregateHealth.schema.ts

export const HealthAggregateSchema: z.ZodType<Prisma.HealthAggregateArgs> = z
  .object({
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), HealthCountAggregateInputObjectSchema])
      .optional(),
    _min: HealthMinAggregateInputObjectSchema.optional(),
    _max: HealthMaxAggregateInputObjectSchema.optional(),
    _avg: HealthAvgAggregateInputObjectSchema.optional(),
    _sum: HealthSumAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.HealthAggregateArgs>;

export const HealthAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        HealthOrderByWithRelationInputObjectSchema,
        HealthOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: HealthWhereInputObjectSchema.optional(),
    cursor: HealthWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), HealthCountAggregateInputObjectSchema])
      .optional(),
    _min: HealthMinAggregateInputObjectSchema.optional(),
    _max: HealthMaxAggregateInputObjectSchema.optional(),
    _avg: HealthAvgAggregateInputObjectSchema.optional(),
    _sum: HealthSumAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: groupByHealth.schema.ts

export const HealthGroupBySchema: z.ZodType<Prisma.HealthGroupByArgs> = z
  .object({
    where: HealthWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        HealthOrderByWithAggregationInputObjectSchema,
        HealthOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: HealthScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(HealthScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), HealthCountAggregateInputObjectSchema])
      .optional(),
    _min: HealthMinAggregateInputObjectSchema.optional(),
    _max: HealthMaxAggregateInputObjectSchema.optional(),
    _avg: HealthAvgAggregateInputObjectSchema.optional(),
    _sum: HealthSumAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.HealthGroupByArgs>;

export const HealthGroupByZodSchema = z
  .object({
    where: HealthWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        HealthOrderByWithAggregationInputObjectSchema,
        HealthOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: HealthScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(HealthScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), HealthCountAggregateInputObjectSchema])
      .optional(),
    _min: HealthMinAggregateInputObjectSchema.optional(),
    _max: HealthMaxAggregateInputObjectSchema.optional(),
    _avg: HealthAvgAggregateInputObjectSchema.optional(),
    _sum: HealthSumAggregateInputObjectSchema.optional(),
  })
  .strict();

// File: AccountFindUniqueResult.schema.ts
export const AccountFindUniqueResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
    isActive: z.boolean(),
    emails: z.array(z.unknown()),
    password: z.unknown(),
    passwordId: z.string(),
  })
);

// File: AccountFindFirstResult.schema.ts
export const AccountFindFirstResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
    isActive: z.boolean(),
    emails: z.array(z.unknown()),
    password: z.unknown(),
    passwordId: z.string(),
  })
);

// File: AccountFindManyResult.schema.ts
export const AccountFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
      deletedAt: z.date(),
      isActive: z.boolean(),
      emails: z.array(z.unknown()),
      password: z.unknown(),
      passwordId: z.string(),
    })
  ),
  pagination: z.object({
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1),
    total: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
});

// File: AccountCreateResult.schema.ts
export const AccountCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  isActive: z.boolean(),
  emails: z.array(z.unknown()),
  password: z.unknown(),
  passwordId: z.string(),
});

// File: AccountCreateManyResult.schema.ts
export const AccountCreateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountUpdateResult.schema.ts
export const AccountUpdateResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
    isActive: z.boolean(),
    emails: z.array(z.unknown()),
    password: z.unknown(),
    passwordId: z.string(),
  })
);

// File: AccountUpdateManyResult.schema.ts
export const AccountUpdateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountUpsertResult.schema.ts
export const AccountUpsertResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  isActive: z.boolean(),
  emails: z.array(z.unknown()),
  password: z.unknown(),
  passwordId: z.string(),
});

// File: AccountDeleteResult.schema.ts
export const AccountDeleteResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
    isActive: z.boolean(),
    emails: z.array(z.unknown()),
    password: z.unknown(),
    passwordId: z.string(),
  })
);

// File: AccountDeleteManyResult.schema.ts
export const AccountDeleteManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountAggregateResult.schema.ts
export const AccountAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      createdAt: z.number(),
      updatedAt: z.number(),
      deletedAt: z.number(),
      isActive: z.number(),
      emails: z.number(),
      password: z.number(),
      passwordId: z.number(),
    })
    .optional(),
  _min: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
      deletedAt: z.date().nullable(),
      passwordId: z.string().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
      deletedAt: z.date().nullable(),
      passwordId: z.string().nullable(),
    })
    .nullable()
    .optional(),
});

// File: AccountGroupByResult.schema.ts
export const AccountGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date(),
    isActive: z.boolean(),
    passwordId: z.string(),
    _count: z
      .object({
        id: z.number(),
        createdAt: z.number(),
        updatedAt: z.number(),
        deletedAt: z.number(),
        isActive: z.number(),
        emails: z.number(),
        password: z.number(),
        passwordId: z.number(),
      })
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        deletedAt: z.date().nullable(),
        passwordId: z.string().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        deletedAt: z.date().nullable(),
        passwordId: z.string().nullable(),
      })
      .nullable()
      .optional(),
  })
);

// File: AccountCountResult.schema.ts
export const AccountCountResultSchema = z.number();

// File: AccountEmailFindUniqueResult.schema.ts
export const AccountEmailFindUniqueResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string(),
    isPrimary: z.boolean(),
    account: z.unknown().optional(),
    accountId: z.string().optional(),
    verification: z.unknown().optional(),
    verificationId: z.string().optional(),
  })
);

// File: AccountEmailFindFirstResult.schema.ts
export const AccountEmailFindFirstResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string(),
    isPrimary: z.boolean(),
    account: z.unknown().optional(),
    accountId: z.string().optional(),
    verification: z.unknown().optional(),
    verificationId: z.string().optional(),
  })
);

// File: AccountEmailFindManyResult.schema.ts
export const AccountEmailFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
      email: z.string(),
      isPrimary: z.boolean(),
      account: z.unknown().optional(),
      accountId: z.string().optional(),
      verification: z.unknown().optional(),
      verificationId: z.string().optional(),
    })
  ),
  pagination: z.object({
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1),
    total: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
});

// File: AccountEmailCreateResult.schema.ts
export const AccountEmailCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.string(),
  isPrimary: z.boolean(),
  account: z.unknown().optional(),
  accountId: z.string().optional(),
  verification: z.unknown().optional(),
  verificationId: z.string().optional(),
});

// File: AccountEmailCreateManyResult.schema.ts
export const AccountEmailCreateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountEmailUpdateResult.schema.ts
export const AccountEmailUpdateResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string(),
    isPrimary: z.boolean(),
    account: z.unknown().optional(),
    accountId: z.string().optional(),
    verification: z.unknown().optional(),
    verificationId: z.string().optional(),
  })
);

// File: AccountEmailUpdateManyResult.schema.ts
export const AccountEmailUpdateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountEmailUpsertResult.schema.ts
export const AccountEmailUpsertResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.string(),
  isPrimary: z.boolean(),
  account: z.unknown().optional(),
  accountId: z.string().optional(),
  verification: z.unknown().optional(),
  verificationId: z.string().optional(),
});

// File: AccountEmailDeleteResult.schema.ts
export const AccountEmailDeleteResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string(),
    isPrimary: z.boolean(),
    account: z.unknown().optional(),
    accountId: z.string().optional(),
    verification: z.unknown().optional(),
    verificationId: z.string().optional(),
  })
);

// File: AccountEmailDeleteManyResult.schema.ts
export const AccountEmailDeleteManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountEmailAggregateResult.schema.ts
export const AccountEmailAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      createdAt: z.number(),
      updatedAt: z.number(),
      email: z.number(),
      isPrimary: z.number(),
      account: z.number(),
      accountId: z.number(),
      verification: z.number(),
      verificationId: z.number(),
    })
    .optional(),
  _min: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
      email: z.string().nullable(),
      accountId: z.string().nullable(),
      verificationId: z.string().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
      email: z.string().nullable(),
      accountId: z.string().nullable(),
      verificationId: z.string().nullable(),
    })
    .nullable()
    .optional(),
});

// File: AccountEmailGroupByResult.schema.ts
export const AccountEmailGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    email: z.string(),
    isPrimary: z.boolean(),
    accountId: z.string(),
    verificationId: z.string(),
    _count: z
      .object({
        id: z.number(),
        createdAt: z.number(),
        updatedAt: z.number(),
        email: z.number(),
        isPrimary: z.number(),
        account: z.number(),
        accountId: z.number(),
        verification: z.number(),
        verificationId: z.number(),
      })
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        email: z.string().nullable(),
        accountId: z.string().nullable(),
        verificationId: z.string().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        email: z.string().nullable(),
        accountId: z.string().nullable(),
        verificationId: z.string().nullable(),
      })
      .nullable()
      .optional(),
  })
);

// File: AccountEmailCountResult.schema.ts
export const AccountEmailCountResultSchema = z.number();

// File: AccountEmailVerificationFindUniqueResult.schema.ts
export const AccountEmailVerificationFindUniqueResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    email: z.unknown().optional(),
  })
);

// File: AccountEmailVerificationFindFirstResult.schema.ts
export const AccountEmailVerificationFindFirstResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    email: z.unknown().optional(),
  })
);

// File: AccountEmailVerificationFindManyResult.schema.ts
export const AccountEmailVerificationFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      createdAt: z.date(),
      email: z.unknown().optional(),
    })
  ),
  pagination: z.object({
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1),
    total: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
});

// File: AccountEmailVerificationCreateResult.schema.ts
export const AccountEmailVerificationCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.unknown().optional(),
});

// File: AccountEmailVerificationCreateManyResult.schema.ts
export const AccountEmailVerificationCreateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountEmailVerificationUpdateResult.schema.ts
export const AccountEmailVerificationUpdateResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    email: z.unknown().optional(),
  })
);

// File: AccountEmailVerificationUpdateManyResult.schema.ts
export const AccountEmailVerificationUpdateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountEmailVerificationUpsertResult.schema.ts
export const AccountEmailVerificationUpsertResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.unknown().optional(),
});

// File: AccountEmailVerificationDeleteResult.schema.ts
export const AccountEmailVerificationDeleteResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    email: z.unknown().optional(),
  })
);

// File: AccountEmailVerificationDeleteManyResult.schema.ts
export const AccountEmailVerificationDeleteManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountEmailVerificationAggregateResult.schema.ts
export const AccountEmailVerificationAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      createdAt: z.number(),
      email: z.number(),
    })
    .optional(),
  _min: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
    })
    .nullable()
    .optional(),
});

// File: AccountEmailVerificationGroupByResult.schema.ts
export const AccountEmailVerificationGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    _count: z
      .object({
        id: z.number(),
        createdAt: z.number(),
        email: z.number(),
      })
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
      })
      .nullable()
      .optional(),
  })
);

// File: AccountEmailVerificationCountResult.schema.ts
export const AccountEmailVerificationCountResultSchema = z.number();

// File: AccountPasswordFindUniqueResult.schema.ts
export const AccountPasswordFindUniqueResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    account: z.unknown().optional(),
  })
);

// File: AccountPasswordFindFirstResult.schema.ts
export const AccountPasswordFindFirstResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    account: z.unknown().optional(),
  })
);

// File: AccountPasswordFindManyResult.schema.ts
export const AccountPasswordFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
      password: z.string(),
      account: z.unknown().optional(),
    })
  ),
  pagination: z.object({
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1),
    total: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
});

// File: AccountPasswordCreateResult.schema.ts
export const AccountPasswordCreateResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  account: z.unknown().optional(),
});

// File: AccountPasswordCreateManyResult.schema.ts
export const AccountPasswordCreateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountPasswordUpdateResult.schema.ts
export const AccountPasswordUpdateResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    account: z.unknown().optional(),
  })
);

// File: AccountPasswordUpdateManyResult.schema.ts
export const AccountPasswordUpdateManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountPasswordUpsertResult.schema.ts
export const AccountPasswordUpsertResultSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  account: z.unknown().optional(),
});

// File: AccountPasswordDeleteResult.schema.ts
export const AccountPasswordDeleteResultSchema = z.nullable(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    account: z.unknown().optional(),
  })
);

// File: AccountPasswordDeleteManyResult.schema.ts
export const AccountPasswordDeleteManyResultSchema = z.object({
  count: z.number(),
});

// File: AccountPasswordAggregateResult.schema.ts
export const AccountPasswordAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      createdAt: z.number(),
      updatedAt: z.number(),
      password: z.number(),
      account: z.number(),
    })
    .optional(),
  _min: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
      password: z.string().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.string().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
      password: z.string().nullable(),
    })
    .nullable()
    .optional(),
});

// File: AccountPasswordGroupByResult.schema.ts
export const AccountPasswordGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string(),
    _count: z
      .object({
        id: z.number(),
        createdAt: z.number(),
        updatedAt: z.number(),
        password: z.number(),
        account: z.number(),
      })
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        password: z.string().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        password: z.string().nullable(),
      })
      .nullable()
      .optional(),
  })
);

// File: AccountPasswordCountResult.schema.ts
export const AccountPasswordCountResultSchema = z.number();

// File: HealthFindUniqueResult.schema.ts
export const HealthFindUniqueResultSchema = z.nullable(
  z.object({
    id: z.number().int(),
    status: z.unknown(),
    lastChecked: z.date(),
    metadata: z.unknown().optional(),
  })
);

// File: HealthFindFirstResult.schema.ts
export const HealthFindFirstResultSchema = z.nullable(
  z.object({
    id: z.number().int(),
    status: z.unknown(),
    lastChecked: z.date(),
    metadata: z.unknown().optional(),
  })
);

// File: HealthFindManyResult.schema.ts
export const HealthFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.number().int(),
      status: z.unknown(),
      lastChecked: z.date(),
      metadata: z.unknown().optional(),
    })
  ),
  pagination: z.object({
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1),
    total: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
});

// File: HealthCreateResult.schema.ts
export const HealthCreateResultSchema = z.object({
  id: z.number().int(),
  status: z.unknown(),
  lastChecked: z.date(),
  metadata: z.unknown().optional(),
});

// File: HealthCreateManyResult.schema.ts
export const HealthCreateManyResultSchema = z.object({
  count: z.number(),
});

// File: HealthUpdateResult.schema.ts
export const HealthUpdateResultSchema = z.nullable(
  z.object({
    id: z.number().int(),
    status: z.unknown(),
    lastChecked: z.date(),
    metadata: z.unknown().optional(),
  })
);

// File: HealthUpdateManyResult.schema.ts
export const HealthUpdateManyResultSchema = z.object({
  count: z.number(),
});

// File: HealthUpsertResult.schema.ts
export const HealthUpsertResultSchema = z.object({
  id: z.number().int(),
  status: z.unknown(),
  lastChecked: z.date(),
  metadata: z.unknown().optional(),
});

// File: HealthDeleteResult.schema.ts
export const HealthDeleteResultSchema = z.nullable(
  z.object({
    id: z.number().int(),
    status: z.unknown(),
    lastChecked: z.date(),
    metadata: z.unknown().optional(),
  })
);

// File: HealthDeleteManyResult.schema.ts
export const HealthDeleteManyResultSchema = z.object({
  count: z.number(),
});

// File: HealthAggregateResult.schema.ts
export const HealthAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      status: z.number(),
      lastChecked: z.number(),
      metadata: z.number(),
    })
    .optional(),
  _sum: z
    .object({
      id: z.number().nullable(),
    })
    .nullable()
    .optional(),
  _avg: z
    .object({
      id: z.number().nullable(),
    })
    .nullable()
    .optional(),
  _min: z
    .object({
      id: z.number().int().nullable(),
      lastChecked: z.date().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.number().int().nullable(),
      lastChecked: z.date().nullable(),
    })
    .nullable()
    .optional(),
});

// File: HealthGroupByResult.schema.ts
export const HealthGroupByResultSchema = z.array(
  z.object({
    id: z.number().int(),
    lastChecked: z.date(),
    metadata: z.unknown(),
    _count: z
      .object({
        id: z.number(),
        status: z.number(),
        lastChecked: z.number(),
        metadata: z.number(),
      })
      .optional(),
    _sum: z
      .object({
        id: z.number().nullable(),
      })
      .nullable()
      .optional(),
    _avg: z
      .object({
        id: z.number().nullable(),
      })
      .nullable()
      .optional(),
    _min: z
      .object({
        id: z.number().int().nullable(),
        lastChecked: z.date().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.number().int().nullable(),
        lastChecked: z.date().nullable(),
      })
      .nullable()
      .optional(),
  })
);

// File: HealthCountResult.schema.ts
export const HealthCountResultSchema = z.number();

// File: index.ts

// File: index.ts

// File: account-model.ts

export const AccountModel = z.object({
  id: z.string(),
  createdAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  updatedAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  deletedAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  isActive: z.boolean().default(true),
  passwordId: z.string(),
});

export type AccountType = z.infer<typeof AccountModel>;

// File: account-email-model.ts

export const AccountEmailModel = z.object({
  id: z.string(),
  createdAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  updatedAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  email: z.string(),
  isPrimary: z.boolean(),
  accountId: z.string().nullish(),
  verificationId: z.string().nullish(),
});

export type AccountEmailType = z.infer<typeof AccountEmailModel>;

// File: account-email-verification-model.ts

export const AccountEmailVerificationModel = z.object({
  id: z.string(),
  createdAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
});

export type AccountEmailVerificationType = z.infer<
  typeof AccountEmailVerificationModel
>;

// File: account-password-model.ts

export const AccountPasswordModel = z.object({
  id: z.string(),
  createdAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  updatedAt: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  password: z.string(),
});

export type AccountPasswordType = z.infer<typeof AccountPasswordModel>;

// File: health-model.ts

export const HealthModel = z.object({
  id: z.number().int(),
  status: HealthStatusSchema.default('OK'),
  lastChecked: z
    .string()
    .regex(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,
      'Invalid ISO datetime'
    )
    .transform((v) => new Date(v)),
  metadata: z
    .unknown()
    .refine((val) => {
      /**
       * @param obj
       * @param depth
       */
      const getDepth = (obj: unknown, depth = 0): number => {
        if (depth > 10) return depth;
        if (obj === null || typeof obj !== 'object') return depth;
        const values = Object.values(obj as Record<string, unknown>);
        if (values.length === 0) return depth;
        return Math.max(...values.map((v) => getDepth(v, depth + 1)));
      };
      return getDepth(val) <= 10;
    }, 'JSON nesting depth exceeds maximum of 10')
    .nullish(),
});

export type HealthType = z.infer<typeof HealthModel>;
