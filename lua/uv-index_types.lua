-- Typed models for the UvIndex SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class UvIndex
---@field fields? table
---@field id? string
---@field metadata_created? string
---@field metadata_modified? string
---@field name? string
---@field notes? string
---@field organization? table
---@field records? table
---@field resource_id? string
---@field resources? table
---@field title? string
---@field total? number

---@class UvIndexLoadMatch
---@field fields? table
---@field id string
---@field metadata_created? string
---@field metadata_modified? string
---@field name? string
---@field notes? string
---@field organization? table
---@field records? table
---@field resource_id? string
---@field resources? table
---@field title? string
---@field total? number

local M = {}

return M
