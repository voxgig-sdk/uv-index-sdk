import { UvIndexEntityBase } from '../UvIndexEntityBase';
import type { UvIndexSDK } from '../UvIndexSDK';
import type { Control } from '../types';
import type { UvIndex, UvIndexLoadMatch } from '../UvIndexTypes';
declare class UvIndexEntity extends UvIndexEntityBase<UvIndex> {
    constructor(client: UvIndexSDK, entopts: any);
    make(this: UvIndexEntity): UvIndexEntity;
    load(this: any, reqmatch?: UvIndexLoadMatch, ctrl?: Control): Promise<UvIndexEntity>;
}
export { UvIndexEntity };
