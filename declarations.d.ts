declare module 'express-svelte';

declare namespace Express {
  export interface Response {
    svelte: (viewName: string, options?: any) => void;
  }
}
