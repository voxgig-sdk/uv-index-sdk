// Typed models for the UvIndex SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface UvIndex {
  fields?: any[]
  id?: string
  metadata_created?: string
  metadata_modified?: string
  name?: string
  notes?: string
  organization?: Record<string, any>
  records?: any[]
  resource_id?: string
  resources?: any[]
  title?: string
  total?: number
}

export interface UvIndexLoadMatch {
  filter?: string
  limit?: number
  offset?: number
  resource_id: string
}

