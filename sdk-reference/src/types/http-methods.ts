export const httpMethods = [
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'options',
] as const;

export type HttpMethod = (typeof httpMethods)[number];
