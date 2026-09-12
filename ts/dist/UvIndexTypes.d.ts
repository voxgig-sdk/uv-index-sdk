export interface UvIndex {
    fields?: any[];
    id?: string;
    metadata_created?: string;
    metadata_modified?: string;
    name?: string;
    notes?: string;
    organization?: Record<string, any>;
    records?: any[];
    resource_id?: string;
    resources?: any[];
    title?: string;
    total?: number;
}
export interface UvIndexLoadMatch {
    filter?: string;
    limit?: number;
    offset?: number;
    resource_id: string;
}
