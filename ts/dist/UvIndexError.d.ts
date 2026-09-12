import { Context } from './Context';
declare class UvIndexError extends Error {
    isUvIndexError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { UvIndexError };
