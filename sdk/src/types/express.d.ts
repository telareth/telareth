import 'express-serve-static-core';

declare module 'express-serve-static-core' {
  interface Request {
    /**
     * Indicates whether the service proxies have been initialized.
     */
    proxiesReady?: boolean;
  }
}
